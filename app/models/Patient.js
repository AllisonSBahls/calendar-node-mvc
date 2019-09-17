const bd = require('./dbConnection');

const Patients = bd.sequelize.define('patients', {
    Name: {
        type: bd.Sequelize.STRING
    },


});

//Patients.sync({force: true});


module.exports = Patients;