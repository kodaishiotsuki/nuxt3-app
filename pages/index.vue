<script setup>
import { useCounter } from "~/composables/useCounter";

const { count, inc, dec } = useCounter(0);
const { $hello } = useNuxtApp();
</script>

<template>
  <div>
    <div>
      <img src="/icon.png" alt="Nuxt3 Icon" />
    </div>
    <h1>Main Page</h1>
    <h2>{{ $hello("World") }}</h2>
    <div>
      <p>Count: {{ count }}</p>
    </div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>
