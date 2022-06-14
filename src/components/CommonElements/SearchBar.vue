<template>
  <div class="input-search">
      <div class="search-container">
        <i class="icon search-icon fa-solid fa-magnifying-glass fa-lg"></i>
        <input @keyup.enter="searchFilm" type="text" v-model="dataShared.searchFilter">
      </div>
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
.input-search {
  display: flex;
  align-items: center;
}
.input-search > * {
  margin: 0 10px;
}
.search-container {
  display: flex;
  align-items: center;
}
input {
  padding: 3px 15px;
}
.search-icon {
  margin: 0 10px;
}
</style>