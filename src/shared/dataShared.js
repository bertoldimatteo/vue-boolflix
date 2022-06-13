import Vue from 'vue';
import axios from 'axios';

export default Vue.observable ({
    searchFilter: '',
    films: [],
    tvSeries: [],
    popular: [],
    flagAvailable: [
        'en',
        'it',
        'fr',
        'de',
        'ja',
        'es',
    ],


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
})