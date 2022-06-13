<template>
  <div class="input-search">
      <input @keyup.enter="searchFilm" type="text" v-model="dataShared.searchFilter">
      <!-- <button type="submit">Cerca</button> -->
      <i class="icon fa-solid fa-bell icon fa-lg"></i>
      <i class="icon fa-solid fa-user fa-lg"></i>
  </div>
</template>

<script>
import dataShared from '../../shared/dataShared.js'
import { searchFilm } from '../../shared/dataShared.js'

export default {
    name: 'SearchBar',
    data() {
        return {
          dataShared
        }
    },
    methods: {
      searchFilm
    },
}
</script>

<style lang="scss" scoped>
.input-search > * {
  margin: 0 10px;
}
</style>