<template>
  <button v-if="a" class="t-btn">
    S Button
  </button>
</template>

<script lang="ts">
export default {
  name: 'SButton',
  data () {
    return {
      a: 'a'
    }
  }
}

</script>

<style scoped>
.t-btn {
  width: 100px;
  height: 30px;
  background: cyan;
  border-radius: 4px;
}
</style>
