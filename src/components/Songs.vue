<template>
    <div id="songs">
        <h1>Insert Songs
        </h1>
        <div v-for="song in songs" :key="song.name">
            <p> {{song.artist}} - {{song.name}}</p>
            <button v-if="!isSongInPlaylist(song)" @click="addSong(song)">Add</button>
            <button v-else @click="removeSong(song)">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    methods: {
        isSongInPlaylist(song){
            if(this.playlist.length === 0){
                return false;
            }
            else{
                let playListSong;
                for(playListSong of this.playlist){
                    if(song.name === playListSong.name){
                        return true;
                    }
                }
                return false;
            }
        },
        addSong(song){
            this.$store.commit('addSongToPlaylist', song);
        },
        removeSong(song){
            this.$store.commit('removeSongFromPlaylist', song);
        }
    },
    computed: {
        //add our playlist getter as this.playlist
        ...mapGetters(['playlist', 'songs'])
    }
}
</script>

<style>
    #songs{
        text-align: center;
        color: white;
    }

    #songs > * {
        margin: 20px 0;
    }

    button {
        color: white;
    }
</style>