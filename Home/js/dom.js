const cardSection = document.querySelector("main");

function addCard({
  company,
  contract,
  location,
  logo,
  logoBackground,
  position,
  postedAt,
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
