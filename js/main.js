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
    options[i].addEventListener("click", function() {
        let target = options[i].getAttribute('target');
        modal.classList.remove("active");
        sidenav.classList.remove("active");
        sidenavLeave.classList.remove("active");
        document.querySelector('#' + target).scrollIntoView();
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
