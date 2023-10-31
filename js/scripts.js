//Buisness Logic for TheatreOrder ------------
function TheatreOrder() {
  this.tickets = {};
  this.currentId = 0;
}

// let myTicket = new Ticket();

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
  this.age = age
  this.movie = movie;
  // this.id = null;//maybe
  // this.ticketPrice = ticketPrice;
}

Ticket.prototype.orderMessage = function () {
  return "You have bought a " + this.age + " ticket to the " + this.showing + " showing of " + this.movie + " (" + this.releaseType + ")";
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

//Make testing easier
let myOrder = new TheatreOrder();
let ticket1 = new Ticket("New Release", "Evening", 18, "Lion King");
let ticket2 = new Ticket("Old", "Matinee", 73, "Tombstone");

myOrder.addTicket(ticket1);
myOrder.addTicket(ticket2);

console.log(myOrder.tickets[ticket1.id].orderMessage());
console.log(myOrder.tickets[ticket1.id].basePrice());
console.log(myOrder.tickets[ticket2.id].basePrice());
console.log(myOrder.tickets[ticket2.id].orderMessage());
console.log(myOrder.tickets);