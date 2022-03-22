// API récupération
function apiListCards(onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://ecf-dwwm.cefim-formation.org/api/jobs");
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        const jobs = response.jobs;

        console.log(response);
        console.log(jobs);

        onSuccess(response);
      } else {
        onError();
      }
    }
  });

  request.send();
}

apiListCards();
