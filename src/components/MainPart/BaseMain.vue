<template>
    <main>
        <div v-if="dataShared.searchFilm === true " class="search-container">
            <h2>Film</h2>
            <ul class="list">
                <CardVideo v-for="film in dataShared.films" :key="film.id" :film="film"/>
            </ul>
            <h2>Serie TV</h2>
            <ul class="list">
                <CardVideo v-for="serie in dataShared.tvSeries" :key="serie.id" :film="serie"/>
            </ul>
        </div>
        <div v-else>
            <div class="hero-container">

            </div>
            <div class="default-container">
                <div class="list-all">
                
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import CardVideo from '../CommonElements/CardVideo.vue';
import dataShared from '../../shared/dataShared.js';

import Vue from 'vue'
import Embed from 'v-video-embed'
 
// global register
Vue.use(Embed);

export default {
    name: 'BaseMain',

    data() {
        return {
            dataShared,
        }
    },

    components: {
        CardVideo,
    },
}
</script>

<style lang="scss" scoped>
.search-container {
    max-width: 1280px;
    margin: auto;
}
.hero-container{
    background-image: url('https://images.everyeye.it/img-notizie/stranger-things-4-misterioso-countdown-trailer-arrivo-domani-v3-581079-1280x720.webp');
    height: 850px;
    background-repeat: no-repeat;
    background-size: cover;
}
.default-container {
    max-width: 1800px;
    margin: auto;
}
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    & li {
        list-style-type: none;
    }
}
h2 {
    margin: 20px 0;
    font-size: 2.5rem;
}
</style>