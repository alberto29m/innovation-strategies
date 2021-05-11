<template>
  <ul>
    <li>Rotation Period: {{description.rotation_period}} </li>
    <li>Orbital Period: {{description.orbital_period}}</li>
    <li>Diameter: {{description.diameter}}</li>
    <li>Gravity: {{description.gravity}}</li>
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