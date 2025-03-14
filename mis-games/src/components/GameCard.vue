<template>
  <router-link :to="'/game/' + game.id" class="game-card">
    <img :src="game.image" :alt="game.title" class="game-image" />
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
  cursor: pointer;
  text-decoration: none;
  color: white;
}
img {
  width: 100%;
  border-radius: 10px;
}
p {
  font-size: 14px;
  font-weight: bold;
}
</style>
