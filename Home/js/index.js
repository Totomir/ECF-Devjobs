// Fonctionnalité pour passer en mode sombre ou clair

const switchTheme = document.querySelector("#lightSwitch");
const body = document.querySelector("body");
const searchBar = document.querySelector("#searchBar");
const searchTab = document.querySelector("#searchTab");
const searchByLocation = document.querySelector("#searchByLocation");
const vertical = document.querySelector(".vertical");
const searchButton = document.querySelector("#searchButton");
const popupOption = document.querySelector(".filter-option");

function switchThemeDark() {
  const jobCard = document.querySelectorAll(".job-card");
  const title = document.querySelectorAll(".announcement-title");
  body.classList.add("body-black");
  searchBar.classList.add("search-bar-black");
  searchTab.classList.add("search-tab-black");
  searchByLocation.classList.add("search-by-location-black");
  vertical.classList.add("vertical-black");
  popupOption.classList.add("filter-option-black");
  jobCard.forEach((el) => {
    el.classList.add("job-card-black");
  });
  title.forEach((title) => {
    title.classList.add("announcement-title-black");
  });
}

function switchThemeLight() {
  const jobCard = document.querySelectorAll(".job-card");
  const title = document.querySelectorAll(".announcement-title");
  body.classList.remove("body-black");
  searchBar.classList.remove("search-bar-black");
  searchTab.classList.remove("search-tab-black");
  searchByLocation.classList.remove("search-by-location-black");
  vertical.classList.remove("vertical-black");
  popupOption.classList.remove("filter-option-black");
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
    switchThemeDark();
  } else {
    localStorage.setItem("theme", "light");
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
