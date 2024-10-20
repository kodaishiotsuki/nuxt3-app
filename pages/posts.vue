<script setup>
// const { data: posts, error } = await useAsyncData(() =>
//   $fetch("https://jsonplaceholder.typicode.com/posts/")
// );
// console.log(useNuxtApp().payload.data);

// //$fetch関数
// const posts = ref([]);
// const data = await $fetch("https://jsonplaceholder.typicode.com/posts/");
// posts.value = data;

//fetch関数
const posts = ref([]);
const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
const data = await response.json();
posts.value = data;
</script>
<template>
  <div>
    <h1>Posts一覧</h1>
    <p v-if="error">{{ error }}</p>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
