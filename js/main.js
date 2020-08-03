window.onload = (event) => {
    changeTheme();
};

window.onresize = function(event) {
    modal.classList.remove("active");
    sidenav.classList.remove("active");
};

var body = document.getElementsByTagName('body')[0];
var modal = document.querySelector('.sidenavModal');
var sidenav = document.querySelector('.sidenav');
var sidenavLeave = document.querySelector('.sidenavModalLeave');

document.getElementById('themeSwitch').addEventListener('change', (e) => {
    if (event.target.checked) {
        sidenav.style.transition = "0s";
        body.classList.add("dark");
        body.classList.remove("light");
        setTimeout(function(){
            sidenav.style.transition = "0.5s";
        }, 100);
    } else {
        sidenav.style.transition = "0s";
        body.classList.add("light");
        body.classList.remove("dark");
        setTimeout(function(){
            sidenav.style.transition = "0.5s";
        }, 100);
    }
})


document.getElementById('sidenavBtn').addEventListener('click', (e) => {
    modal.classList.add("active");
    sidenav.classList.add("active");
    sidenavLeave.classList.add("active");
})

sidenavLeave.addEventListener('click', (e) => {
    modal.classList.remove("active");
    sidenav.classList.remove("active");
    sidenavLeave.classList.remove("active");
})


var options = document.querySelectorAll('.sidenavBlock');

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function(e) {
        let target = options[i].getAttribute('href');
        modal.classList.remove("active");
        sidenav.classList.remove("active");
        sidenavLeave.classList.remove("active");
        document.querySelector(target).scrollIntoView();
        for (let j = 0; j < options.length; j++) {
            options[j].classList.remove('active');
        }
        document.querySelector(target + 'Btn').classList.add('active');
    });
}

function changeTheme(){
    let hours = new Date().getHours()
    let isDayTime = hours > 6 && hours < 20;
    if(isDayTime == true){
        body.classList.add("light");
        body.classList.remove("dark");
    }
    else if(isDayTime == true){
        body.classList.add("dark");
        body.classList.remove("light");
    }
}

function CopyToClipboard(containerid) {
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }

    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
}

(function() {
    'use strict';
  
    var section = document.querySelectorAll(".main");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    document.querySelector('.content').onscroll = function() {
      var scrollPosition = document.querySelector('.content').scrollTop;
      console.log("scrolled" + scrollPosition)
      for (i in sections) {
        if ((sections[i] - 150) <= scrollPosition) {
          document.querySelector('a.active').classList.remove('active');
          document.querySelector('a[href*=' + i + ']').classList.add('active');
        }
      }
    };
  })();
  
