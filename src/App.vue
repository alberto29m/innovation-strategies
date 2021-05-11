<template>
  <div id="app">
    <router-link tag="h1" class="title" to="/home">Star Wars Guide</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  }
}
</script>

<style>
/*GENERAL STYLES AND TITLE*/

@import url(https://fonts.googleapis.com/css?family=News+Cycle:400,700);

#app {
  width: 100%;
  height: 100vh;
  font-family: "News Cycle", sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #030202;
  overflow: hidden;
  background-image: url("assets/stars.jpg"); 
}
.title{
  font-size: 5rem;
  font-weight: bold;
  margin: 0;
  padding: 5vh 1rem;
  color: #E89E10;
  cursor: pointer;
  text-align: center;
  line-height: 110%;
}

/*GO BACK BUTTON*/

.go-back{
  position: absolute;
  bottom: 2vh;
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items:center;
  text-decoration: none;
  color: #E89E10;
  transition: 0.5s all;
}
.go-back span{
  font-size: 4rem;
  margin-right: 1rem;
}
.go-back p{
  font-size: 2rem;
  font-weight: bold;
}
.go-back:hover{
  color:white;
  transform: scale(1.2);
}

/*LIST STYLES IN COMMON*/
.list__name.show{
  display: flex;
  justify-content: center;
  align-items: center;
}

.list__name h3{
  font-size: 1.6rem;
  font-family: "News Cycle", sans-serif;
  cursor: pointer;
  color: white;
  margin: 0.5rem 0;
  transition: 0.5s all;
}
.list__name h3:hover {
  color: #E89E10;
  transform: scale(1.1);
}
.list__description{
  list-style: none;
}
.list__description.show{
  display:block;
}
.list__description{
    color: #E89E10;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: left;
}

/*MEDIA QUERIES*/

@media only screen and (max-width: 600px) {
  .title{
    font-size: 3rem;
    padding: 3vh 1vh;
  }
  .list__name {
    font-size: 1.4rem;
  }
}

</style>
