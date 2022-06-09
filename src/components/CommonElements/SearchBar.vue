<template>
  <div>
    <form @submit.prevent="$emit('searching', searcFilter)">
      <input type="text" v-model="searcFilter">
      <button type="submit">Cerca</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
          searcFilter: '',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>