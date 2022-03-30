// API récupération des jobs
let offsetJob = 0;
let urlText = "";
let urlJobLocation = "";
let fulltime = "0";
let urlJob = "";

function apiListCards(onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://ecf-dwwm.cefim-formation.org/api/jobs");
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else {
        onError();
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
      } else {
        onError();
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
      } else {
        onError();
      }
    }
  });
  request.send();
}
