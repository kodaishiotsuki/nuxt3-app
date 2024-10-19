<script setup>
import { useCounter } from "~/composables/useCounter";

const { count, inc, dec } = useCounter(0);
</script>

<template>
  <div>
    <div>
      <img src="/icon.png" alt="Nuxt3 Icon" />
    </div>
    <h1>Main Page</h1>
    <div>
      <p>Count: {{ count }}</p>
    </div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>
