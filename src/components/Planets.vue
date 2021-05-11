<template>
  <div class="planets" >
    <div v-for="planet in planets">
      <router-link class="list__name" tag="h3" to="/description">
          {{planet.name}}
      </router-link>
    </div>
    <router-link class="go-back" to="/home">
      <span>&#8617;</span>
      <p>Go back</p>
    </router-link>
    
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Planets",
  data() {
    return {
      planets: null,
    };
  },
  mounted() {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((response) => {
        this.planets = response.data.results;
        console.log(this.planets);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  }

};
</script>

<style scoped>

</style>
