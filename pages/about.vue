<template>
  <div>
    <h1>About Page</h1>
  </div>
</template>
<script setup>
const title = ref("Aboutページ");
const description = ref("Aboutページ");
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
