# mongoose-flights

### Part 1:
Implement the following User Stories:

AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.

AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.

AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:

ALL FLIGHTS, and
ADD FLIGHT

### Part 2:
Implement the following User Story:
AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (show view), including each of its destinations.

Implement the following User Story:
AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight. Each destination, as defined by the schema above, includes an arrival date/time & one of the established airport codes._
Note: Multiple destinations are possible by adding them one at a time.

Implement the following User Story:
AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight's destinations (airport & arrival)

### Part 3:
Create a ticketSchema that will be compiled into a Ticket.
Modify the show view for a flight to render, as you see fit (table, grid, etc.), a list of tickets that have been created for that flight.
Also on the flight's show view, display a New Ticket link (perhaps styled to look like a button) that when clicked, shows the ticket's new view used to create a ticket for the flight. When the form is submitted, create the ticket on the server and redirect back to the flight's show view.

### Problems:
When trying to submit the ticket on the ticket page, the flights._id is not being passed to the create request and so that part of the application is not working as of right now.
I believe that it is in the controllers that the flight is not being passed by or I did not link the tickets and the flight models correctly.

### Demo:
https://user-images.githubusercontent.com/58004058/161803195-38b683ec-9b91-4264-b00e-45bc2604b72c.mp4

