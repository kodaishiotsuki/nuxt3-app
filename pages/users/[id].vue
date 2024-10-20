<script setup>
const route = useRoute();
const { id } = route.params;
</script>

<template>
  <p>ユーザID: {{ id }}</p>
</template>
