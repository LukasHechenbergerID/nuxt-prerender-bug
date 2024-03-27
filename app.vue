import type { NuxtLink } from '#build/components';
<template>
  <div>
    <div>
      <NuxtLink to="/" style="margin-right: 1rem">Start Page</NuxtLink>

      <NuxtLink to="/firstPage">Other Page</NuxtLink>
    </div>
    <NuxtPage> </NuxtPage>
  </div>
</template>
