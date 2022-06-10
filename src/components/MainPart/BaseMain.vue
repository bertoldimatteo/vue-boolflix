<template>
    <main>
        <CardVideo v-for="film in dataShared.films" :key="film.id" :film="film"/>
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

</style>