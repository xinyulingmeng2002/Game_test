<template>
  <router-link :to="'/game/' + game.id" class="game-card">
    <img :src="game.cover" class="cover" />
    <h3 class="title">{{ game.title }}</h3>
  </router-link>
</template>

<script setup>
defineProps({
  game: Object
});
</script>

<style scoped>
.game-card {
  width: 200px;
  background: #333;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
}
.cover {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.title {
  color: white;
  font-size: 14px;
  padding: 12px;
  margin: 0;
}
</style>