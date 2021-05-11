<template>
  <div class="list">
    <div v-for="person in orderedPeople" v-bind:key="person.id">
      <div class="list__name" @click="showDescription">
        <h3>{{ person.name }}</h3>
        <Description
          class="list__description"
          style="display: none"
          :description="person"
        ></Description>
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

import Description from "./Description";

Vue.use(VueAxios, axios);

export default {
  name: "People",
  components: {
    Description,
  },
  data() {
    return {
      people: null,
      description: {
        type: Object,
        required: true,
      },
    };
  },
  /*ORDENO ALFABÉTICAMENTE CON UNA COMPUTED PROPERTY*/
  computed:{
      orderedPeople: function(){
          return _.orderBy(this.people, 'name')
      }
  },
  created() {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        this.people = response.data.results;
        console.log(this.people);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
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
