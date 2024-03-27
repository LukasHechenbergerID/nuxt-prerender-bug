import type { NuxtLoadingIndicator } from '#build/components'; import type {
NuxtLink } from '#build/components';
<template>
  <div>
    <div>
      <NuxtLoadingIndicator :throttle="0"></NuxtLoadingIndicator>
      <NuxtLink to="/" style="margin-right: 1rem">Start Page</NuxtLink>

      <NuxtLink to="/firstPage">Other Page</NuxtLink>
    </div>
    <NuxtPage> </NuxtPage>
  </div>
</template>
