后端接口对接方案

1. API 接口约定
1.1功能	：查询游戏        
1.2方法 ：GET                     	   
2.2接口地址：https://admin.towsgames.site/api/index
1.4 参数
pageNum
string 
页码
可选
示例值:
1
pageSize
string 
展示条数
可选
示例值:
35
title
string 
游戏名称
可选
descr
string 
游戏简介
可选
cover
string 
游戏封面
可选
gurl
string 
游戏链接
可选


2.1功能 ：获取游戏详情描述	
2.2方法 : GET	
2.3.接口地址 ：https://admin.towsgames.site/api/getInfo/:id	


3.目录结构
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

4.接口后台内容示例：
{
    "total": 325,
    "rows": [
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 1,
            "title": "TenTrix",
            "descr": "TenTrix is easy to play and a pleasurable game for all ages! Simply drag the blocks and fill up all colored grids. Once you start, you will definitely be hooked: this 3D-style game awaits you!",
            "cover": "https://img.gamepix.com/games/tentrix/icon/tentrix.png?w=300",
            "gurl": "https://play.gamepix.com/tentrix/embed?sid=",
            "cid": 7
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 2,
            "title": "Hoop World",
            "descr": "Welcome to the exciting world of Hoop World! This basketball game offers endless fun and adventure with stunning flip dunks and hoop challenges.\n\nIn Hoop World, you'll master the art of the flip dunk and become a basketball hero. Whether you're a pro or just starting, you'll love the thrill of making perfect dunk shots and basketball flips.\n\nShow off your skills with amazing flip dunks.\nPerform incredible slam dunks and climb the hoops.\nNavigate through intricate basketball challenges and wet hoops.\nFeatures:\n\nBasketball Flip Dunk: Experience the excitement of performing flip dunks in a dynamic 3D environment.\nDunk Game: Enjoy a variety of dunk games, from classic basketball challenges to innovative new modes.\nHoop World: Explore the unique Hoop World with its endless challenges and fun basketball games.\nIn Hoop World, you can:\n\nSmash through barriers with powerful dunk shots.\nCompete against friends and players worldwide.\nFollow in the footsteps of legendary dunk heroes.\nDon't miss out on the fun! Download Hoop World: Flip Dunk Game 3D now and start your journey to becoming a dunking legend. Experience the thrill of basketball flips, hoop challenges, and amazing slam dunks.",
            "cover": "https://img.gamepix.com/games/hoop-world/icon/hoop-world.png?w=500",
            "gurl": "https://play.gamepix.com/hoop-world/embed?sid=",
            "cid": 8
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 3,
            "title": "Funny Shooter 2",
            "descr": "<p>Prepare to immerse yourself in the outrageous, adrenaline-pumping world of <b>Funny Shooter 2</b>. This standout offering in the <b>battle-games</b> genre takes the conventions of traditional <b>first-person-shooter</b> games and flips them on their head, delivering a high-octane experience that's as hilarious as it is thrilling.</p>\n\n<p>In <b>Funny Shooter 2</b>, you'll square off against hordes of outlandishly absurd enemies. These are not your typical run-of-the-mill foes - they burst with character and charm, making every encounter feel fresh and distinct. The creativity and diversity in enemy design showcase the developers' commitment to reframing what a <b>shooting</b> game can be.</p>\n\n<p>Furthermore, this game is not just about shooting. It also introduces a robust weapons upgrade system that will keep you hooked for hours on end. Scavenge for parts, purchase rare items from friendly NPCs, and craft powerful weaponry - your arsenal is in your hands. The gun customization aspect truly distinguishes Funny Shooter 2 from other <b>gun-games</b>, adding an engaging layer of strategy.</p>\n\n<p>The true strength of <b>Funny Shooter 2</b>, however, lies in its world-building. The atmosphere is whimsical yet immersive, drawing players into its distinct universe while also providing plenty of laugh-out-loud moments. From its lively locales to its zany characters, every aspect of this game oozes personality.</p>\n\n<p>In conclusion, <b>Funny Shooter 2</b> is more than just a game; it's an exhilarating escape into a world where humor meets high-stakes action. This perfect blend of addictive gameplay mechanics and charming narrative makes it one of the must-play titles for fans of <b>battle-games</b> and <b>first-person-shooter</b> games. Don't miss out on this unique gaming gem!</p>",
            "cover": "https://img.gamepix.com/games/funny-shooter-2/icon/funny-shooter-2.png?w=500",
            "gurl": "https://play.gamepix.com/funny-shooter-2/embed?sid=",
            "cid": 6
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 4,
            "title": "Body Drop 3D",
            "descr": "The game will delight you with a realistic simulation of the body falling! Its advantage is not only physics, but also the realistic behavior of the character, his animations, nice graphics and many levels!",
            "cover": "https://img.gamepix.com/games/body-drop-3d/icon/body-drop-3d.png?w=500",
            "gurl": "https://play.gamepix.com/body-drop-3d/embed?sid=",
            "cid": 10
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 5,
            "title": "Barbies Skate",
            "descr": "Experience the fun and challenges of sketchboarding with Barbie. Here, Barbie is the main character of the game, where she sketches to reach her destination. Stay aware of the new environment and different obstacles, and help Barbie avoid all the obstacles on her way.",
            "cover": "https://img.gamepix.com/games/barbies-sketch/icon/barbies-sketch.png?w=500",
            "gurl": "https://play.gamepix.com/barbies-sketch/embed?sid=",
            "cid": 8
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 6,
            "title": "Demolition Derby Life",
            "descr": "The only true motorsport aimed at ramming and crashing into your opponent deliberately is back.\n\nThe season mode is now available. Assemble your crew and join the professional demolition derby season.\n\nDemolition Derby Life is coming in hard with true destruction physics and detailed graphics bringing to life the most extreme demolition derby experience to date.\n\nTaking part in demolition derbies is not for the faint of heart as you ride your muscle car onto the dirt track. Every rider ready to crash your vehicle to rubble, and a roaring crowd eager to see you destruction in all its glory.\n\nTo become a true Demolition Derby legend you'll need skill, stamina, and the right crew to lift you to eternal glory.\n\nAre you ready for the Demolition Derby lifestyle? Download your free copy today and proof your skills.",
            "cover": "https://img.gamepix.com/games/demolition-derby-life/icon/demolition-derby-life.png?w=500",
            "gurl": "https://play.gamepix.com/demolition-derby-life/embed?sid=",
            "cid": 11
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 7,
            "title": "LOL Surprise Fresh Spring Look",
            "descr": "Welcome to the LOL Surprise Fresh Spring Look.  LOL Suprise Girls have some plans for welcoming their favorite season spring. They already filled their cupboard with new spring fashion. But they have a dilemma is to choose the best outfits. Browse the wardrobe and pick the suitable outfits for each one.",
            "cover": "https://img.gamepix.com/games/lol-surprise-fresh-spring-look/icon/lol-surprise-fresh-spring-look.png?w=500",
            "gurl": "https://play.gamepix.com/lol-surprise-fresh-spring-look/embed?sid=",
            "cid": 10
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 8,
            "title": "Skibidi Laser Kill",
            "descr": "Skibidi Laser Kill Game is a fast-paced, action-packed laser shooter arcade game. Players take control of a laser-wielding character and must defend themselves against waves of oncoming enemies. The game features a variety of enemies, each with their own unique attacks. Players must use their skills and reflexes to dodge enemy fire and take them down. ",
            "cover": "https://img.gamepix.com/games/skibidi-laser-kill/icon/skibidi-laser-kill.png?w=500",
            "gurl": "https://play.gamepix.com/skibidi-laser-kill/embed?sid=",
            "cid": 4
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 9,
            "title": "WW2 Call of Sniper",
            "descr": "Welcome to the military games or war games in this world war war heroes games you will take fights for your country lead the armies in this ww2 games to win the battle games which is call for duty in the discord battlefield you should be aware of the world war zone where your army will fight against the enemies in these action games and shooting games undawn. This game you can call \"Call for duty mobile guerra mundial or war world. Many different challenges like war machines survival and machine gun games take war fight in word war because this will be the world of war take you tank army and snipers on the fixed position where you can easily attack on the enemies make you juegoes de pistolas army men in front while you were in wwii army games in legends mobile shooting games. You have played many gun games or dead trigger offline shooting games but you never experienced the battle prime or top_games before which are sniper games for free. If you are looking for offline games then this game is best for you.\n\nGet ready to answer the call for duty in WW2 Game. If you like sniper games, then you are at the right battlefield. Grab your shotgun to fight in WW2 games and experience infinite fps mission of sniper games. Come to the battle field of real WW2 shooting games and do your duty rapid-fire combat battlefield in World War 2 gun games. There are fare number of war games that are WW2.\n\nAnswer to the call of your duty in WW2 Games!\n\nUse your battle weapons like shotgun or sniper as world war soldier hero shooter in COD military games. In whole field is full of fps WW2 shooter mission so watch out for enemy fire in sniper games and do your duty as sniper expert. Enjoy as tps II shotgun shooter in shooting games and answer to the call for duty.\n\nIt’s a field of infinite ww2 strategic battlefield in shooting games for survival. With Call of Sniper you don’t have to wait anymore for the battle with infinite mission challenges that will test your first person shooter skills and techniques. Just parachute down from a warplane inside battleground of WW2 using your secret army training. Call out different loot, in mission shooting games and survive this war in the middle of winter duty!\n\nPlay WW2 shooting games where battlefield is the way survive the war. Lots of challenging mission you must assume the role of an elite world war sniper soldier in battlefield and use strategy to collect weapons in battle to become last man surviving in this offline fps game, become a world war hero. In Call of Sniper combined with intense combat from your enemy side at the gate battle shooting challenge so using all your action gun shooting skills is key to winning. Optimize your shooting gaming experience by updating your health and artillery by collecting items dropped from the warplane!\n\nWW2 Games | FPS Shooting Games Features:\n- Hi-res graphics with cool fighting snow covered environment!\n- Amazing and easy to handle controls!\n- WW2 war shooting games as well as fps sound effects!",
            "cover": "https://img.gamepix.com/games/ww2-call-of-sniper/icon/ww2-call-of-sniper.png?w=500",
            "gurl": "https://play.gamepix.com/ww2-call-of-sniper/embed?sid=",
            "cid": 3
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 10,
            "title": "Flip Trickster - Parkour Simulator",
            "descr": "Feel the adrenaline as you are flipping in the air after jumping down some crazy heights.\nDo insane jumps and flips down obstacles and land in the goal area in this parkour and freerunning inspired simulation game.\n\nUsing simple game mechanics you can jump, flip, and crash with only one finger.\n\nFeatures:\nRealistic physics\nParkour inspired gameplay\n10 Stages with over 40 levels\nCharacter customization\n10+ hats to choose from\nMore levels coming soon!\n\nNew levels and content are added regularly, and your reviews are very important so your requests can come true.\n\nMake your parkour dreams a reality.\nMaster the most extreme flips, tricks, and jumps.",
            "cover": "https://img.gamepix.com/games/flip-trickster-parkour-simulator/icon/flip-trickster-parkour-simulator.png?w=500",
            "gurl": "https://play.gamepix.com/flip-trickster-parkour-simulator/embed?sid=",
            "cid": 1
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 11,
            "title": "Ultimate Flying Car",
            "descr": "Do you want to take fast rides and flights on the long streets of the city? Ultimate Flying Car game invites you to realistic flying car simulator experience. Explore the sky with stylish flying cars, or unlock new cars by participating in races. You can play all of these game modes either 1 player or 2 player.",
            "cover": "https://img.gamepix.com/games/ultimate-flying-car/icon/ultimate-flying-car.png?w=500",
            "gurl": "https://play.gamepix.com/ultimate-flying-car/embed?sid=",
            "cid": 3
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 12,
            "title": "WW1 Battle Simulator",
            "descr": "Battle simulator in ww1\n\nThe epic war has begun! In this ww1 sim, you will have to battle to save the world!\nYou will need all your strategy and tactics to achieve victory!\n\n.. no more trenches - just tanks n guns!\n\nSounds:freesound.org\nMusic_Geoplex_Drift",
            "cover": "https://img.gamepix.com/games/ww1-battle-simulator/icon/ww1-battle-simulator.png?w=500",
            "gurl": "https://play.gamepix.com/ww1-battle-simulator/embed?sid=",
            "cid": 1
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 13,
            "title": "Merge Mine - Idle Clicker",
            "descr": "Welcome to Merge Mine - Idle Clicker, the ultimate game for those who love mining, merging and clicking! This game is perfect for those who enjoy idle clicker games, as well as those who love to merge and manage their resources.\n\nIn Merge Mine - Idle Clicker, you play as a miner who is tasked with extracting precious resources from the ground. As you progress through the game, you will unlock new mines, hire more miners, and upgrade your equipment to increase your mining efficiency.",
            "cover": "https://img.gamepix.com/games/merge-mine-idle-clicker/icon/merge-mine-idle-clicker.png?w=500",
            "gurl": "https://play.gamepix.com/merge-mine-idle-clicker/embed?sid=",
            "cid": 5
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 14,
            "title": "War of Tanks 3D",
            "descr": "Prepare for an adrenaline-fueled battle! Enlist now in epic, explosive open world tank battles, where honor is at stake. Collaborate with your teammates to devise the ultimate strategy and face off against commanders from across the globe. The destiny of your alliance rests in your hands. Join the fight today!",
            "cover": "https://img.gamepix.com/games/war-of-tanks-3d/icon/war-of-tanks-3d.png?w=500",
            "gurl": "https://play.gamepix.com/war-of-tanks-3d/embed?sid=",
            "cid": 1
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 15,
            "title": "Ultimate Flying Car",
            "descr": "Do you want to take fast rides and flights on the long streets of the city? Ultimate Flying Car game invites you to realistic flying car simulator experience. Explore the sky with stylish flying cars, or unlock new cars by participating in races. You can play all of these game modes either 1 player or 2 player.",
            "cover": "https://img.gamepix.com/games/ultimate-flying-car/icon/ultimate-flying-car.png?w=500",
            "gurl": "https://play.gamepix.com/ultimate-flying-car/embed?sid",
            "cid": 9
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 16,
            "title": "Bff Christmas Cookie Challenge",
            "descr": "Welcome to Bff Christmas Cookie Challenge. Princess Anna, Elsa, and Ariel are preparing for the Christmas celebration. They have planned to try new Christmas outfits and cute makeovers. Their fun does not end there, they planned to have a cookie challenge. Help each princess to create their own cookies. Have fun!",
            "cover": "https://img.gamepix.com/games/bff-christmas-cookie-challeng/icon/bff-christmas-cookie-challeng.png?w=500",
            "gurl": "https://play.gamepix.com/bff-christmas-cookie-challeng/embed?sid=",
            "cid": 1
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 17,
            "title": "4 Colors Multiplayer",
            "descr": "Four Colors is a HTML5 Card Games.\nFace up to 3 computer-controlled opponents.\nMatch cards by color or number, play action cards to mix the game up and be the first to get rid of all cards.\nLast but not least: Do not forget to press the 1 button when you have only one card left!\n\n3 Game’s Mode: \n- Multiplayer mode \n- Play against the pc \n- Challenge a friend playing on the same device",
            "cover": "https://img.gamepix.com/games/4-colors-multiplayer/icon/4-colors-multiplayer.png?w=500",
            "gurl": "https://play.gamepix.com/4-colors-multiplayer/embed?sid=",
            "cid": 1
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 18,
            "title": "Stickman Street Fighting 3D",
            "descr": "Single player street fighting game with stickmen.\n\nStickman!!! Fight through the street levels and defeat the enemy stick fighters! Collect weapons such as melee weapons , machine gun, pistol and saw. No one really knows why the fighting in the street began, but YOU will become the ultimate stickman fighter!\n\n\n- Gamepad , joystick controls support\n- Offline game , no internet required\n- Fight through over 100 stickman street locations\n\nMusic:IoChron_TrAnCeD_Mastery",
            "cover": "https://img.gamepix.com/games/stickman-street-fighting/icon/stickman-street-fighting.png?w=500",
            "gurl": "https://play.gamepix.com/stickman-street-fighting/embed?sid=",
            "cid": 4
        },
        {
            "createBy": null,
            "createTime": null,
            "updateBy": null,
            "updateTime": null,
            "remark": null,
            "id": 19,
            "title": "Lovely Virtual Cat",
            "descr": "Your new virtual pet is here. He is a cute, emotional, and adorable cat who loves to eat tasty food, take selfies, visit friends, and dance. Have fun at Bubbu's home and find out other secrets about your pet's life. He will surprise you for sure!",
            "cover": "https://img.gamepix.com/games/lovely-virtual-cat/icon/lovely-virtual-cat.png?w=500",
            "gurl": "https://play.gamepix.com/lovely-virtual-cat/embed?sid=",
            "cid": 10
        },
..........