<template>
  <router-link :to="'/game/' + game.id" class="game-card">
    <img :src="game.image" class="game-image" />
    <p class="title">{{ game.title }}</p>
  </router-link>
</template>

<script setup>
defineProps({
  game: Object
});
</script>

<style scoped>
.game-card {
  display: block;
  width: 150px;
  text-align: center;
  margin: 10px;
  text-decoration: none;
  color: white;
}
.game-image {
  width: 100%;
  border-radius: 10px;
}
.title {
  font-size: 14px;
  margin-top: 5px;
}
</style>