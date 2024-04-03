<template>
  <h1>Startpage (with bigger payload)</h1>
  <p>
    {{ data }}
  </p>
</template>

<script lang="ts" setup>
const { data } = await useFetch(
  "https://restcountries.com/v3.1/all"
);
</script>
