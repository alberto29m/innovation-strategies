<template>
  <div class="list">
    <div v-for="planet in orderedPlanets" v-bind:key="planet.id">
      <div class="list__name" @click="showDescription">
        <h3>{{ planet.name }}</h3>
        <Descriptionplanets
          class="list__description"
          style="display: none"
          :description="planet"
        ></Descriptionplanets>
      </div>
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
import _ from 'lodash';

import Descriptionplanets from "./Descriptionplanets";

Vue.use(VueAxios, axios);

export default {
  name: "Planets",
  components: {
    Descriptionplanets,
  },
  data() {
    return {
      planets: null,
      description: {
        type: Object,
        required: true,
      },
    };
  },
   /*ORDENO ALFABÉTICAMENTE CON UNA COMPUTED PROPERTY*/
  computed:{
      orderedPlanets: function(){
          return _.orderBy(this.planets, 'name')
      }
  },
  /*LLAMADA A LA API*/
  created() {
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
  },
  /*FUNCIÓN PARA ENSEÑAR EL COMPONENTE DESCRIPCIÓN WHEN CLICK */
  methods: {
    showDescription: function (e) {
      console.log(e.target);
      const element = e.target;
      const nextElement = element.nextSibling.nextElementSibling;
      console.log(nextElement);

      if (nextElement.style.display === "none") {
        element.parentNode.classList.add("show");
        nextElement.style.display = "block";
      } else {
        nextElement.style.display = "none";
        element.parentNode.classList.remove("show");
      }
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
</style>
