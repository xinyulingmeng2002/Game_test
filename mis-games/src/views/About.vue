<!-- src/views/About.vue -->
<template>
  <div class="about-page">
    <h1>关于 MisGames</h1>
    <div class="content">
      <section>
        <h2>我们的使命</h2>
        <p>为玩家提供最优质的小游戏体验...</p>
      </section>
      <section>
        <h2>联系我们</h2>
        <ul>
          <li>邮箱：support@misgames.site</li>
          <li>地址：虚拟星球 123 号</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
// 空 script setup 满足最低要求
</script>

<style scoped>
.about-page {
  padding: 2rem;
  margin-top: 4rem;
  line-height: 1.6;
}

h1 {
  color: #007bff;
  border-bottom: 2px solid #333;
  padding-bottom: 0.5rem;
}

section {
  margin: 2rem 0;
}
</style>