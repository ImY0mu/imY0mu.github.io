var pageText = [];

pageText["CZ"] = {
  page_title: "Y0mu | Tvorba webů",
  strings: [
    "Front-endový vývojář",
    "Programuji s vášní a láskou.",
    "Dobrý den, říkám si Y0mu. Rád tě poznávám.",
    "Od mého dětství se hluboce zajímám o web design a vývoj webových aplikací.",
    "Front-end",
    "Zkušenosti",
    "Rád programuji věci od nuly. Usiluji o jednoduchý, ale elegantní design.",
    "Stránky",
    "Zvládám",
    "Aplikace pro Windows"
  ],
  buttons: [
    "Patreon",
    "Napiš mi",
    "Mé práce",
    "Téma"
  ],
  websites: [
    "Kamenictví Petřek"
  ]
}

pageText["EN"] = {
  page_title: "Y0mu | Coding cave",
  strings: [
    "Front-end Developer",
    "I code with passion and love.",
    "Hello, I'm Y0mu. Pleased to meet you.",
    "Since young age I have been deeply interested in web design and web development.",
    "Front-end Developer",
    "Websites",
    "I like to code things from scratch. Simple yet elegant design is what I strive for.",
    "Experience",
    "I can speak",
    "Windows Apps"
  ],
  buttons: [
    "Become a Patreon",
    "Contact me",
    "See my work",
    "Theme"
  ],
  websites: [
    "Stonemasonry Petřek"
  ]
}



function changeLanguage(language){
  for (let i = 0; i < pageText[language].strings.length; i++) {
    const element = pageText[language].strings[i];
    document.getElementById(`string_${i}`).innerText = element;
  }

  for (let j = 0; j < pageText[language].buttons.length; j++) {
    const element = pageText[language].buttons[j];
    document.getElementById(`button_${j}`).innerText = element;
  }

  for (let k = 0; k < pageText[language].websites.length; k++) {
    const element = pageText[language].websites[k];
    document.getElementById(`website_${k}`).innerText = element;
  }

  document.title = pageText[language].page_title;
  if(language == "CZ"){
    document.body.classList.remove("EN");
    document.body.classList.add(language);
  }
  if(language == "EN"){
    document.body.classList.remove("CZ");
    document.body.classList.add(language);
  }

  localStorage.setItem('preferedLanguage', language);
}


function getThemeUserPreference() {
    if(localStorage.getItem('theme') == null){
        if (matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark';
    }
    return localStorage.getItem('theme');   
}

function getLanguageUserPreference() {
  if(localStorage.getItem('preferedLanguage') == null){
      return "cz";
  }
  return localStorage.getItem('preferedLanguage');  
}

function changeTheme(element){
    if(element.checked){
      localStorage.setItem('theme', "dark");
      return document.querySelector('html').className = `w-screen h-screen dark`;
    } 
    document.querySelector('html').className = `w-screen h-screen`;
    localStorage.setItem('theme', "light");
}

function setAppliedMode(mode) {
  document.querySelector('html').className = `w-screen h-screen ${mode}`;
  if(mode == "dark") document.getElementById('color-scheme').checked = true;
}



window.addEventListener('load', (event) => {
  setAppliedMode(getThemeUserPreference());
  
  setTimeout(() => {
    changeLanguage(getLanguageUserPreference());
  }, 100);
});