<template>
    <div>
        <div id="player">
            <p>Player coming soon</p>
        </div>
        <div id="playlist">
            <h2>Playlist</h2>
            <h3 v-if="$store.getters.playlist.length === 0">The playlist is empty. Start adding songs!</h3>
            <button class="song" v-else v-for="song in playlist" :key="song.name">{{song.artist}} - {{song.name}}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['playlist'])
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

    #playlist {
        padding: 0px 25px;
        text-align: center;
    }

    #playlist h2 {
        color: #212121;
        font-size: 1.2em;
    }

    #playlist .song {
        display: block;
        width: 100%;
    }
</style>