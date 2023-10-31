function Ticket(releaseType, showing, age, movie){
  this.releaseType = releaseType;
  this.showing = showing;
  this.age = age
  this.movie = movie;
}

Ticket.prototype.orderMessage = function() {
  return "You have bought a " + this.age + " ticket to the " + this.showing + " showing of " + this.movie + " (" + this.releaseType + ")"
}
