const switchTheme = document.querySelector("#lightSwitch");

const body = document.querySelector("body");
const footer = document.querySelector("footer");
const footerTitle = document.querySelector(".footer-title");

// Retour au home
const backHome = document.querySelector(".devjobs");
backHome.addEventListener("click", function () {
  window.location.href = "index.html";
});
addLoader();
apiDetail((resp) => {
  removeLoader();
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
  const companyCard = document.querySelector(".company-card");
  const companyLink = document.querySelector(".company-link");
  const cardTitle = document.querySelectorAll("h2");
  body.classList.add("body-black");

  if (companyCard) {
    announcementCard.classList.add("announcement-card-black");
    companyCard.classList.add("company-card-black");
    companyLink.classList.add("company-link-black");
    cardTitle.forEach((title) => {
      title.classList.add("h2-black");
    });
  }

  footer.classList.add("footer-black");
  footerTitle.classList.add("footer-title-black");
}

// Fonction permettant de passer en mode clair
function switchThemeLight() {
  const announcementCard = document.querySelector(".announcement-card");
  const companyCard = document.querySelector(".company-card");
  const companyLink = document.querySelector(".company-link");
  const cardTitle = document.querySelectorAll("h2");
  body.classList.remove("body-black");

  if (companyCard) {
    announcementCard.classList.remove("announcement-card-black");
    companyCard.classList.remove("company-card-black");
    companyLink.classList.remove("company-link-black");
    cardTitle.forEach((title) => {
      title.classList.remove("h2-black");
    });
  }

  footer.classList.remove("footer-black");
  footerTitle.classList.remove("footer-title-black");
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
