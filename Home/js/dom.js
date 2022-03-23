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
  const card = document.createElement("article");
  card.classList.add("job-card");

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("announcement-logo");
  logoContainer.style.backgroundColor = logoBackground;

  const jobsLogo = document.createElement("img");
  jobsLogo.classList.add("jobs-logo");
  jobsLogo.src = "images" + logo;

  const announcementDetail = document.createElement("div");
  announcementDetail.classList.add("announcement-details");

  const timestamp = document.createElement("span");
  timestamp.classList.add("timestamp");
  timestamp.textContent = postedAt;

  const separator = document.createElement("p");
  separator.classList.add("separator");

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
}

apiListCards((resp) => {
  const object = resp.jobs;
  object.forEach((card) => {
    addCard(card);
  }),
    () => {
      alert("Erreur !");
    };
});
