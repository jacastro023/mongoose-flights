const Flight = require('../models/flight');
const Ticket = require('../models/tickets');

module.exports = {
    newTicket,
    create
}

function newTicket(req, res){
    res.render('tickets/new', {flight: req.params.id, title:"Tickets"})
};

function create(req, res){
    let newTicket = {
        flight: req.params.id,
        seat: req.body.seat,
        price: req.body.price
    }
    Ticket.create(newTicket, function(err, ticket){
        if(err) res.send(err)
        res.redirect(`/flights/${req.params.id}`);
    })
}

