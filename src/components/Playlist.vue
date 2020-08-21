<template>
    <div>
        <div>
            <h2 id="now-playing">{{current.name === undefined ? 'Select a song to start playing!' : current.name}}</h2>
            <div id="controls">
                <button id="prev">Prev</button>
                <button id="play" v-if="!isPlaying" @click='playSong()'>►</button>
                <button id="pause" v-else @click='pause()'>❙ ❙</button>
                <button id="next" @click='next()'>Next</button>
            </div>
        </div>
        <div id="playlist">
            <h2>Playlist</h2>
            <h3 v-if="playlist.length === 0">The playlist is empty. Start adding songs!</h3>
            <button class="song" @click="playSong(song)" v-else v-for="song in playlist" :key="song.name">{{song.artist}} - {{song.name}}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            current: {},
            player: new Audio(),
            isPlaying: false
        }
    },
    methods: {
        playSong(song = {}){
            //scenario 1: no current song or clicking song name in playlist
            if(this.current.name === undefined){
                if(song.src !== undefined){
                    //user clicks song name in playlist
                    this.current = song;
                    this.$store.commit('updateIndexWithSong', song.name);
                }
                else{
                    //user clicks play button, play 1st song in playlist
                    this.current = this.playlist[0];
                }
                this.startPlayer();
            }
            else{
                //scenario 2: current song is set, unpause or select new song
                if(song.name !== undefined){
                    //clicking new song
                    this.current = song;
                    this.$store.commit('updateIndexWithSong', song.name);
                    this.startPlayer()
                }
                else{
                    //unpause
                    this.player.play();
                    this.isPlaying = true;
                }
            }
        },
        pause(){
            this.player.pause();
            this.isPlaying = false;
        },
        next(){
            //do nothing if no song in playlist or at last song in playlist
            if(this.playlistIndex + 1 >= this.playlist.length || this.current.name === undefined){
                return;
            }
            else{
                this.$store.commit('updatePlaylistIndex', this.playlistIndex + 1);
            }
            this.current = this.playlist[this.playlistIndex];
            this.startPlayer();
        },
        startPlayer(){
            this.player.src = this.current.src;
            this.player.play();
            this.isPlaying = true;
        },

    },
    computed: {
        //add our playlist getter as this.playlist
        ...mapGetters(['playlist', 'playlistIndex'])
    }
}
</script>

<style>
    button {
        appearance: none;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    button:hover {
        opacity: 0.8;
    }

    #now-playing {
        font-size: 1.3em;
        font-weight: 700;
        text-align: center;
    }

    #controls {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px 20px;
    }

    #controls button {
        border-radius: 7px;
        background-color: #b40000;
        color: #ffffff;
        padding: 15px 25px;
        margin: 0px 15px;
    }

    #playlist {
        padding: 0px 25px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    #playlist > * {
        padding: 10px 0;
    }

    #playlist h2 {
        color: #212121;
        font-size: 1.2em;
    }

    #playlist .song {
        margin: 0 auto;
    }
</style>