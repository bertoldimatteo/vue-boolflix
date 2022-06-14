<template>
  <header class="container">
      <nav class="navbar">
          <div class="left-navbar">
            <img src="../../assets/images/Logonetflix.png" alt="netflix logo">
            <ul class="icon-navbar">
                <li><a href="http://192.168.15.109:8080">Home</a></li>
                <li><a href="#">Serie TV</a></li>
                <li><a href="#">Film</a></li>
                <li><a href="#">Nuovi e popolari</a></li>
                <li><a href="#">La mia lista</a></li>
            </ul>
          </div>
          <div class="right-navbar">
                <i class="icon fa-solid fa-magnifying-glass fa-lg"></i>
                <SearchBar class="search-bar" @searching="dataShared.searchFilter"/>
          </div>
      </nav>
  </header>
</template>

<script>
import SearchBar from '../CommonElements/SearchBar.vue'
import dataShared from '../../shared/dataShared.js'

export default {
    name: 'BaseHead',
    components: { 
        SearchBar, 
        
    },   
    data() {
        return {
            dataShared,
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color:transparent;
    position: fixed;
    top: 0;
    width: 100%;
}
.navbar, .left-navbar, .icon-navbar, .right-navbar {
    display: flex;
    align-items: center;
} 
.navbar {
    justify-content: space-between;
    padding: 15px;
}
.left-navbar {
    & ul {
        list-style-type: none;
        margin: 0 40px;
    }
    & ul li {
        margin: 0 10px;
    }
    & a {
        text-decoration: none;
        font-size: .875rem;
        color:#fff
    }
    & a:hover {
        opacity: 0.6;
    }
}

img {
    max-width: 120px;
    width: 100px;
}
</style>