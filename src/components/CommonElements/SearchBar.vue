<template>
  <div>
    <form >
      <input @keyup.enter="searchFilm" type="text" v-model="dataShared.searchFilter">
      <button type="submit">Cerca</button>
    </form>
  </div>
</template>

<script>
import dataShared from '../../shared/dataShared.js'
import axios from 'axios';

export default {
    name: 'SearchBar',
    data() {
        return {
          dataShared
        }
    },
    methods: {
      searchFilm: function(){
        axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '6f038455067a9f8d913bf429318fd950',
          query: this.dataShared.searchFilter,
          language: 'it-IT'
        }
          }).then((response) => {
              this.dataShared.films = response.data.results;
          }).catch((error) => {
              console.log(error);
        })
        axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '6f038455067a9f8d913bf429318fd950',
          query: this.dataShared.searchFilter,
          language: 'it-IT'
        }
          }).then((payload) => {
              this.dataShared.tvSeries = payload.data.results;
          }).catch((error) => {
              console.log(error);
        })
      },
    },
}
</script>

<style lang="scss" scoped>

</style>