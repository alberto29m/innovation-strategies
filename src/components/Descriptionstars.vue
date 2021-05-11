<template>
  <ul>
    <li>Length: {{description.length}} </li>
    <li>Crew: {{description.crew}}</li>
    <li>Passengers: {{description.passengers}}</li>
    <li>Consumables: {{description.consumables}}</li>
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