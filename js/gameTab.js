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
//var loader = document.getElementById("loader");
var wrapper = document.getElementById("wrapper");
var loading = document.getElementById("loading");
var sign = document.getElementById("sign");
var liveChat = document.getElementById("live-chat");
var questPointCount;
var myArr;
var check;
var urlC, xmlhttpC, myArrC;
var chat = document.getElementById('chat-history');
var chatArea = document.getElementById('chat-area');
var warning = document.getElementsByClassName('chat-feedback')[0];
var text = document.getElementById('chatText');
var updateBtn = document.getElementById('refresh');
var row = "<hr>";
var space = "<br />"
var container = document.createElement("div"); container.className  = "container";
var sendBtn = document.getElementById('send');
var state = true;
var autoUpdate;
var questsWikiBtn, helmetsWikiBtn, amuletsWikiBtn, armourWikiBtn, shieldsWikiBtn, weaponsWikiBtn, bootsWikiBtn, petsWikiBtn, booksWikiBtn, foodWikiBtn, collectiblesWikiBtn, homeWikiBtn, arenaWikiBtn;
var about = document.getElementById("aboutLink");
var game = document.getElementById("gameLink");
var agent, game_frame;
var startDateTime, startStamp, newDate, newStamp;
var infoBtn = document.getElementById('information');
var view = document.getElementById('view');
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
/* NOTIFY MESSAGES */
var notifyAlertCheck = true;

/* EVENT */
var eggsSpan = document.getElementById('eggs');
var gEggsSpan = document.getElementById('gEggs');


function notificationsTexts(name, level, type, id){
  texts = [];
  if(type == "danger"){
    texts.push('<div>The time has come. Prove us your strength against <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>].</div>');
    texts.push('<div>Oh no! <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] has come to slay you.</div>');
    texts.push('<div>I call upon you, hero! You have to save us from <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>].</div>');
    texts.push('<div>Watch out! <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] is stronger than you think.</div>');
    texts.push('<div>Run! You do not have 9 lives like cats do. <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>]</div>');
  }
  else if(type == "success"){
    texts.push('<div>Are you ready? <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] is ready to be attacked.</div>');
    texts.push('<div>Do you want to earn some experience? <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] will be soon out of Simpletonia.</div>');
    texts.push('<div>Easy peasy lemon squeezy, <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] is here to die.</div>');
    texts.push('<div>Get ready to spam that attack button! <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] is going to cost you a lot.</div>');
  }
  else{
    texts.push('<div>I am sorry, but <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] is not here for you.</div>');
    texts.push('<div>Do not come!<strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] is too weak for you.</div>');
    texts.push('<div>Slow down! <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] is here to slaughter the newcomers.</div>');
    texts.push('<div>Do not worry.. <strong id="boss">' + name + '</strong> [Level <strong>' + level + '</strong>] will die sooner or later.</div>');
  }
}

function notifications(name, level, id, type){
  notificationsList["span"+id] = document.createElement("div"); notificationsList["span"+id].id = "notify" + id; notificationsList["span"+id].className = 'alert alert-' + type +' alert-dismissible fade show'; notificationsList["span"+id].innerHTML = '<span class="close" id="closeBtn'+id+'">×</span>';
  notify.appendChild(notificationsList["span"+id]);

  notificationsTexts(name, level, type, id);

  notificationsList["span"+id].innerHTML += texts[Math.floor(Math.random() * texts.length)];
  document.getElementById("boss").addEventListener('click', function() {
      game_frame.src = "http://simple-mmo.com/user/view/" + id;
      notificationsClear(notificationsList["span"+id]);
      load();
  });
  notificationsList["close"+id] = document.getElementById("closeBtn"+id);

  notificationsList["close"+id].addEventListener('click', function() {
      notificationsClear(notificationsList["span"+id]);
  });
  audio.play();
}

function notificationsClear(id){
  //console.log(id);
  id.remove();
}

function getBosses(){
  modal.innerHTML= "";
  checker = true;
  var counter = [];
  try {
    $.get('http://simple-mmo.com/worldbosses', null, function(text){
      timeText = $(text).find('.panel-body').html().split("\n");
    });
  } catch (e) {
    console.log(e);
    setTimeout(function() {
      getBosses();
    }, 600);
  }
  setTimeout(function() {
    try {
        for(let i = 0; i < timeText.length; i++){
          if(timeText[i].includes('countDownDate')){
            counter.push(i);
          }
        }
        for(let i = 0; i < counter.length; i+=2){
          bossLink = timeText[counter[i]-7].split("'");
          bossUrl = bossLink[1];
          bossIDcheck = bossUrl.split("/");
          bossAttackID = bossIDcheck[3];
          //console.log(bossAttackID);
          bossNcheck = timeText[counter[i]-5].split("<");
          bossNtext = bossNcheck[2].split(">");
          bossName = bossNtext[1];
          //console.log(bossName);
          bossLcheck = timeText[counter[i]-4].split(">");
          bossLtext = bossLcheck[1].split("<");
          bossLvlcheck = bossLtext[0].split("l");
          bossLvl = parseInt(bossLvlcheck[1]);
          //console.log(bossLvl);
          bossAcheck = timeText[counter[i]-6].split('"');
          bossAvatar = bossAcheck[3];
          //console.log(bossAvatar);
          timerText = timeText[counter[i]].split("=");
          bossTime = timerText[1].replace(";", "");
          bossTime = bossTime.replace(" ", "");
          bossTime = bossTime.split("*");
          //console.log(time);
          createBoss(bossAttackID, bossName, bossLvl, bossTime, bossAvatar)
        }
        infoBtn.style.display = "inline-block";
      }
    catch(e){
      console.log(e);
      getBosses();
      closestBoss.innerText = "There are no bosses.";
      infoBtn.style.display = "none";
    }
  }, 800);
}



function createBoss(id, name, level, time, avatar){
  //console.log(bossId, bossName, bossLevel, bossTime);
  try {
    var cBoss = document.createElement("div"); cBoss.className  = "modal-boss"; cBoss.id="boss" + id;
    var cAvatar = document.createElement("div"); cAvatar.className  = "modal-avatar"; cAvatar.id =  "img" + id;
    var img = document.createElement("img"); img.className = "bossAvatar"; img.alt = "Boss avatar"; img.src = avatar; img.id = "avatar" + id;
    var cInfo= document.createElement("div"); cInfo.className  = "modal-information"; cInfo.id = "info" + id;
    var nameS = document.createElement("span"); nameS.className = "bossName"; nameS.innerHTML = "<strong>" + name + "</strong> "; nameS.id = "bossName" + id;
    var levelS = document.createElement("span"); levelS.className = "bossLevel"; levelS.innerHTML = "[Level <strong>" + level + "</strong>]"; levelS.id = "bossLevel"+ id;
    var cDesc = document.createElement("div"); cDesc.className  = "modal-description"; cDesc.id = "description" + id;
    var timer = document.createElement("span"); timer.id = "bossTimer" + id; timer.innerText = ""; timer.className = "bossTimer";
    var button = document.createElement("buttom"); button.id = "bossView" + id; button.innerText = "View"; button.className = "btn btn-primary view";
    modal.appendChild(cBoss);
    cBoss.appendChild(cAvatar);
    cAvatar.appendChild(img);
    cBoss.appendChild(cInfo);
    cInfo.appendChild(nameS);
    cInfo.appendChild(levelS);
    cBoss.appendChild(cDesc);
    cDesc.appendChild(timer);
    cBoss.appendChild(button);
    $("#bossView" + id).attr("data-dismiss","modal");
    button.addEventListener('click', function() {
      game_frame.src = "http://simple-mmo.com/user/view/" + id;
      load();
    });
    createTimer(time, id, level, name);
  }
  catch (e){
    console.log(e);
    createBoss(id, name, level, time, avatar);
  }
}

function createTimer(time, id, level, name){
  timers["timerSpan"+id] = document.getElementById('bossTimer' + id);
  timers["button"+id] = document.getElementById('bossView' + id);
  var control = checker;
  try {
    //console.log("Loading boss timer..");
    if(checker == true){
      //console.log("true");
      clearInterval(timers["timerAgain"+id]);
      timers["count"+id] = time[0] * time[1];
      timers["timeDown"+id] = setInterval(function() {
      timers["now"+id] = new Date().getTime();
      timers["distane"+id] = timers["count"+id] - timers["now"+id];
      timers["days"+id]= Math.floor(timers["distane"+id] / (1000 * 60 * 60 * 24));
      timers["hours"+id] = Math.floor((timers["distane"+id] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      timers["minutes"+id] = Math.floor((timers["distane"+id] % (1000 * 60 * 60)) / (1000 * 60));
      timers["seconds"+id] = Math.floor((timers["distane"+id] % (1000 * 60)) / 1000);
      if(timers["days"+id] > 0){
        timers["timerSpan"+id].innerHTML = "<span id='dangerNtf' class='text-danger timeSpan'>" + timers["days"+id] + "d " + timers["hours"+id] + "h " + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
        closestBoss.innerHTML = "<span id='dangerNtf' class='text-danger timeSpan'>" + timers["days"+id] + "d " + timers["hours"+id] + "h " + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
      }
      else if(timers["hours"+id]>0){
        timers["timerSpan"+id].innerHTML = "<span id='warningNtf' class='text-warning timeSpan'>" + timers["hours"+id] + "h " + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
        closestBoss.innerHTML = "<span id='warningNtf' class='text-warning timeSpan'>" + timers["hours"+id] + "h " + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
      }
      else if(timers["minutes"+id]>0){
        timers["timerSpan"+id].innerHTML = "<span id='primaryNtf' class='text-primary'>" + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
        closestBoss.innerHTML = "<span id='primaryNtf' class='text-primary timeSpan'>" + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
        }
      else if(timers["seconds"+id]>0){
        timers["timerSpan"+id].innerHTML = "<span id='successNtf' class='text-success timeSpan'>" + timers["seconds"+id] + "s </span>";
        closestBoss.innerHTML = "<span id='successNtf' class='text-success timeSpan'>" + timers["seconds"+id] + "s </span>";
      }
      if (timers["distane"+id] < 0) {
        clearInterval(timers["timeDown"+id]);
        timers["timerSpan"+id].innerHTML = "The boss can be attacked now.";
        timers["timerAgain"+id] = setInterval(function() {
          getBosses();
          console.log("Getting bosses!");
        }, 600000);
        closestBoss.innerHTML = "The battle is still ongoing..";
        if (level <= 100 && myArr.level > 100) {
          if(notifyAlertCheck == true){
            notifications(name, level, id, "warning");
            notifyAlertCheck = false;
          }
          timers["button"+id].innerText = "Cannot attack";
          timers["button"+id].className = "btn btn-warning view";
          timers["button"+id].addEventListener('click', function() {
              game_frame.src = 'http://simple-mmo.com/user/view/' + id;
              load();
          });
        }
        else if(myArr.level >= level){
          if(notifyAlertCheck == true){
            notifications(name, level, id, "success");
            notifyAlertCheck = false;
          }
          timers["button"+id].innerText = "Attack";
          timers["button"+id].className = "btn btn-success view";
          timers["button"+id].addEventListener('click', function() {
              game_frame.src = 'http://simple-mmo.com/user/attack/' + id;
              load();
          });
        }
        else{
          if(notifyAlertCheck == true){
            notifications(name, level, id, "danger");
            notifyAlertCheck = false;
          }
          timers["button"+id].innerText = "Attack";
          timers["button"+id].className = "btn btn-danger view";
          timers["button"+id].addEventListener('click', function() {
              game_frame.src = 'http://simple-mmo.com/user/attack/' + id;
              load();
          });
        }
      }
    }, 1000);
    checker = false;
    }
    else{
      timers["count"+id] = time[0] * time[1];
      timers["timeDown"+id] = setInterval(function() {
      timers["now"+id] = new Date().getTime();
      timers["distane"+id] = timers["count"+id] - timers["now"+id];
      timers["days"+id]= Math.floor(timers["distane"+id] / (1000 * 60 * 60 * 24));
      timers["hours"+id] = Math.floor((timers["distane"+id] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      timers["minutes"+id] = Math.floor((timers["distane"+id] % (1000 * 60 * 60)) / (1000 * 60));
      timers["seconds"+id] = Math.floor((timers["distane"+id] % (1000 * 60)) / 1000);
      if(timers["days"+id] > 0){
        timers["timerSpan"+id].innerHTML = "<span id='dangerNtf' class='text-danger timeSpan'>" + timers["days"+id] + "d " + timers["hours"+id] + "h " + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
      }
      else if(timers["hours"+id]>0){
        timers["timerSpan"+id].innerHTML = "<span id='warningNtf' class='text-warning timeSpan'>" + timers["hours"+id] + "h " + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
      }
      else if(timers["minutes"+id]>0){
        timers["timerSpan"+id].innerHTML = "<span id='primaryNtf' class='text-primary timeSpan'>" + timers["minutes"+id] + "m " + timers["seconds"+id] + "s </span>";
        }
      else if(timers["seconds"+id]>0){
        timers["timerSpan"+id].innerHTML = "<span id='successNtf' class='text-success timeSpan'>" + timers["seconds"+id] + "s </span>";
      }
      if (timers["distane"+id] < 0) {
        clearInterval(timers["timeDown"+id]);
        timers["timerSpan"+id].innerHTML = "The boss can be attacked now.";
        if (level < 100 && myArr.level > 100) {
          notifications(name, level, id, "warning")
          timers["button"+id].innerText = "Cannot attack";
          timers["button"+id].className = "btn btn-warning view";
          timers["button"+id].addEventListener('click', function() {
              game_frame.src = 'http://simple-mmo.com/user/view/' + id;
              load();
          });
        }
        else if(myArr.level > level){
          notifications(name, level, id, "success")
          timers["button"+id].innerText = "Attack";
          timers["button"+id].className = "btn btn-success view";
          timers["button"+id].addEventListener('click', function() {
              game_frame.src = 'http://simple-mmo.com/user/attack/' + id;
              load();
          });
        }
        else{
          notifications(name, level, id, "danger")
          timers["button"+id].innerText = "Attack";
          timers["button"+id].className = "btn btn-danger view";
          timers["button"+id].addEventListener('click', function() {
              game_frame.src = 'http://simple-mmo.com/user/attack/' + id;
              load();
          });
        }
      }
    }, 1000);
  }
}
  catch(e){
    console.log("Failed to load boss timer..\n" + e);
    createTimer(time, id, level, name);
  }
}


function updateChat(){
    //console.log("Loading..")
    //loader.style.display = "block";
    xmlhttpC = new XMLHttpRequest();
    urlC = "http://simple-mmo.com/chatapi";
    xmlhttpC.open("GET", urlC, true);
    xmlhttpC.send();
    xmlhttpC.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myArrC = JSON.parse(this.responseText);
        }
    };
    xmlhttpC.onload = function(){
      myArrC = JSON.parse(this.responseText);
      startDateTime = new Date();
      startStamp = startDateTime.getTime();
      setInterval(updateClock, 1000);
    }
}


function send(){
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://simple-mmo.com/chat/submit", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
          chattext: text.value
        }));
        text.value = "";
        warning.style.display = "none";

      } catch (e) {
        console.log("Something is wrong with sending.");
      }
}


function refresh(){
  $('.chat-history').scrollTop(0);
  try {
    //loader.style.display = "none";
    //console.log("Updating chat..");
    chat.innerHTML = "";
    Object.keys(myArrC).forEach(function (item) {
    if(myArrC[item].online == ""){
      myArrC[item].online = '<span class="dot-offline"></span>';
    }
    if(myArrC[item].username.includes(myArr.username)){
      myArrC[item].username = '<span id="you">' + myArrC[item].username + '</span>';
    }
    var container = document.createElement("div"); container.className  = "chat-message clearfixr";
    var img = document.createElement("img"); img.alt = "Avatar"; img.src= 'http://simple-mmo.com/img/sprites/' + myArrC[item].avatar + '.png';
    var time = document.createElement("span"); time.className = "chat-time"; time.id = "time"; time.innerText = myArrC[item].created_at2;
    var by = document.createElement("h5"); by.id = "by"; by.innerHTML = '<a href="#" class=' + myArrC[item].userid + '>' + myArrC[item].username +'</a>';
    var message = document.createElement("p"); message.id = "message"; message.innerHTML = myArrC[item].text;
    var online = document.createElement("span"); online.id = "online"; online.innerHTML = myArrC[item].online;
    chat.appendChild(container);
    container.appendChild(img);
    container.appendChild(time);
    container.appendChild(online);
    container.appendChild(by);
    container.innerHTML += space;
    container.appendChild(message);
    container.innerHTML += row;
    var anchors = document.getElementsByClassName(myArrC[item].userid);
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function() {
          redirect(myArrC[item].userid);
        });
    }

    });
  }
  catch{
    //console.log("Not loaded yet.")
    setTimeout(function() {
      refresh();
    }, 600);
  }
}

function redirect(id){
  load();
  game_frame.src = "http://simple-mmo.com/user/view/" + id;
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
    $.get('http://simple-mmo.com/quests/viewall', null, function(text){
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


function eggsLoad(){
  var urLink = "http://simple-mmo.com/inventory?minlevel=&maxlevel=&itemname=Easter+Egg";
  var eggCount;
  var counter;
  $.get(urLink, null, function(text){
    eggs = $(text).find('td').text().split("\n");
  });
    //console.log("Checking Easter Eggs..");
    try {
      setTimeout(function() {
      try {
        for(let i = 0; i < eggs.length; i++){
          if(eggs[i].includes('Egg')){
  	        //console.log(eggs[i]);
  		      //console.log(i);
            counter = i;
            break;
          }
        }
        eggCount = eggs[counter-1].replace("x", "");
        eggCount = parseInt(eggCount);
        if(isNaN(eggCount)){
          eggCount = "Please equip all items."
        }
        eggsSpan.innerText = eggCount;
        //console.log(eggCount);
      }
      catch{
        //console.log("There are not any Easter Eggs..");
        eggsSpan.innerText = 0;
      }
    }, 1000);
    }
    catch{
      console.log("Easter egg failed to load..");
      setTimeout(function() {
        eggsLoad();
      }, 600);
    }

}

function gEggsLoad(){
  var urLinkG = "http://simple-mmo.com/inventory?minlevel=&maxlevel=&itemname=Golden+Egg";
  var gEggCount;
  var counter;
  $.get(urLinkG, null, function(text){
    gEggs = $(text).find('td').text().split("\n");
  });
    //console.log("Checking Golden Eggs..");
    try {
      setTimeout(function() {
      try {
        for(let i = 0; i < eggs.length; i++){
          if(gEggs[i].includes('Egg')){
  	        //console.log(gEggs[i]);
  		      //console.log(i);
            counter = i;
            break;
          }
        }
        gEggCount = gEggs[counter-1].replace("x", "");
        gEggCount = parseInt(gEggCount);
        if(isNaN(gEggCount)){
          gEggCount = "Please equip all items."
        }
        gEggsSpan.innerText = gEggCount;
        //console.log(gEggCount);
      }
      catch{
        //console.log("There are not any Golden Eggs..");
        gEggsSpan.innerText = 0;
      }
    }, 1000);
      } catch{
        console.log("Golden egg failed to load..");
        setTimeout(function() {
          gEggsLoad();
        }, 600);
      }

}

function updateCharacter(){
    $('#character').load('http://simple-mmo.com/character .mdl-list__item');
    $('#bank').load('http://simple-mmo.com/bank .mdl-card__supporting-text strong');
}

(function() {

	$('.clearfix').on('click', function(e) {
    if($(e.target).is("button")) return;
		$('.chat').slideToggle(300, 'swing');
    if (state == false) {
      $('.chat-history').scrollTop(0);
      //console.log("On");
      document.getElementById("latest").style.display = "inline-block";
      updateChat();
      setTimeout(function() {
        refresh();
      }, 600);
      autoUpdate = setInterval(function() {
        updateChat();
        setTimeout(function() {
          refresh();
        }, 600);
      }, 30000);
      state = true;
      return;
    }
    else if (state == true) {
      //console.log("Off");
      clearInterval(autoUpdate);
      document.getElementById("latest").style.display = "none";
      state = false;
      return;
    }
	});
}) ();

function loadPlayer(){
    //console.log("Loading..")
    xmlhttp = new XMLHttpRequest();
    url = "http://simple-mmo.com/mobapi";
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
    agent = navigator.userAgent + " | CHROME EXTENSION";
    game_frame.src = "http://simple-mmo.com/";
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

    chatArea.addEventListener('submit', function() {
      if(text != ""){
          event.preventDefault();   //stop form from submitting
          send();
          setTimeout(function() {
            updateChat();
            setTimeout(function() {
              refresh();
            }, 300);
          }, 300);
          warning.style.display = "none";
      }
      else{
        warning.style.display = "block";
      }},
      false);



    sendBtn.addEventListener('click', function() {
      send();
      setTimeout(function() {
        updateChat();
        setTimeout(function() {
          refresh();
        }, 300);
      }, 600);
    });

    updateBtn.addEventListener('click', function() {
      updateChat();
      setTimeout(function() {
        refresh();
      }, 600);
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
        game_frame.src = "http://simple-mmo.com/travel";
        break;

      case "town":
        load();
        game_frame.src = "http://simple-mmo.com/town";
        break;

      case "arena":
        load();
        game_frame.src = "http://simple-mmo.com/npcs/viewall";
        break;

      case "bosses":
        load();
        getBosses();
        game_frame.src = "http://simple-mmo.com/worldbosses";
        break;

      case "notifications":
        load();
        game_frame.src = "http://simple-mmo.com/events";
        break;

      case "messages":
        load();
        game_frame.src = "http://simple-mmo.com/messages/inbox";
        break;

      case "guilds":
        load();
        game_frame.src = "http://simple-mmo.com/guilds/menu";
        break;

      case "quests":
        load();
        game_frame.src = "http://simple-mmo.com/quests/viewall";
        break;
      case "character":
        load();
        game_frame.src = "http://simple-mmo.com/user/character";
        break;

      case "inventory":
        load();
        game_frame.src = "http://simple-mmo.com/inventory";
        break;

      case "leaderboards":
        load();
        game_frame.src = "http://simple-mmo.com/leaderboards";
        break;

      case "community":
        load();
        game_frame.src = "http://simple-mmo.com/community";
        break;

      case "store":
        load();
        game_frame.src = "http://simple-mmo.com/diamondstore";
        break;

      case "friends":
        load();
        game_frame.src = "http://simple-mmo.com/friends";
        break;

      case "profile":
        load();
        game_frame.src = "http://simple-mmo.com/me";
        break;

      case "preferences":
        load();
        game_frame.src = "http://simple-mmo.com/preferences";
        break;

      case "about":
      load();
        game_frame.src = "http://simple-mmo.com/about";
        break;

      case "support":
      load();
        game_frame.src = "http://simple-mmo.com/support";
        break;

      case "aboutEx":
        load();
        game_frame.src = chrome.extension.getURL('about.html');
        break;

      case "game":
        load();
        game_frame.src = "http://simple-mmo.com/";
        break;

      default:
        load();
        game_frame.src = "http://simple-mmo.com/";
        break;
    }
  }

  function login(){
    try {
      check = myArr.loggedin;
    } catch
    {
      setTimeout(function() {
        login();
        loaded();
      }, 600);
    }

  }

  function update(){
    try{
      stepsSpan.innerText = myArr.stepsleft;
      avatarSpan.src = 'http://simple-mmo.com/img/sprites/' + myArr.avatar + '.png';
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


  chrome.webRequest.onBeforeSendHeaders.addListener(
      function(info) {
          // Replace the User-Agent header
          var headers = info.requestHeaders;
          headers.forEach(function(header, i) {
              if (header.name.toLowerCase() == 'user-agent') {
                  header.value = agent;
              }
          });
          return {requestHeaders: headers};
      },
      // Request filter
      {
          // Modify the headers for these pages
          urls: [
              "http://simple-mmo.com/*"
          ],
          // In the main window and frames
          types: ["main_frame", "sub_frame", "xmlhttprequest"]
      },
      ["blocking", "requestHeaders"]
  );


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


function loadChat(){
  refresh();
  updateChat();
}
function load(){
  questPointsLoad();
  loadPlayer();
  updateCharacter();
  setTimeout(function() {
    //console.log("Loading eggs..");
    eggsLoad();
    gEggsLoad();
  }, 500);
}

function loaded(){
  if(check == "true"){
    loadChat();
    wrapper.style.display = "block";
    liveChat.style.display = "block";
    loading.style.display = "none";
    sign.style.display = "none";
    startTime();
    update();
    window.setInterval(function(){
      update();
    }, 500);
  }
  else{
    sign.style.display = "block";
    loading.style.display = "none";
    wrapper.style.display = "none";
    liveChat.style.display = "none";
  }

}

window.onload = function() {
  load();
  //console.log("On");
  getBosses();
  setTimeout(function() {
    login();
    loaded();
  }, 1500);
  $('#live-chat header').click();
}
