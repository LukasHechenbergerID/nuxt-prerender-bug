<template>
  <h1>Small Payload</h1>
  <p>
    {{ data }}
  </p>
</template>

<script lang="ts" setup>
const { data } = await useFetch("https://restcountries.com/v3.1/all");
</script>
