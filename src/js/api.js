let offsetJob = 0;
let urlText = "";
let urlJobLocation = "";
let fulltime = "0";
let urlJob = "";
let idInUrl = document.location.href.slice(56);

// API récupération des jobs
function apiListCards(onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://ecf-dwwm.cefim-formation.org/api/jobs");
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else if (request.status >= 400 && request.status < 500) {
        alert(
          "Erreur : la requête effectuée n'est pas attribuée, veuillez recommencer en modifiant votre requête."
        );
      } else {
        alert(
          "Erreur : la liste des postes n'a pu être récupérée ! Veuillez réessayer plus tard ou contacter le service informatique."
        );
      }
    }
  });
  request.send();
}

// API récupération des jobs suivants
function apiListCards2(onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://ecf-dwwm.cefim-formation.org/api/jobs?offset=" + offsetJob
  );
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else if (request.status >= 400 && request.status < 500) {
        alert(
          "Erreur : la requête effectuée n'est pas attribuée, veuillez recommencer en modifiant votre requête."
        );
      } else {
        alert(
          "Erreur : la liste des postes n'a pu être récupérée ! Veuillez réessayer plus tard ou contacter le service informatique."
        );
      }
    }
  });
  request.send();
}

// API filtrage des jobs
function apiSortCards(onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://ecf-dwwm.cefim-formation.org/api/jobs/search?fulltime=" +
      fulltime +
      urlText +
      urlJobLocation +
      urlJob
  );
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else if (request.status >= 400 && request.status < 500) {
        alert(
          "Erreur : la requête effectuée n'est pas attribuée, veuillez recommencer en modifiant votre requête."
        );
      } else {
        alert(
          "Erreur : le filtrage des postes n'a pu être réalisé ! Veuillez réessayer plus tard ou contacter le service informatique."
        );
      }
    }
  });
  request.send();
}

// API détails des jobs
const url = "https://ecf-dwwm.cefim-formation.org/api/job/";
function apiDetail(onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://ecf-dwwm.cefim-formation.org/api/job/" + idInUrl
  );
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else if (request.status === 400) {
        alert(
          "Erreur : la requête effectuée n'est pas attribuée, veuillez recommencer en modifiant votre requête."
        );
      } else {
        alert(
          "Erreur : le détail du poste n'a pu être récupéré ! Veuillez réessayer plus tard ou contacter le service informatique."
        );
      }
    }
  });
  request.send();
}
