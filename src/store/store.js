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
        ]
    },
    mutations: {
        addSong(state, song){
            state.playlist.push(song);
        },
        clearPlaylist(state){
            state.playlist = [];
        }
    },
    getters: {
        playlist: state => state.playlist  
    }
});

export default store;