const switchTheme = document.querySelector("#lightSwitch");
const body = document.querySelector("body");
const searchBar = document.querySelector("#searchBar");
const searchTab = document.querySelector("#searchTab");
const searchByLocation = document.querySelector("#searchByLocation");
const vertical = document.querySelector(".vertical");
const jobCard = document.querySelectorAll(".job-card");
const announcementTitle = document.querySelectorAll(".announcement-title");

console.log(switchTheme);

switchTheme.addEventListener("change", function () {
  if (switchTheme.checked) {
    console.log("Checkbox is checked..");
    body.classList.add("body-black");
    searchBar.classList.add("search-bar-black");
    searchTab.classList.add("search-tab-black");
    searchByLocation.classList.add("search-by-location-black");
    vertical.classList.add("vertical-black");
    jobCard.forEach((card) => {
      card.classList.add("job-card-black");
    });
    announcementTitle.forEach((title) => {
      title.classList.add("announcement-title-black");
    });
  } else {
    console.log("Checkbox is not checked..");
    body.classList.remove("body-black");
    searchBar.classList.remove("search-bar-black");
    searchTab.classList.remove("search-tab-black");
    searchByLocation.classList.remove("search-by-location-black");
    vertical.classList.remove("vertical-black");
    jobCard.forEach((card) => {
      card.classList.remove("job-card-black");
    });
    announcementTitle.forEach((title) => {
      title.classList.remove("announcement-title-black");
    });
  }
});
