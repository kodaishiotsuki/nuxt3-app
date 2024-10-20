<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/users">User Index</NuxtLink>
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink>
  </nav>
</template>
