const Event = require('../models/Event');
const Patients = require('../models/Patient');

class EventController{
    events(req, res) {
        Event.findAll(({
            include: [{
                model: Patients, as: 'consultPatient'
            }]
        })).then(function (events) {
            res.render("index/calendar", { events: events})
        }).catch(function (err){
            console.log('erro')
        })
    }
}

module.exports = EventController;