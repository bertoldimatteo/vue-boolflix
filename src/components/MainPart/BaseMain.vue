<template>
    <main>
        <div v-if="dataShared.searchQuery === true" class="search-container">
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
                <div class="box-buttons">
                    <button class="btn play" type="button"><i class="fa-solid fa-play"></i>Riproduci</button>
                    <button class="btn info" type="button"><i class="fa-solid fa-info"></i>Altre info</button>
                </div>
            </div>
            <div class="default-container">
                <div class="home-section">
                    <h3>I più popolari su Netflix</h3>
                    <div class="list-all">
                        <ul class="popular">
                            <CardVideo v-for="film in dataShared.popular" :key="film.id" :film="film"/>
                        </ul>
                    </div>
                </div>
                <div class="home-section">
                    <h3>Serie TV del momento</h3>
                    <div class="list-all">
                        <ul class="popular">
                            <CardVideo v-for="film in dataShared.tvPopular" :key="film.id" :film="film"/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import CardVideo from '../CommonElements/CardVideo.vue';
import dataShared from '../../shared/dataShared.js';
import axios from 'axios';

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
    created() {
        axios.get('https://api.themoviedb.org/3/trending/movie/week', {
        params: {
            api_key: '6f038455067a9f8d913bf429318fd950',
        }
            }).then((response) => {
                this.dataShared.popular = response.data.results;
            }).catch((error) => {
                console.log(error);
        })
        axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
            api_key: '6f038455067a9f8d913bf429318fd950',
        }
            }).then((response) => {
                this.dataShared.tvPopular = response.data.results;
            }).catch((error) => {
                console.log(error);
        })
        }
}
</script>

<style lang="scss" scoped>
main {
    margin-bottom: 50px;
}
.search-container {
    max-width: 1750px;
    margin: auto;
    margin-top: 80px;
}
.hero-container{
    background-image: url('https://images.everyeye.it/img-notizie/stranger-things-4-misterioso-countdown-trailer-arrivo-domani-v3-581079-1280x720.webp');
    height: 850px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    padding: 100px;
}
.default-container {
    overflow-x: scroll;
    padding: 50px;
}
.default-container::-webkit-scrollbar { 
    width: 0 !important 
}
.default-container h3 {
    margin-bottom: 50px;
    margin-left: 10px;
}
.list {
    display: flex;
    flex-wrap: wrap;

    & li {
        list-style-type: none;
        margin: 40px 5px;
    }
}
.list-all, .popular {
    display: flex;
}   
.popular > * {
    margin: 0 10px;
}
h2 {
    margin: 20px 0;
    font-size: 2.5rem;
}
.home-section {
    margin-bottom: 60px;
}
.btn {
    margin: 0 10px;
}
.btn > * {
    margin: 0 10px;
}
.info {
    background-color: grey;
    color: #fff;
}
</style>