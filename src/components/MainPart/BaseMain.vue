<template>
    <main>
        <CardVideo v-for="film in filterItems" :key="film.id" :film="film"/>
    </main>
</template>

<script>
import axios from 'axios';
import CardVideo from '../CommonElements/CardVideo.vue';
import dataShared from '../../shared/dataShared.js';

export default {
    name: 'BaseMain',

    data() {
        return {
            dataShared,
            films: [],
        }
    },

    components: {
        CardVideo,

    },

    mounted() {
     axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '6f038455067a9f8d913bf429318fd950',
        query: dataShared.searchFilter,
        language: 'it-IT'
      }
        }).then((response) => {
            this.films = response.data.results;
        }).catch((error) => {
            console.log(error);
        })
    },

    computed: {
        filterItems() {
            return this.films.filter((elm) => {elm.title.toLowerCase().includes(this.dataShared.searchFilter.toLowerCase())});
        }
    }

}
</script>

<style lang="scss" scoped>

</style>