<template>
  <li class="card_video">
    <img v-if="film.poster_path" class="posterFilm" :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
    <img v-else src="http://www.asdalcione.it/wp-content/uploads/2016/08/jk-placeholder-image-1.jpg" alt="">
    <div class="film-info">
      <h3>{{film.title}}</h3>
      <h3>{{film.name}}</h3>
      <h4>{{film.original_title}}</h4>
      <h4>{{film.original_name}}</h4>
      <p><img class="flag" :src="existFlag(film.original_language) ? require(`../../assets/images/${film.original_language}.png`): null" alt=""></p>
      <div class="star-rating">
        <span v-for="n in 5" :key="n" class="fa fa-star" :class="{'checked' : filmScore(film.vote_average) >= n }"></span>
      </div>
      <p>{{film.overview}}</p>
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
  width: 280px;
  height: 180px;
  position: relative;
}
.flag {
  width: 50px;
}
.posterFilm {
  object-fit: cover; 
  width: 100%;
  height: 100%;
}
.star-rating {
  display: flex;
}
.checked {
  color: orange;
}
.film-info {
  display: none;
  padding: 10px;
  position: absolute;
  top: 125px;
  left: 0;
  background-color: #000;
}
.film-info > * {
  margin: 2px 0;
}
.card_video:hover {
  transform: scale(1.5);
  transition: 1s;
  z-index: 2;
  overflow-y: auto ;
}
.card_video:hover .film-info {
  display: block;
}
</style>