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
    aboutBtn = document.getElementById("aboutBtn");
    supportBtn = document.getElementById("supportBtn");
    supportBtn = document.getElementById("supportBtn");
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
        load();
    });


    helmetsWikiBtn.addEventListener('click', function() {
        game_frame.src = 'https://simplemmo.fandom.com/wiki/List_of_Helmets';
        load();
    });

    amuletsWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Amulets';
        load();
    });

    armourWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Armour';
        load();
    });

    shieldsWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Shields';
        load();
    });

    weaponsWikiBtn.addEventListener('click', function() {
       game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Weapons';
       load();
    });

    bootsWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Boots';
        load();
    });

    petsWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Pets';
        load();
    });

    booksWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Books';
        load();
    });

    foodWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Food';
        load();
    });

    collectiblesWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/List_of_Collectibles';
        load();
    });

    homeWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/Home';
        load();
    });

    arenaWikiBtn.addEventListener('click', function() {
        game_frame.src =  'https://simplemmo.fandom.com/wiki/Battle_arena';
        load();
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

    nameSpan.addEventListener('click', function() {
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

    aboutLink.addEventListener('click', function() {
      menu("aboutEx");
    });

  });




  function menu(btn){
    switch (btn) {
      case "travel":
        load();
        game_frame.src = "//simple-mmo.com/travel";
        break;

      case "town":
        load();
        game_frame.src = "//simple-mmo.com/town";
        break;

      case "arena":
        load();
        game_frame.src = "//simple-mmo.com/npcs/viewall";
        break;

      case "bosses":
        load();
        getBosses();
        game_frame.src = "//simple-mmo.com/worldbosses";
        break;

      case "notifications":
        load();
        game_frame.src = "//simple-mmo.com/events";
        break;

      case "messages":
        load();
        game_frame.src = "//simple-mmo.com/messages/inbox";
        break;

      case "guilds":
        load();
        game_frame.src = "//simple-mmo.com/guilds/menu";
        break;

      case "quests":
        load();
        game_frame.src = "//simple-mmo.com/quests/viewall";
        break;
      case "character":
        load();
        game_frame.src = "//simple-mmo.com/user/character";
        break;

      case "inventory":
        load();
        game_frame.src = "//simple-mmo.com/inventory";
        break;

      case "leaderboards":
        load();
        game_frame.src = "//simple-mmo.com/leaderboards";
        break;

      case "community":
        load();
        game_frame.src = "//simple-mmo.com/community";
        break;

      case "store":
        load();
        game_frame.src = "//simple-mmo.com/diamondstore";
        break;

      case "friends":
        load();
        game_frame.src = "//simple-mmo.com/friends";
        break;

      case "profile":
        load();
        game_frame.src = "//simple-mmo.com/me";
        break;

      case "preferences":
        load();
        game_frame.src = "//simple-mmo.com/preferences";
        break;

      case "about":
      load();
        game_frame.src = "//simple-mmo.com/about";
        break;

      case "support":
      load();
        game_frame.src = "//simple-mmo.com/support";
        break;

      case "aboutEx":
        load();
        game_frame.src = chrome.extension.getURL('about.html');
        break;

      case "game":
        load();
        game_frame.src = "//simple-mmo.com/";
        break;

      default:
        load();
        game_frame.src = "//simple-mmo.com/";
        break;
    }
  }


