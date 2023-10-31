Describe Ticket()

SUCCESS
Test: It should create a constructor for Tickets.
Code: Tickets(movie1, movie2)
Expected Output: movie1, movie2

Test: It should add a ticket order message.
Code: Ticket.orderMessage()
Expected Output: "You have bought a "age" ticket to the "time" showing of movie ("release").

Describe TheatreOrder

Test: It will create a global function.
Code: TheatreOrder()
Expected Output: TheatreOrder(){this.Tickets={};}

Test: It will add Tickets to the global TheatreOrder with unique Ids.
Code: TheatreOrder.addTicket(movie1)
Expected Output:TheatreOrder{movie1}

Test: It will create branching logic to determine cost of ticket.
Code: myOrder.tickets[ticket1.id].basePrice();
Expected Output: (8)

Test:
Code:
Expected Output: