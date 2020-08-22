import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//create test playlist for now
const store = new Vuex.Store({
    state: {
        playlist: [
            {
                artist: 'rhythmrobot vs Owen Ni',
                name: 'Planet Uno',
                src: require('../assets/PlanetUno.mp3')
            },
            {
                artist: 'rhythmrobot vs Owen Ni',
                name: 'Off the Rails',
                src: require('../assets/OffTheRails.mp3')
            }
        ],
        playlistIndex : 0
    },
    mutations: {
        addSong(state, song){
            state.playlist.push(song);
        },
        clearPlaylist(state){
            state.playlist = [];
        },
        updateIndexWithSong(state, songName){
            //if the user clicks the name of the song on a playlist, update the current index
            state.playlist.forEach((playlistSong, index) => {
                if(playlistSong.name === songName){
                    state.playlistIndex = index;
                    return;
                }
            });
        },
        updatePlaylistIndex(state, newIndex){
            state.playlistIndex = newIndex;
        }
    },
    getters: {
        playlist: state => state.playlist,
        playlistIndex: state => state.playlistIndex   
    }
});

export default store;