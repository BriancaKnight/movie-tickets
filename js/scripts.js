//Buisness Logic for TheatreOrder ------------
function TheatreOrder() {
  this.tickets = {};
  this.currentId = 0;
}

TheatreOrder.prototype.addTicket = function (ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
};

TheatreOrder.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

//Business Logic for Ticket---------
function Ticket(releaseType, showing, age, movie) {
  this.releaseType = releaseType;
  this.showing = showing;
  this.age = age;
  this.movie = movie;
  this.id = null;//shows intent
}

Ticket.prototype.orderMessage = function () {
  let ticketPrice = this.basePrice();
  if (this.age >= 65) {
    return "You have bought a senior ticket to the " + this.showing + " showing of " + this.movie + " (" + this.releaseType + ")" + " for $" + ticketPrice;
  } else if (this.age < 65) {
    return "You have bought a ticket to the " + this.showing + " showing of " + this.movie + " (" + this.releaseType + ")" + " for $" + ticketPrice;
  }
}

Ticket.prototype.basePrice = function () {
  let ticketPrice = 10;

  if (this.releaseType === "New Release" && this.showing === "Matinee" && this.age >= 65) {
    return Math.round((ticketPrice + 3) * 0.9);
  } else if (this.releaseType === "New Release" && this.showing === "Matinee") {
    return ticketPrice + 3;
  } else if (this.releaseType === "New Release" && this.age >= 65) {
    return Math.round((ticketPrice + 5) * 0.9);
  } else if (this.releaseType === "New Release") {
    return ticketPrice + 5;
  } else if (this.showing === "Matinee") {
    return ticketPrice - 2;
  } else if (this.age >= 65) {
    return Math.round(ticketPrice * 0.9);
  } else {
    return ticketPrice;
  }
};

//UI Logic

window.addEventListener("load", function () {
  document.querySelector("form#movie-submit").addEventListener("submit", handleSubmission);
})

function handleSubmission(e) {
  e.preventDefault();

  const typeOfRelease = document.getElementById("release-type").value;
  const timeOfDay = document.getElementById("time-of-day").value;
  const buyerAge = parseInt(document.getElementById("age").value);
  const movieChoice = document.getElementById("movie-name").value;

  let myTicket = new Ticket(typeOfRelease, timeOfDay, buyerAge, movieChoice);
  let ticketPrice = myTicket.basePrice();

  outputStr = myTicket.orderMessage();
  document.getElementById("output-div").textContent = outputStr;
  // console.log(typeOfRelease, timeOfDay, buyerAge, movieChoice);
}

