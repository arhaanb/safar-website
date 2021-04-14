<template>
  <div class="container">
    <h1>404</h1>
    <h5>
      Page not found. You can go
      <router-link to="/">Home</router-link>
      <span>.</span>
    </h5>
  </div>
</template>

<style scoped>
.container {
  margin-top: 4em;
}
button {
  background: rgb(187, 104, 212);
  color: #fff;
  border: none;
  font-family: 'raleway';
}
button:hover {
  background: rgb(150, 79, 172);
  color: #fff;
}
button:active {
  color: #fff;
}
a {
  color: rgb(187, 104, 212);
  text-decoration: none;
}
a:hover {
  color: rgb(150, 79, 172);
}
</style>
