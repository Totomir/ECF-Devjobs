// Fonctionnalité pour passer en mode sombre ou clair

const switchTheme = document.querySelector("#lightSwitch");
const body = document.querySelector("body");

// SEARCHBAR
const searchBar = document.querySelector("#searchBar");
const searchTab = document.querySelector("#searchTab");
const searchByLocation = document.querySelector("#searchByLocation");
const vertical = document.querySelectorAll(".vertical");
const searchButton = document.querySelector("#searchButton");
const modalButton = document.querySelector("#filterOption");
const timeCheckbox = document.querySelector("#timeCheckbox");
const timeContent = document.querySelector("#timeContent");

// MODAL
const modal = document.querySelector("#modal");
const modalBlock = document.querySelector("#modalBlock");
const modalTab = document.querySelector("#modalTab");
const modalCheckbox = document.querySelector("#modalCheckbox");
const modalTime = document.querySelector("#modalTime");

function switchThemeDark() {
  const jobCard = document.querySelectorAll(".job-card");
  const title = document.querySelectorAll(".announcement-title");
  body.classList.add("body-black");
  searchBar.classList.add("search-bar-black");
  searchTab.classList.add("search-tab-black");
  vertical.forEach((ligne) => {
    ligne.classList.add("vertical-black");
  });
  searchByLocation.classList.add("search-by-location-black");
  modalButton.classList.add("filter-option-black");
  timeCheckbox.classList.add("time-checkbox-black");
  timeContent.classList.add("time-content-black");
  modalBlock.classList.add("modal-block-black");
  modalTab.classList.add("modal-tab-black");
  modalCheckbox.classList.add("modal-checkbox-black");
  modalTime.classList.add("modal-option-black");
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
  vertical.forEach((ligne) => {
    ligne.classList.add("vertical-black");
  });
  searchByLocation.classList.remove("search-by-location-black");
  modalButton.classList.remove("filter-option-black");
  timeCheckbox.classList.remove("time-checkbox-black");
  timeContent.classList.remove("time-content-black");
  modalBlock.classList.remove("modal-block-black");
  modalTab.classList.remove("modal-tab-black");
  modalCheckbox.classList.remove("modal-checkbox-black");
  modalTime.classList.remove("modal-option-black");
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
  if (window.matchMedia("(max-width: 1023px)").matches) {
    searchTab.placeholder = "Filter by title...";
  } else if (
    window.matchMedia("(min-width: 1024px)").matches &&
    window.matchMedia("(max-width: 1439px)").matches
  ) {
    searchTab.placeholder = "Filter by title, companies...";
    fullTimeOption.textContent = "Full Time";
  } else if (window.matchMedia("(min-width: 1440px)").matches) {
    searchTab.placeholder = "Filter by title, companies, expertise...";
    fullTimeOption.textContent = "Full Time Only";
  }
});

// Fonction lié à la modal
modalButton.addEventListener("click", function () {
  modal.classList.add("open-modal");
  body.classList.add("body-modal");
});
modalBlock.addEventListener("mouseleave", function () {
  modal.classList.remove("open-modal");
  body.classList.remove("body-modal");
});
