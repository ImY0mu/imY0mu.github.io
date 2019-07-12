var travelBtn, townBtn, arenaBtn, notificationsBtn, messagesBtn, guildsBtn, questsBtn, characterBtn, inventoryBtn, communityBtn, leaderboardsBtn, profileBtn, friendsBtn, storeBtn, preferencesBtn, aboutBtn, supportBtn;
var questsWikiBtn, helmetsWikiBtn, amuletsWikiBtn, armourWikiBtn, shieldsWikiBtn, weaponsWikiBtn, bootsWikiBtn, petsWikiBtn, booksWikiBtn, foodWikiBtn, collectiblesWikiBtn, homeWikiBtn, arenaWikiBtn;
var about = document.getElementById("aboutLink");
var game = document.getElementById("gameLink");
var game_frame;


document.addEventListener('DOMContentLoaded', function() {
    game_frame = document.getElementById("game_frame");
    game_frame.src = "//simple-mmo.com/";
    travelBtn = document.getElementById("travelBtn");
    townBtn = document.getElementById("townBtn");
    arenaBtn = document.getElementById("arenaBtn");
    bossesBtn = document.getElementById("bossesBtn");
    notificationsBtn = document.getElementById("notificationsBtn");
    messagesBtn = document.getElementById("messagesBtn");
    guildsBtn = document.getElementById("guildsBtn");
    questsBtn = document.getElementById("questsBtn");
    characterBtn = document.getElementById("characterBtn");
    inventoryBtn = document.getElementById("inventoryBtn");
    leaderboardsBtn = document.getElementById("leaderboardsBtn");
    communityBtn = document.getElementById("communityBtn");
    friendsBtn = document.getElementById("friendsBtn");
    profileBtn = document.getElementById("profileBtn");
    storeBtn = document.getElementById("storeBtn");
    preferencesBtn = document.getElementById("preferencesBtn");
    supportBtn = document.getElementById("supportBtn");
    aboutBtn = document.getElementById("aboutBtn");
    homeWikiBtn = document.getElementById("homeWikiBtn");
    questsWikiBtn = document.getElementById("questsWikiBtn");
    arenaWikiBtn = document.getElementById("arenaWikiBtn");
    regWikiBtn = document.getElementById("regWikiBtn");
    helmetsWikiBtn = document.getElementById("helmetsWikiBtn");
    amuletsWikiBtn = document.getElementById("amuletsWikiBtn");
    armourWikiBtn = document.getElementById("armourWikiBtn");
    shieldsWikiBtn = document.getElementById("shieldsWikiBtn");
    weaponsWikiBtn = document.getElementById("weaponsWikiBtn");
    bootsWikiBtn = document.getElementById("bootsWikiBtn");
    petsWikiBtn = document.getElementById("petsWikiBtn");
    booksWikiBtn = document.getElementById("booksWikiBtn");
    foodWikiBtn = document.getElementById("foodWikiBtn");
    collectiblesWikiBtn = document.getElementById("collectiblesWikiBtn");
    questsWikiBtn.addEventListener('click', function() {
        game_frame.src = 'https://simplemmo.fandom.com/wiki/List_of_Quests';
        
    });


    helmetsWikiBtn.addEventListener('click', function() {
        game_frame.src = 'https://simplemmo.fandom.com/wiki/List_of_Helmets';
        
    });

    amuletsWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Amulets';
        
    });

    armourWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Armour';
        
    });

    shieldsWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Shields';
        
    });

    weaponsWikiBtn.addEventListener('click', function() {
       game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Weapons';
       
    });

    bootsWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Boots';
        
    });

    petsWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Pets';
        
    });

    booksWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Books';
        
    });

    foodWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Food';
        
    });

    collectiblesWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Collectibles';
        
    });

    homeWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/Home';
        
    });

    arenaWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/Battle_arena';
        
    });



    travelBtn.addEventListener('click', function() {
      menu("travel");
    });

    townBtn.addEventListener('click', function() {
      menu("town");
    });

    arenaBtn.addEventListener('click', function() {
      menu("arena");
    });

    bossesBtn.addEventListener('click', function() {
      menu("bosses");
    });

    notificationsBtn.addEventListener('click', function() {
      menu("notifications");
    });

    messagesBtn.addEventListener('click', function() {
      menu("messages");
    });

    guildsBtn.addEventListener('click', function() {
      menu("guilds");
    });

    questsBtn.addEventListener('click', function() {
      menu("quests");
    });

    characterBtn.addEventListener('click', function() {
      menu("character");
    });

    inventoryBtn.addEventListener('click', function() {
      menu("inventory");
    });

    leaderboardsBtn.addEventListener('click', function() {
      menu("leaderboards");
    });

    communityBtn.addEventListener('click', function() {
      menu("community");
    });

    friendsBtn.addEventListener('click', function() {
      menu("friends");
    });

    profileBtn.addEventListener('click', function() {
      menu("profile");
    });

    storeBtn.addEventListener('click', function() {
      menu("store");
    });

    preferencesBtn.addEventListener('click', function() {
      menu("preferences");
    });

    aboutBtn.addEventListener('click', function() {
      menu("about");
    });

    supportBtn.addEventListener('click', function() {
      menu("support");
    });

    gameLink.addEventListener('click', function() {
      menu("game");
    });

  });




  function menu(btn){
    switch (btn) {
      case "travel":
        
        game_frame.src = "//simple-mmo.com/travel";
        break;

      case "town":
        
        game_frame.src = "//simple-mmo.com/town";
        break;

      case "arena":
        
        game_frame.src = "//simple-mmo.com/npcs/viewall";
        break;

      case "bosses":
        
        getBosses();
        game_frame.src = "//simple-mmo.com/worldbosses";
        break;

      case "notifications":
        
        game_frame.src = "//simple-mmo.com/events";
        break;

      case "messages":
        
        game_frame.src = "//simple-mmo.com/messages/inbox";
        break;

      case "guilds":
        
        game_frame.src = "//simple-mmo.com/guilds/menu";
        break;

      case "quests":
        
        game_frame.src = "//simple-mmo.com/quests/viewall";
        break;
      case "character":
        
        game_frame.src = "//simple-mmo.com/user/character";
        break;

      case "inventory":
        
        game_frame.src = "//simple-mmo.com/inventory";
        break;

      case "leaderboards":
        
        game_frame.src = "//simple-mmo.com/leaderboards";
        break;

      case "community":
        
        game_frame.src = "//simple-mmo.com/community";
        break;

      case "store":
        
        game_frame.src = "//simple-mmo.com/diamondstore/menu";
        break;

      case "friends":
        
        game_frame.src = "//simple-mmo.com/friends";
        break;

      case "profile":
        
        game_frame.src = "//simple-mmo.com/me";
        break;

      case "preferences":
        
        game_frame.src = "//simple-mmo.com/preferences";
        break;

      case "about":
      
        game_frame.src = "//simple-mmo.com/about";
        break;

      case "support":
      
        game_frame.src = "//simple-mmo.com/support";
        break;

      case "game":
        
        game_frame.src = "//simple-mmo.com/";
        break;

      default:
        
        game_frame.src = "//simple-mmo.com/";
        break;
    }
  }


