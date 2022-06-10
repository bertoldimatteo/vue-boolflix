<template>
  <li class="card_video">
    <h3>{{film.title}}</h3>
    <h3>{{film.name}}</h3>
    <h4>{{film.original_title}}</h4>
    <h4>{{film.original_name}}</h4>
    <p>{{film.original_language}}</p>
    <p>{{film.vote_average}}</p>
  </li>
</template>

<script>
export default {
    name: 'CardVideo',
    props: {
        film: Object,
    },
}
</script>

<style lang="scss" scoped>
.card_video {
  width: 200px;
  height: 250px;
}
</style>