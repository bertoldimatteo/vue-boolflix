<template>
  <li class="card_video">
    <h3>{{film.title}}</h3>
    <h3>{{film.name}}</h3>
    <h4>{{film.original_title}}</h4>
    <h4>{{film.original_name}}</h4>
    <img :src="existFlag(film.original_language) ? require(`../../assets/images/${film.original_language}.png`): null">
    <p>{{film.vote_average}}</p>
  </li>
</template>

<script>
import dataShared from '../../shared/dataShared.js';

export default {
    name: 'CardVideo',
    props: {
        film: Object,
    },
    data() {
        return {
            dataShared,
        }
    },
    methods: {
      existFlag(lang) {
        return this.dataShared.flagAvailable.includes(lang);
      }
    }
}
</script>

<style lang="scss" scoped>
.card_video {
  width: 200px;
  height: 250px;

  & img {
    width: 100%;
  }
}
</style>