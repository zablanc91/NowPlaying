import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        playlist: []
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