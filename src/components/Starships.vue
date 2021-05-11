<template>
  <div class="list">
    <div v-for="ship in orderedStaships" v-bind:key="ship.id">
      <div class="list__name" @click="showDescription">
        <h3>{{ ship.name }}</h3>
        <Descriptionstars
          class="list__description"
          style="display: none"
          :description="ship"
        ></Descriptionstars>
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

import Descriptionstars from "./Descriptionstars";

Vue.use(VueAxios, axios);

export default {
  name: "Starships",
  components: {
    Descriptionstars
  },
  data() {
    return {
      starships: null,
      description: {
        type: Object,
        required: true,
      },
    };
  },

/*ORDENO ALFABÉTICAMENTE CON UNA COMPUTED PROPERTY*/
  computed:{
      orderedStaships: function(){
          return _.orderBy(this.starships, 'name')
      }
  },
  
  /*LLAMADA A LA API*/
  created() {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((response) => {
        this.starships = response.data.results;
        console.log(this.starships);
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
    }
  }
};
</script>

<style scoped>
</style>
