<template>
  <li class="card_video">
    <img class="posterFilm" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
    <h3>{{film.title}}</h3>
    <h3>{{film.name}}</h3>
    <h4>{{film.original_title}}</h4>
    <h4>{{film.original_name}}</h4>
    <p><img class="flag" :src="existFlag(film.original_language) ? require(`../../assets/images/${film.original_language}.png`): null" alt=""></p>
    <div class="star-rating">
      <span v-for="n in 5" :key="n" class="fa fa-star" :class="{'checked' : filmScore(film.vote_average) >= n }"></span>
    </div>
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
      },
      filmScore(score) {
        return Math.ceil(score / 2);
      },
    }
}
</script>

<style lang="scss" scoped>
.card_video {
  width: 200px;
  height: 450px;
}
.flag {
  width: 50px;
}
.posterFilm {
  width: 100%;
  height: 300px;
}
.star-rating {
  display: flex;
}
.checked {
  color: orange;
}
</style>