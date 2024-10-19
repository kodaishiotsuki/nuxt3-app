<script setup>
const admin = true;
const layout = admin ? "custom" : "default";
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
