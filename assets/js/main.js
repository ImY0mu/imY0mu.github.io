function getUserPreference() {
    if(localStorage.getItem('theme') == null){
        if (matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark';
    }
    return localStorage.getItem('theme');   
}

function saveUserPreference(userPreference) {
    localStorage.setItem('theme', userPreference);
}


function getAppliedMode(userPreference) {
    if (userPreference === 'light') {
      return 'light';
    }
    if (userPreference === 'dark') {
      return 'dark';
    }
}


function changeTheme(element){
    if(element.checked) return document.querySelector('html').className = `w-screen h-screen dark`;
    document.querySelector('html').className = `w-screen h-screen`;
}

function setAppliedMode(mode) {
  document.querySelector('html').className = `w-screen h-screen ${mode}`;
  if(mode == "dark") document.getElementById('color-scheme').checked = true;
}

setAppliedMode(getUserPreference());