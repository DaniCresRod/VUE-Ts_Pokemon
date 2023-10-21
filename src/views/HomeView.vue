<script setup lang="ts">
import explorador from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    
    <div id="poke-container">
      
    </div>

    <explorador/>

    
  </main>
</template>

<style lang="scss" scoped>
main{
  display:flex;
  flex-direction: row;

  div{
  width: 50vw;
  flex-wrap: wrap;
  }

}


</style>
