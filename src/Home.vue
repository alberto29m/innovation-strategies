<template>
  <div class="home">
    <div class="home__buttons">
      <router-link to="/people">
        <button class="home__button">People</button>
      </router-link>

      <router-link to="/starships">
        <button class="home__button">Starships</button>
      </router-link>

      <router-link to="/planets">
        <button class="home__button">Planets</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["person"],
};
</script>

<style scoped>
.home__buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}
.home__button {
  font-size: 1rem;
  font-weight: bold;
  width: 250px;
  padding: 1rem;
  margin: 1rem;
  background-color: #E89E10;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  transform: (scale(1.2));
  transition: 0.5s all;
}
.home__button:hover {
  transform: scale(1.2);
  opacity: 0.8;
}

@media only screen and (max-width: 960px) {
  .home__buttons {
    flex-direction: column;
  }
}
</style>