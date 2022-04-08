//RECUPERATION DES ELEMENTS HTML
const switchTheme = document.querySelector("#lightSwitch");
const body = document.querySelector("body");

// Search bar
const searchBar = document.querySelector("#searchBar");
const searchTab = document.querySelector("#searchTab");
const searchByLocation = document.querySelector("#searchByLocation");
const vertical = document.querySelectorAll(".vertical");
const searchButton = document.querySelector("#searchButton");
const modalButton = document.querySelector("#filterOption");
const timeCheckbox = document.querySelector("#timeCheckbox");
const timeContent = document.querySelector("#timeContent");

// Modal
const modal = document.querySelector("#modal");
const modalBlock = document.querySelector("#modalBlock");
const modalTab = document.querySelector("#modalTab");
const modalCheckbox = document.querySelector("#modalCheckbox");
const modalTime = document.querySelector("#modalTime");
const modalSearchButton = document.querySelector("#modalSearchButton");

// Fonction permettant de passer en mode sombre
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

// Fonction permettant de passer en mode clair
function switchThemeLight() {
  const jobCard = document.querySelectorAll(".job-card");
  const title = document.querySelectorAll(".announcement-title");
  body.classList.remove("body-black");
  searchBar.classList.remove("search-bar-black");
  searchTab.classList.remove("search-tab-black");
  vertical.forEach((ligne) => {
    ligne.classList.remove("vertical-black");
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

// Sauvegarde du paramétrage dans le local storage
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

// Mise en application des fonctions sur le toggle switch
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
    timeContent.textContent = "Full Time";
  } else if (window.matchMedia("(min-width: 1440px)").matches) {
    searchTab.placeholder = "Filter by title, companies, expertise...";
    timeContent.textContent = "Full Time Only";
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

// Appel des jobs une première fois
addLoader();
apiListCards((resp) => {
  const object = resp.jobs;
  removeLoader();
  object.forEach((card, index) => {
    offsetJob = offsetJob + 1;
    addCard(card, object[index].id);
  });
});

// Appel des jobs une seconde fois avec gestion du bouton "Load More"
const loadMore = document.querySelector("#loadMore");
loadMore.addEventListener("click", function () {
  addLoader();
  apiListCards2((resp) => {
    removeLoader();
    const object = resp.jobs;
    if (object.length === 0) {
      loadMore.textContent = "Vous avez affiché toutes les offres disponibles";
    }
    object.forEach((card, index) => {
      offsetJob = offsetJob + 1;
      addCard(card, object[index].id);
    }),
      () => {
        alert(
          "Erreur : la liste des jobs n'a pu être récupérée ! Veuillez rééssayer plus tard ou contacter le service information."
        );
      };
  });
});

// Filtrage des offres avec la search bar
searchButton.addEventListener("click", function () {
  if (searchTab.value) {
    urlText = "&text=" + searchTab.value;
  } else {
    urlText = "";
  }
  if (searchByLocation.value) {
    urlJobLocation = "&location=" + searchByLocation.value;
  } else {
    urlJobLocation = "";
  }
  if (timeCheckbox.checked) {
    fulltime = "1";
  } else {
    fulltime = "0";
  }
  cardSection.innerHTML = "";

  addLoader();
  apiSortCards((resp) => {
    removeLoader();
    const object = resp.jobs;
    offsetJob = object.length;
    if (object.length < 12) {
      loadMore.textContent = "Vous avez affiché toutes les offres disponibles";
      loadMore.disabled = true;
    } else {
      loadMore.disabled = false;
      loadMore.textContent = "Load More";
    }
    object.forEach((card) => {
      addCard(card);
    }),
      () => {
        alert(
          "Erreur : la liste des jobs n'a pu être récupérée ! Veuillez rééssayer plus tard ou contacter le service information."
        );
      };
  });
});

// Filtrage des offres avec la modal
modalSearchButton.addEventListener("click", function () {
  if (searchTab.value) {
    urlText = "&text=" + searchTab.value;
  } else {
    urlText = "";
  }
  if (modalTab.value) {
    urlJobLocation = "&location=" + modalTab.value;
  } else {
    urlJobLocation = "";
  }
  if (modalCheckbox.checked) {
    fulltime = "1";
  } else {
    fulltime = "0";
  }
  cardSection.innerHTML = "";
  apiSortCards((resp) => {
    const object = resp.jobs;
    offsetJob = object.length;
    if (object.length < 12) {
      loadMore.textContent = "Vous avez affiché toutes les offres disponibles";
      loadMore.disabled = true;
    } else {
      loadMore.disabled = false;
      loadMore.textContent = "Load More";
    }
    object.forEach((card) => {
      addCard(card);
    }),
      () => {
        alert(
          "Erreur : la liste des jobs n'a pu être récupérée ! Veuillez rééssayer plus tard ou contacter le service information."
        );
      };
  });
});
