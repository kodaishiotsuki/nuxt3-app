export default defineNuxtRouteMiddleware((to, from) => {
  const isAdmin = false;
  if (isAdmin === false) {
    return navigateTo("/users");
  }
});
