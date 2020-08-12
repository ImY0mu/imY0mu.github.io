var options = document.querySelectorAll('.menuItem');

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function(e) {
        e.preventDefault();
        let target = options[i].getAttribute('href');
        document.querySelector('div.active').classList.remove('active');
        document.querySelector('a.active').classList.remove('active');
        options[i].classList.add('active');
        document.querySelector(target).classList.add('active');  
    });
}





window.onload = (event) => {
    




};


