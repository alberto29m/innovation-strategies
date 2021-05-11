<template>
  <ul>
    <li>Height: {{description.height}} </li>
    <li>Hair color: {{description.hair_color}}</li>
    <li>Eye color: {{description.eye_color}}</li>
    <li>Gender: {{description.gender}}</li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
       
    }
  },
  props:['description']
};
</script>

<style scoped>

</style>