<template>
  <h1>Startpage</h1>
  <p>
    {{ data }}
  </p>
</template>

<script lang="ts" setup>
const { data } = await useFetch("https://api.apis.guru/v2/list.json");
</script>
