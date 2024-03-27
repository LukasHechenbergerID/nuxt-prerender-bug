<template>
  <h1>Small payload</h1>
  <p>
    {{ data }}
  </p>
</template>

<script lang="ts" setup>
const { data } = await useFetch("https://jsonplaceholder.typicode.com/todos");
</script>
