<template>
  <div>
    <NuxtLoadingIndicator :throttle="0"></NuxtLoadingIndicator>

    <div style="display: flex; gap: 1rem">
      <NuxtLink to="/">Start Page (Bigger payload)</NuxtLink>
      <NuxtLink to="/pageWithBiggerStaticPayload"
        >Page (Bigger static Payload)</NuxtLink
      >
      <NuxtLink to="/pageWithSmallerPayload">Page (Smaller Payload)</NuxtLink>
      <NuxtLink to="/pageWithBiggerPayloadNotPrerendered"
        >Page (Bigger Payload - Not Prerendered!)</NuxtLink
      >
      <NuxtLink to="/pageWithBiggerStaticPayloadNotPrerendered"
        >Page (Bigger Static Payload - Not Prerendered!)</NuxtLink
      >
    </div>
    <NuxtPage> </NuxtPage>
  </div>
</template>
