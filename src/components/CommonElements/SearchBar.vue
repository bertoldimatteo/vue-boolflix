<template>
  <div>
    <form @submit.prevent="$emit('searching', dataShared.searchFilter)">
      <input type="text" v-model="dataShared.searchFilter">
      <button type="submit">Cerca</button>
    </form>
  </div>
</template>

<script>
import dataShared from '../../shared/dataShared.js'

export default {
    name: 'SearchBar',
    data() {
        return {
          dataShared
        }
    }
}
</script>

<style lang="scss" scoped>

</style>