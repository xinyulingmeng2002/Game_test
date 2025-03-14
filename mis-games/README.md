后端接口对接方案

1. API 接口约定
功能	接口地址	方法	参数
获取分页游戏列表	/api/games	GET	page, limit, category, search
获取游戏详情	/api/games/:id	GET	-

2. 数据库设计
表名    字段名    类型    长度    是否可空    备注
games    id    int    11    NO    -
games    name    varchar    255    NO    -
games    category    varchar    255    NO    -
games    cover    varchar    255    NO    -
games    description    text    -    NO    -
games    created_at    datetime    -    NO    -
games    updated_at    datetime    -    NO    -

3. 数据库操作
// 获取分页游戏列表
SELECT * FROM games LIMIT 10 OFFSET 0;
// 获取游戏详情
SELECT * FROM games WHERE id = 1;

4. 代码实现
// Path: app/Http/Controllers/GameController.php
<?php

mis-games/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.vue
│  │  ├─ Sidebar.vue
│  │  ├─ GameCard.vue
│  │  ├─ SearchBox.vue
│  ├─ views/
│  │  ├─ Home.vue
│  │  ├─ GameDetail.vue
│  │  ├─ Disclaimer.vue
│  │  ├─ PrivacyPolicy.vue
│  │  ├─ About.vue
│  ├─ router/
│  │  ├─ index.js
│  ├─ api/
│  │  ├─ games.js
│  ├─ assets/
│  │  ├─ icons/
│  ├─ App.vue
│  ├─ main.js
