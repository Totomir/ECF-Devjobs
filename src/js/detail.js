const switchTheme = document.querySelector("#lightSwitch");

const body = document.querySelector("body");
const companyCard = document.querySelector("#companyCard");
const companyLink = document.querySelector("#companyLink");
const cardTitle = document.querySelectorAll("h2");
const footer = document.querySelector("footer");

apiDetail((resp) => {
  const object = resp;
  console.log(object);
  showDetail(object);
  () => {
    alert(
      "Erreur : la liste des jobs n'a pu être récupérée ! Veuillez rééssayer plus tard ou contacter le service information."
    );
  };
});

// Fonction permettant de passer en mode sombre
function switchThemeDark() {
  const announcementCard = document.querySelector(".announcement-card");
  if (announcementCard) {
    announcementCard.classList.add("announcement-card-black");
  }
  body.classList.add("body-black");
  companyCard.classList.add("company-card-black");
  companyLink.classList.add("company-link-black");
  cardTitle.forEach((title) => {
    title.classList.add("h2-black");
  });
  footer.classList.add("footer-black");
}

// Fonction permettant de passer en mode clair
function switchThemeLight() {
  const announcementCard = document.querySelector(".announcement-card");
  if (announcementCard) {
    announcementCard.classList.remove("announcement-card-black");
  }
  body.classList.remove("body-black");
  companyCard.classList.remove("company-card-black");
  companyLink.classList.remove("company-link-black");

  cardTitle.forEach((title) => {
    title.classList.remove("h2-black");
  });
  footer.classList.remove("footer-black");
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
