<style>
.navbar {
  position: fixed;
  top: 0;
}

:root {
  --sidebar-width: 170px; /* 桌面端默认宽度 */
}

#app {
  box-sizing: border-box;
  min-height: 100vh;
  background: #121212;
  color: white;
  font-family: 'Poppins', sans-serif;
}

/* ... existing code ... */

/* 桌面端样式 */
@media (min-width: 1024px) {
  :root {
    --sidebar-width: 170px;
  }
  .game-grid { 
    margin-left: var(--sidebar-width); /* 使用CSS变量 */
  }
}

/* 平板适配 */
@media (max-width: 1023px) and (min-width: 768px) {
  :root {
    --sidebar-width: 130px;
  }
  .game-grid {
    margin-left: var(--sidebar-width); /* 使用CSS变量 */
  }
}

/* 移动端基础字号调整 */
@media (max-width: 767px) {
  :root {
    --sidebar-width: 0px;
  }
  .game-grid {
    margin-left: var(--sidebar-width); /* 使用CSS变量 */
  }
  html {
    font-size: 14px;
  }
}

/* ... existing code ... */
</style>