// Création des cards dans la section pour la Home Page
const cardSection = document.querySelector("section");

function addCard(
  { company, contract, location, logo, logoBackground, position, postedAt },
  idClick = 1
) {
  // Fonction de traitement du timestamp pour le convertir en données numériques
  function dateParution(postedAt) {
    const date = new Date(postedAt);

    const today = new Date();
    const paruDepuis = today - date;

    const heures = parseInt(paruDepuis / 3600000);
    const jours = parseInt(paruDepuis / (3600000 * 24));
    const semaines = parseInt(paruDepuis / (3600000 * 24 * 7));
    const mois = parseInt(paruDepuis / (3600000 * 24 * 30));
    const annee = parseInt(paruDepuis / (3600000 * 24 * 30 * 12));

    if (heures < 24) {
      timestamp.textContent = heures + "h ago";
    } else if (heures >= 24 && jours < 7) {
      timestamp.textContent = jours + "d ago";
    } else if (jours >= 7 && semaines < 4) {
      timestamp.textContent = semaines + "w ago";
    } else if (semaines >= 4 && mois < 12) {
      timestamp.textContent = mois + "mo ago";
    } else {
      timestamp.textContent = annee + "y ago";
    }
  }

  // Création des cards et de leurs liens
  const card = document.createElement("article");
  card.classList.add("job-card");
  card.tabIndex = "0";
  card.addEventListener("click", function () {
    window.location.href = "pages/detail.html?id=" + idClick;
  });
  card.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      window.location.href = "pages/detail.html?id=" + idClick;
    }
  });

  // Ajout du logo
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("announcement-logo");
  logoContainer.style.backgroundColor = logoBackground;

  const jobsLogo = document.createElement("img");
  jobsLogo.classList.add("jobs-logo");
  jobsLogo.src = "https://ecf-dwwm.cefim-formation.org/" + logo;

  // Ajout des détails
  const announcementDetail = document.createElement("div");
  announcementDetail.classList.add("announcement-details");

  const timestamp = document.createElement("span");
  timestamp.classList.add("timestamp");
  dateParution(postedAt);

  const separator = document.createElement("span");
  separator.classList.add("separator");
  separator.textContent = "●";

  const fullTime = document.createElement("span");
  fullTime.classList.add("full-time");
  fullTime.textContent = contract;

  // Ajout du titre
  const announcementTitle = document.createElement("h2");
  announcementTitle.classList.add("announcement-title");
  announcementTitle.textContent = position;

  // Ajout de l'autheur de l'annonce
  const announcementAuthor = document.createElement("span");
  announcementAuthor.classList.add("announcement-author");
  announcementAuthor.textContent = company;

  // Ajout de la localisation
  const announcementLocation = document.createElement("div");
  announcementLocation.classList.add("announcement-location");
  announcementLocation.textContent = location;

  // Assemblage des éléments
  announcementDetail.append(timestamp, separator, fullTime);
  logoContainer.append(jobsLogo);
  card.append(
    logoContainer,
    announcementDetail,
    announcementTitle,
    announcementAuthor,
    announcementLocation
  );
  cardSection.append(card);

  // Gestion du thème sombre pour les nouveaux éléments
  if (switchTheme.checked) {
    card.classList.add("job-card-black");
    announcementTitle.classList.add("announcement-title-black");
  }
}

// Création de la section de la page détail
const section = document.querySelector("section");

function showDetail({
  logo,
  logoBackground,
  company,
  website,
  apply,
  postedAt,
  contract,
  position,
  location,
  description,
  requirements,
  role,
}) {
  // Reprise de la fonction de traitement du timestamp
  function dateParution(postedAt) {
    const date = new Date(postedAt);

    const today = new Date();
    const paruDepuis = today - date;

    const heures = parseInt(paruDepuis / 3600000);
    const jours = parseInt(paruDepuis / (3600000 * 24));
    const semaines = parseInt(paruDepuis / (3600000 * 24 * 7));
    const mois = parseInt(paruDepuis / (3600000 * 24 * 30));
    const annee = parseInt(paruDepuis / (3600000 * 24 * 30 * 12));

    if (heures < 24) {
      postedTime.textContent = heures + "h ago";
    } else if (heures >= 24 && jours < 7) {
      postedTime.textContent = jours + "d ago";
    } else if (jours >= 7 && semaines < 4) {
      postedTime.textContent = semaines + "w ago";
    } else if (semaines >= 4 && mois < 12) {
      postedTime.textContent = mois + "mo ago";
    } else {
      postedTime.textContent = annee + "y ago";
    }
  }

  // Création de la card de l'entreprise
  const companyCard = document.createElement("div");
  companyCard.classList.add("company-card");

  // Ajout du logo
  const companyLogo = document.createElement("img");
  companyLogo.classList.add("company-logo");
  companyLogo.src = "https://ecf-dwwm.cefim-formation.org/" + logo;
  companyLogo.style.backgroundColor = logoBackground;

  // Ajout des détails
  const companyNameLink = document.createElement("div");
  companyNameLink.classList.add("company-name-link");

  const companyName = document.createElement("h2");
  companyName.classList.add("company-name");
  companyName.textContent = company;

  const companySite = document.createElement("span");
  companySite.classList.add("company-site");
  companySite.textContent = website;

  // Ajout du bouton pour le site de l'entreprise
  const companyLink = document.createElement("button");
  companyLink.classList.add("company-link");
  companyLink.textContent = "Company Site";
  companyLink.setAttribute("href", website);
  companyLink.addEventListener("click", function () {
    window.location.href = website;
  });

  // Création de la page de détail de l'offre
  const announcementCard = document.createElement("div");
  announcementCard.classList.add("announcement-card");

  const announcementHeader = document.createElement("div");
  announcementHeader.classList.add("announcement-header");

  const announcementInfos = document.createElement("div");
  announcementInfos.classList.add("announcement-infos");

  // Ajout des détails sur l'offre
  const announcementDetail = document.createElement("div");
  announcementDetail.classList.add("announcement-detail");

  const postedTime = document.createElement("span");
  postedTime.classList.add("posted-time");
  dateParution(postedAt);

  const separator = document.createElement("span");
  separator.textContent = "●";

  const timeOption = document.createElement("span");
  timeOption.classList.add("time-option");
  timeOption.textContent = contract;

  // Ajout du titre du poste
  const jobTitle = document.createElement("h2");
  jobTitle.classList.add("job-title");
  jobTitle.textContent = position;

  // Ajout de la localisation
  const announcementLocation = document.createElement("span");
  announcementLocation.classList.add("announcement-location");
  announcementLocation.textContent = location;

  // Ajout du bouton pour postuler
  const applyButton = document.createElement("button");
  applyButton.classList.add("apply-button");
  applyButton.textContent = "Apply Now";
  applyButton.setAttribute("href", apply);
  applyButton.addEventListener("click", function () {
    window.location.href = apply;
  });

  // Ajout d'une description du poste'
  const announcementDescription = document.createElement("p");
  announcementDescription.classList.add("announcement-description");
  announcementDescription.textContent = description;

  // Ajout des critères requis
  const require = document.createElement("h2");
  require.textContent = "Requirements";

  const skillRequire = document.createElement("p");
  skillRequire.classList.add("skills-require");
  skillRequire.textContent = requirements.content;

  const requirementsList = document.createElement("ul");

  let requirementsItems;
  let items;

  requirements.items.forEach((element) => {
    requirementsItems = document.createElement("li");
    requirementsItems.classList.add("li-element");

    items = document.createElement("span");
    items.classList.add("space-li");
    items.textContent = element;
    requirementsItems.append(items);
    requirementsList.append(requirementsItems);
  });

  // Ajout des futurs tâches
  const futurTasks = document.createElement("h2");
  futurTasks.textContent = "What You Will Do";

  const tasksResume = document.createElement("p");
  tasksResume.classList.add("tasks");
  tasksResume.textContent = role.content;

  const tasksList = document.createElement("ol");

  let tasksElements;
  let tasks;
  role.items.forEach((element) => {
    tasksElements = document.createElement("li");
    tasksElements.classList.add("li-element");
    tasks = document.createElement("span");
    tasks.classList.add("space-li");
    tasks.textContent = element;
    tasksElements.append(tasks);
    tasksList.append(tasksElements);
  });

  // Création du bouton footer
  const footerButton = document.querySelector(".apply-now");
  footerButton.addEventListener("click", function () {
    window.location.href = apply;
  });

  // Assemblage
  companyNameLink.append(companyName, companySite);
  companyCard.append(companyLogo, companyNameLink, companyLink);

  announcementDetail.append(postedTime, separator, timeOption);
  announcementInfos.append(announcementDetail, jobTitle, announcementLocation);
  announcementHeader.append(announcementInfos, applyButton);

  announcementCard.append(
    announcementHeader,
    announcementDescription,
    require,
    skillRequire,
    requirementsList,
    futurTasks,
    tasksResume,
    tasksList
  );

  section.append(companyCard, announcementCard);

  // Gestion du thème sombre pour les nouveaux éléments
  if (switchTheme.checked) {
    companyCard.classList.add("company-card-black");
    announcementCard.classList.add("announcement-card-black");
    companyLink.classList.add("company-link-black");
    companyName.classList.add("h2-black");
    jobTitle.classList.add("h2-black");
    require.classList.add("h2-black");
    futurTasks.classList.add("h2-black");
  }
}

// Ajout loader
const ring = document.createElement("div");
const ringChild1 = document.createElement("div");
const ringChild2 = document.createElement("div");
const ringChild3 = document.createElement("div");
const ringChild4 = document.createElement("div");

function addLoader() {
  ring.classList.add("lds-ring");
  ring.append(ringChild1, ringChild2, ringChild3, ringChild4);
  cardSection.append(ring);
}

function removeLoader() {
  ring.remove();
  ringChild1.remove();
  ringChild2.remove();
  ringChild3.remove();
  ringChild4.remove();
}
// Revoir les liens et les bug de mises en forme sur le détail
// Revoir chaque page, faire des commentaires, aerer le code ...
