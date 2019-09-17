const bd = require('./dbConnection');
const Patient = require('./Patient');

const Events = bd.sequelize.define('events', {
    title: {
        type: bd.Sequelize.STRING
    },
    color: {
        type: bd.Sequelize.STRING
    },
    start: {
        type: bd.Sequelize.DATE
    },

});

Events.belongsTo(Patient, {as : 'consultPatient', foreingKey: {name: 'fk_consult_patient'}});

//Events.sync({force: true});


module.exports = Events;