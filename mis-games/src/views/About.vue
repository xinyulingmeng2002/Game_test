<!-- src/views/About.vue -->
<template>

  <div class="contents about-page">
    <div style="font-family: sans-serif; padding: 18px; color: white;"><br>
      <h2 style="font-family: sans-serif; color: white;">About Us !</h2>
      <h2 style="font-family: sans-serif; text-align: center;">Welcome To <span id="W_Name1">MisGames</span></h2>
      <p><span id="W_Name2">MisGames</span> is a Professional <span id="W_Type1">Game</span> Platform. Here we will only
        provide you with interesting content
        that you will enjoy very much. We are committed to providing you the best of <span id="W_Type2">Game</span>,
        with a focus on reliability and <span id="W_Spec">Game</span>. we
        strive to turn our passion for <span id="W_Type3">Game</span> into a thriving website. We
        hope you enjoy our <span id="W_Type4">Game</span> as much as we enjoy giving them to you.</p>
      <p>I will keep on posting such valuable anf knowledgeable information on my Website for all of
        you. Your love and support matters a lot.</p>
      <p style="font-weight: bold; text-align: center;">Thank you For Visiting Our Site<br><br><span
          style="color: blue; font-size: 16px; font-weight: bold; text-align: center;">Have a great day !</span></p>
    </div><br><br>
  </div>
</template>

<script setup>
// 空 script setup 满足最低要求
</script>

<style scoped>
.about-page {
  padding: 2rem;
  margin-top: 4rem;
  font-family: 'Arial', sans-serif;
  color: white;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.contents {
  display: block;
  margin-top: 4rem;
  padding: 1rem 9.375rem 9.375rem;
  background: #222;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
  color: #67a8ef;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
}

strong {
  color: #007bff;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .about-page {
    padding: 1rem;
  }

  .contents {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.4rem;
  }
}

/* 桌面端样式 */
@media (min-width: 1024px) {
  .about-page {
    padding: 2rem;
  }

  .contents {
    padding: 1rem 9.375rem 9.375rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
  }

  ul {
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
}

/* 平板适配 */
@media (max-width: 1023px) and (min-width: 768px) {
  .about-page {
    padding: 1.5rem;
  }

  .contents {
    padding: 1rem 4.6875rem 4.6875rem;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.875rem;
  }

  h3 {
    font-size: 1.625rem;
  }

  p {
    font-size: 0.95rem;
  }

  ul {
    padding-left: 1.75rem;
  }

  li {
    margin-bottom: 0.45rem;
  }
}

/* 移动端适配 */
@media (max-width: 767px) {
  .about-page {
    padding: 9rem 1rem 1rem 1rem;
  }
}
</style>