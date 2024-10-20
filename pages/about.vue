<script setup>
definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {
    console.log("to", to);
    console.log("from", from);
  }),
});
</script>
<template>
  <div>
    <h1>About Page</h1>
  </div>
</template>
