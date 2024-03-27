<template>
  <div>
    <div>
      <NuxtLoadingIndicator :throttle="0"></NuxtLoadingIndicator>
      <NuxtLink to="/" style="margin-right: 1rem">Start Page</NuxtLink>
      <NuxtLink to="/pageWithBiggerPayload" style="margin-right: 1rem"
        >Page (Bigger Payload)</NuxtLink
      >
      <NuxtLink to="/pageWithSmallerPayload">Page (Smaller Payload)</NuxtLink>
      <NuxtLink to="/pageWithBiggerPayloadNotPrerendered"
        >Page (Bigger Payload - Not Prerendered!)</NuxtLink
      >
    </div>
    <NuxtPage> </NuxtPage>
  </div>
</template>
