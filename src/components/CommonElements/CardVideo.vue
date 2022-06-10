<template>
  <div class="card_video">
    <p>{{film.title}}</p>
    <p>{{film.original_title}}</p>
    <p>{{film.original_language}}</p>
    <p>{{film.vote_average}}</p>
  </div>
</template>

<script>
export default {
    name: 'CardVideo',
    props: {
        film: Object,
    }
}
</script>

<style lang="scss" scoped>

</style>