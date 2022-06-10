<template>
    <main class="container">
        <ul class="list">
            <CardVideo v-for="film in dataShared.films" :key="film.id" :film="film"/>
        </ul>
    </main>
</template>

<script>
import CardVideo from '../CommonElements/CardVideo.vue';
import dataShared from '../../shared/dataShared.js';

export default {
    name: 'BaseMain',

    data() {
        return {
            dataShared,
        }
    },

    components: {
        CardVideo,
    },
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1280px;
    margin: auto;
}
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    & li {
        list-style-type: none;
    }
}
</style>