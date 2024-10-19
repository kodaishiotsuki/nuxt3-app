<script setup>
const route = useRoute();
const enableCustomLayout = () => {
  route.meta.layout = "default";
};
definePageMeta({
  layout: false,
});
</script>
<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>
