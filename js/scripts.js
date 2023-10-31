//Buisness Logic for TheatreOrder ------------
function TheatreOrder() {
  this.Tickets = {};
  this.currentId = 0;
}

let myTicket = new Ticket();

TheatreOrder.prototype.addTicket = function() {
  Ticket.id = this.assignId();
  this.Tickets[Ticket.id] = Ticket;
};

TheatreOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//Buisness Logic for Ticket---------
function Ticket(releaseType, showing, age, movie){
  this.releaseType = releaseType;
  this.showing = showing;
  this.age = age
  this.movie = movie;
}

Ticket.prototype.orderMessage = function() {
  return "You have bought a " + this.age + " ticket to the " + this.showing + " showing of " + this.movie + " (" + this.releaseType + ")"
}
