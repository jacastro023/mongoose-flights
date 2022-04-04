const Flight = require('../models/flight');
const Destination = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    delete: deleteFlight,
    addDestination,
    deleteDestination,
}


function deleteDestination(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.remove({_id: req.params.dId})
    flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
    })
})
}

function addDestination(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body)
      flight.save(function(err) {
          res.redirect(`/flights/${flight._id}`)
      })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
      res.redirect('/flights')
  })
}

function show(req, res){
  Flight.findById(req.params.id, function(err, flight){
      res.render("flights/show", {title: "Airline Detail", flight});
  })
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights', { title:"All Flights List", flights });
    });
};

function newFlight(req, res) {
    //respond with a form for entering a new flight
    res.render('flights/new', { title:"Add New Flight" });
    res.redirect('/flights');
};

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect(`/flights`);
})
}