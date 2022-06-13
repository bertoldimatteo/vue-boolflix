<template>
  <div id="app">
    <BaseHead/>
    <BaseMain/>
  </div>
</template>

<script>
import BaseHead from './components/MainPart/BaseHead.vue'
import BaseMain from './components/MainPart/BaseMain.vue'

export default {
  name: 'App',
  components: {
    BaseHead,
    BaseMain,
  }
}
</script>

<style lang="scss">
@import 'assets/style/global.scss';
</style>
