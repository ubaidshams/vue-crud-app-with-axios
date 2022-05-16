<template>
  <section class="Navbar">
    <article>
      <router-link to="/">Home</router-link>
      <router-link to="/create-user">Create</router-link>
    </article>
  </section>
</template>

<script>
export default {
  name: "NavbarC",
};
</script>

<style scoped>
.Navbar {
  width: 100%;
  height: 10vh;
  background: transparent;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #000;
}
.Navbar article {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Navbar article a {
  text-decoration: none;
  color: #222;
  background: #efefef;
  padding: 5px;
  border: 0.5px solid #efefef;
  border-radius: 5px;
  transition: all 0.3s linear;
}
.Navbar article a:hover {
  background: #222;
  color: #efefef;
}
</style>
