<template>
  <header class="container">
      <nav>
          <div class="navLogo"></div>
          <div class="navSearch">
              <SearchBar/>
          </div>
      </nav>
  </header>
</template>

<script>
import SearchBar from '../CommonElements/SearchBar.vue'

export default {
    name: 'BaseHead',
    components: { 
        SearchBar, 
    },   
}
</script>

<style lang="scss" scoped>
.container {
    height: 60px;
    background-color:var(--first-color);
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>