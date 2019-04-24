var travelBtn, townBtn, arenaBtn, notificationsBtn, messagesBtn, guildsBtn, questsBtn, characterBtn, inventoryBtn, communityBtn, leaderboardsBtn, profileBtn, friendsBtn, storeBtn, preferencesBtn, aboutBtn, supportBtn;
var hpSpan = document.getElementById("hp");
var expSpan = document.getElementById("experience");
var energySpan = document.getElementById("energy");
var goldSpan = document.getElementById("gold");
var nameSpan = document.getElementById("name");
var diamondsSpan = document.getElementById("diamonds");
var levelSpan = document.getElementById("level");
var avatarSpan = document.getElementById("avatar");
var stepsSpan = document.getElementById("steps");
var expBar = document.getElementById("expBar");
var energyBar = document.getElementById("energyBar");
var hpBar = document.getElementById("hpBar");
var messages = document.getElementById("messages");
var messagesM = document.getElementById("messagesM");
var head = document.getElementsByTagName('head')[0]
var questSpan = document.getElementById("questPoints");
var questPointCount;
var myArr;
var check;
var urlC, xmlhttpC, myArrC;
var row = "<hr>";
var space = "<br />"
var state = true;
var autoUpdate;
var questsWikiBtn, helmetsWikiBtn, amuletsWikiBtn, armourWikiBtn, shieldsWikiBtn, weaponsWikiBtn, bootsWikiBtn, petsWikiBtn, booksWikiBtn, foodWikiBtn, collectiblesWikiBtn, homeWikiBtn, arenaWikiBtn;
var about = document.getElementById("aboutLink");
var game = document.getElementById("gameLink");
var agent, game_frame;
var startDateTime, startStamp, newDate, newStamp;
var bossAttackID;
var checker;
var counter = [];
var timers = {};
var notificationsList = {};
var modal = document.getElementsByClassName("modal-body")[0];
var closestBoss = document.getElementById('timer');
/* NOTIFY */
var notify = document.getElementById('notifycationsBar');
var audio = new Audio('../notify/unsure.mp3');
var texts;

function redirect(id){
  load();
  game_frame.src = "//simple-mmo.com/user/view/" + id;
}


function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);

    var d = Math.floor(diff/(24*60*60));
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;

    document.getElementById("latest").innerHTML = "Updated ";

    if(d>0){
    	document.getElementById("latest").innerHTML += d + " days ago";
    }
    else if(h>0){
    	document.getElementById("latest").innerHTML += h + " hours ago";
    }
    else if(m>0){
    	document.getElementById("latest").innerHTML += m + " minutes ago";
    }
    else{
    	document.getElementById("latest").innerHTML += s + " seconds ago";
    }
}


function questPointsLoad(){
  try{
    $.get('//simple-mmo.com/quests/viewall', null, function(text){
      questPointCount = $(text).find('#questPoints').text();
    });
    setTimeout(function() {
      questSpan.innerText = questPointCount;
    }, 600);
  }
    catch(e){
      console.log(e);
      setTimeout(function() {
        questPointsLoad();
      }, 600);
    }
}

function loadPlayer(){
    //console.log("Loading..")
    xmlhttp = new XMLHttpRequest();
    url = "//simple-mmo.com/mobapi";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myArr = JSON.parse(this.responseText);
        }
    };
    xmlhttp.onload = function(){
      myArr = JSON.parse(this.responseText);
    }
}




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

  function update(){
    try{
      stepsSpan.innerText = myArr.stepsleft;
      avatarSpan.src = '//simple-mmo.com/img/sprites/' + myArr.avatar + '.png';
      nameSpan.innerText =  myArr.username;
      levelSpan.innerText =  myArr.level;
      energySpan.innerText = myArr.energy + " / " + myArr.max_energy;
      hpSpan.innerText = myArr.current_hp + " / " + myArr.max_hp;
      expSpan.innerText = myArr.exp + " / " + myArr.max_exp;
      goldSpan.innerText = myArr.gold;
      diamondsSpan.innerText = myArr.diamonds;
      expBar.value = myArr.exp_percent;
      hpBar.value = myArr.hp_percent;
      energyBar.value = myArr.energy_percent;
      messagesM.innerText = myArr.messages;
    }
    catch{
      setTimeout(function() {
        update();
      }, 600);
    }
  }

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function startTime() {
  var today = new Date();
  var timer = document.getElementById('time');

  timer.innerHTML = today.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' });
  t = setTimeout(function() {
    startTime()
  }, 500);
}



function load(){
  questPointsLoad();
  loadPlayer();
  window.setInterval(function(){
      update();
    }, 500);
}

window.onload = function() {
  load();
}
