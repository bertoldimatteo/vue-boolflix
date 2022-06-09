<template>
    <main>

    </main>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BaseMain',

    data() {
        return {

        }
    },

    components: {

    },

    mounted() {
     axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '6f038455067a9f8d913bf429318fd950',
        query: 'ritorno',
        language: 'it-IT'
      }
        }).then((response) => {
            this.films = response.data.results;
        }).catch((error) => {
            console.log(error);
        })
    },

}
</script>

<style lang="scss" scoped>

</style>