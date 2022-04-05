const Flight = require('../models/flight');
const Ticket = require('../models/tickets');

module.exports = {
    newTicket,
    create,
    deleteTicket
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight)
            res.render('tickets/new', {
                title: 'PW Flights Lab',
                flight
                
            });
        });
        
}

function create(req, res){
    req.body['flight'] = req.params.id
    console.log(req.body);
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`)
    });
}

function deleteTicket(req, res) {
    console.log(req.body)
    Ticket.deleteOne(req.body, function(err, ticket) {
            res.redirect(`/flights/${req.params.id}`);
        });
}