function book() {
  let name = prompt("What is your name?");
  let city = prompt("From what city you would like to start the tour?");

  if (city == "Lviv") {
    let email = prompt("What is your email?");
    alert(
      "Thank you for your interest, " +
        name +
        "! We will contact you via email - " +
        email +
        " in one or two days."
    );
  } else {
    alert(
      "Sorry, " +
        name +
        ". The tours from " +
        city +
        " are currently unavailable."
    );
  }
}
function openSite() {
  open(
    "https://bukovel24.com/uk/skipass?_ga=2.151606463.725218658.1656076763-518739097.1656076763"
  );
}
let bookTour = document.querySelector(".bookTour");
bookTour.addEventListener("click", book);
let buyPass = document.querySelector(".buyPass");
buyPass.addEventListener("click", openSite);
