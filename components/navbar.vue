<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
    <NuxtLink to="/posts">Post List</NuxtLink>
    <NuxtLink to="/users">User</NuxtLink>

  </nav>
</template>
