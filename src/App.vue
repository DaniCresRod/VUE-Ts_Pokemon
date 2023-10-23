<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">PokeDesk</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;

  background: antiquewhite;
}

#poke-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50vw;
  justify-content: left;
  row-gap: 1vw;
  column-gap: 1vh;
}

.pokemon{
  width: 15vw;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
}

.img-container img{
  width: 10vw; 
}

.img-container img:hover{
  transform: scale(1.7);
}

.name{
  font-weight: bolder;
  text-transform: uppercase;
}

.number{
  display: none;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* nav {
  width: 90vw;
  font-size: 1rem;
  text-align: right; 
  margin-bottom: 2vh;
  border-radius: 5px;
  border:1px solid black;
} */

header{
  position:fixed;
  top:0;
  width: 90vw;
  font-size: 1rem;
  text-align: right; 
  border-radius: 5px;
  border:1px solid black;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a { 
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type { 
  border: 0;
  
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper { 
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav { 
    
    padding: 1rem 0;
    margin-top: 1rem;
  }

  img{
  width: 10vw;

}
} */
</style>