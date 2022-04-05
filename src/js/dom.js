const cardSection = document.querySelector("main");

function addCard(
  { company, contract, location, logo, logoBackground, position, postedAt },
  idClick = 1
) {
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

  const card = document.createElement("article");
  card.classList.add("job-card");
  card.addEventListener("click", function () {
    window.location.href = "detail.html?id=" + idClick;
  });

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("announcement-logo");
  logoContainer.style.backgroundColor = logoBackground;

  const jobsLogo = document.createElement("img");
  jobsLogo.classList.add("jobs-logo");
  jobsLogo.src = "https://ecf-dwwm.cefim-formation.org/" + logo;

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

  const announcementTitle = document.createElement("h2");
  announcementTitle.classList.add("announcement-title");
  announcementTitle.textContent = position;

  const announcementAuthor = document.createElement("span");
  announcementAuthor.classList.add("announcement-author");
  announcementAuthor.textContent = company;

  const announcementLocation = document.createElement("div");
  announcementLocation.classList.add("announcement-location");
  announcementLocation.textContent = location;

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

  if (switchTheme.checked) {
    card.classList.add("job-card-black");
    announcementTitle.classList.add("announcement-title-black");
  }
}

const section = document.querySelector("section");

function showDetail({
  logo,
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
  const companyCard = document.createElement("div");
  companyCard.classList.add("company-card");

  const companyLogo = document.createElement("img");
  companyLogo.classList.add("company-logo");
  companyLogo.src = "https://ecf-dwwm.cefim-formation.org/" + logo;

  const companyNameLink = document.createElement("div");
  companyNameLink.classList.add("company-name-link");

  const companyName = document.createElement("h2");
  companyName.classList.add("company-name");
  companyName.textContent = company;

  const companySite = document.createElement("span");
  companySite.classList.add("company-site");
  companySite.textContent = website;

  const companyLink = document.createElement("button");
  companyLink.classList.add("company-link");
  companyLink.textContent = "Company Site";
  companyLink.href = website;

  const announcementCard = document.createElement("div");
  announcementCard.classList.add("announcement-card");

  const announcementHeader = document.createElement("div");
  announcementHeader.classList.add("announcement-header");

  const announcementInfos = document.createElement("div");
  announcementInfos.classList.add("announcement-infos");

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

  const jobTitle = document.createElement("h2");
  jobTitle.classList.add("job-title");
  jobTitle.textContent = position;

  const announcementLocation = document.createElement("span");
  announcementLocation.classList.add("announcement-location");
  announcementLocation.textContent = location;

  const applyButton = document.createElement("button");
  applyButton.classList.add("apply-button");
  applyButton.textContent = "Apply Now";
  applyButton.setAttribute("href", apply);

  const announcementDescription = document.createElement("p");
  announcementDescription.classList.add("announcement-description");
  announcementDescription.textContent = description;

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
    items = document.createElement("span");
    items.classList.add("space-li");
    items.textContent = element;
    requirementsItems.append(items);
    requirementsList.append(requirementsItems);
  });

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
    tasks = document.createElement("span");
    tasks.classList.add("space-li");
    tasks.textContent = element;
    tasksElements.append(tasks);
    tasksList.append(tasksElements);
  });

  companyNameLink.append(companyName, companyLink);
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

  if (switchTheme.checked) {
    announcementCard.classList.add("announcement-card-black");
  }
}

// Revoir les liens et les bug de mises en forme sur le détail
// Revoir chaque page, faire des commentaires, aerer le code ...