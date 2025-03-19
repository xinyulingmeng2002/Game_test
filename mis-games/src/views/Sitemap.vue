<template>
  <div class="contents sitemap-page">
    <h2 style="font-family: sans-serif; color: white;">SiteMap</h2>
    <iframe src="https://www.misgames.site/sitemap.html" frameborder="0"></iframe>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped lang="scss">
.sitemap-page {
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
  /* background: #222; */
  @include global.bg-common-color;
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

iframe {
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 8px;
}

@media (max-width: 767px) {
  .sitemap-page {
    padding: 1rem;
  }

  .contents {
    padding: 1rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  iframe {
    height: 400px;
  }
}

/* 桌面端样式 */
@media (min-width: 1024px) {
  .sitemap-page {
    padding: 2rem;
  }

  .contents {
    padding: 1rem 9.375rem 9.375rem;
  }

  h2 {
    font-size: 2rem;
  }

  iframe {
    height: 600px;
  }
}

/* 平板适配 */
@media (max-width: 1023px) and (min-width: 768px) {
  .sitemap-page {
    padding: 1.5rem;
  }

  .contents {
    padding: 1rem 4.6875rem 4.6875rem;
  }

  h2 {
    font-size: 1.875rem;
  }

  iframe {
    height: 500px;
  }
}

/* 移动端适配 */
@media (max-width: 767px) {
  .sitemap-page {
    padding: 10rem 1rem 1rem 1rem;
  }
}
</style>