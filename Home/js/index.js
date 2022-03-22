// Fonctionnalité pour passer en mode sombre ou clair

const switchTheme = document.querySelector("#lightSwitch");
const body = document.querySelector("body");
const searchBar = document.querySelector("#searchBar");
const searchTab = document.querySelector("#searchTab");
const searchByLocation = document.querySelector("#searchByLocation");
const vertical = document.querySelector(".vertical");
const searchButton = document.querySelector("#searchButton");
const jobCard = document.querySelectorAll(".job-card");
const title = document.querySelectorAll(".announcement-title");
const popupOption = document.querySelector("#popupOption");

function switchThemeDark() {
  body.classList.add("body-black");
  searchBar.classList.add("search-bar-black");
  searchTab.classList.add("search-tab-black");
  searchByLocation.classList.add("search-by-location-black");
  vertical.classList.add("vertical-black");
  jobCard.forEach((card) => {
    card.classList.add("job-card-black");
  });
  title.forEach((title) => {
    title.classList.add("announcement-title-black");
  });
}

function switchThemeLight() {
  body.classList.remove("body-black");
  searchBar.classList.remove("search-bar-black");
  searchTab.classList.remove("search-tab-black");
  searchByLocation.classList.remove("search-by-location-black");
  vertical.classList.remove("vertical-black");
  jobCard.forEach((card) => {
    card.classList.remove("job-card-black");
  });
  title.forEach((title) => {
    title.classList.remove("announcement-title-black");
  });
}

if (localStorage.getItem("theme") !== null) {
  if (localStorage.getItem("theme") === "dark") {
    switchThemeDark();
    switchTheme.checked = true;
  } else {
    switchThemeLight();
  }
} else {
  localStorage.setItem("theme", "light");
}

switchTheme.addEventListener("change", function () {
  if (switchTheme.checked) {
    localStorage.setItem("theme", "dark");
    console.log("Checkbox is checked..");
    switchThemeDark();
  } else {
    localStorage.setItem("theme", "light");
    console.log("Checkbox is not checked..");
    switchThemeLight();
  }
});

// Changement des placeholders en fonction du responsive
window.addEventListener("resize", function () {
  if (window.screen.width < 1024) {
    searchTab.placeholder = "Filter by title...";
  } else if (window.screen.width >= 1024 && window.screen.width < 1440) {
    searchTab.placeholder = "Filter by title, companies...";
  } else {
    searchTab.placeholder = "Filter by title, companies, expertise...";
    popupOption.textContent = "Full Time Only";
  }
});

// TODO : Tester le retour API, finir de construire le DOM
