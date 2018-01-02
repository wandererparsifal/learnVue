<template>
  <div>
    <h1>{{ detailNumber }}</h1>
    <img src="/api/images?name=summer.jpg"/>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        detailNumber: '',
      };
    },
  };
</script>

<style>
</style>
