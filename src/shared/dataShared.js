import Vue from 'vue';

export default Vue.observable ({
    searchFilter: '',
    films: [],
    tvSeries: [],
    flagAvailable: [
        'en',
        'it',
        'fr',
        'de',
        'ja',
        'es',
    ],
})