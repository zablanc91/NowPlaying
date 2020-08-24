<template>
    <div id="header">
        <router-link to="/" class="header-link"><h1>Now Playing</h1></router-link>
        <router-link to="/songs" class="header-link" >songs</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    #header {
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        background-color: #212121;
        font-size: 2em;
        padding: 0.3em;
    }
    .header-link{
        text-decoration: none;
        color: #b40000;
    }

    .header-link:hover {
        opacity: 0.8;
    }
</style>