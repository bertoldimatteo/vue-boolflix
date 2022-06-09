<template>
    <main>
        <CardVideo v-for="film in filterItems" :key="film.id" :film="film"/>
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

    computed: {
        filterItems() {
            return this.dataShared.films.filter((elm) => {elm.title.toLowerCase().includes(this.dataShared.searchFilter.toLowerCase())});
        }
    }

}
</script>

<style lang="scss" scoped>

</style>