// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  app.get('/api/patient', (req, res) => {
    const query = {};
    if (req.query.patient_id) {
      query.UserId = req.query.patient_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.patient.findAll({
      where: query,
      include: [db.Provider],
    }).then((dbPatient) => res.json(dbPatient));
  });

  // Get route for retrieving a single patient
  app.get('/api/patient/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.patient.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Provider],
    }).then((dbPatient) => res.json(dbPatient));
  });

  // POST route for saving a new patient
  app.post('/api/patient', (req, res) => {
    console.log('======================',req.body);
    db.Patient.create(req.body).then((dbPatient) => {
    console.log(dbPatient.dataValues.patient_id);
    //get providers 
    db.Provider.findAll({
      where: {
        monday: dbPatient.dataValues.monday,
        tuesday: dbPatient.dataValues.tuesday,
        wednesday: dbPatient.dataValues.wednesday,
        thursday: dbPatient.dataValues.thursday,
        friday: dbPatient.dataValues.friday,
        saturday: dbPatient.dataValues.saturday,
        sunday: dbPatient.dataValues.sunday,
      }
    }
    ).then((dbProvider) => {
    console.log(dbProvider[0].dataValues.provider_id)
     res.json(dbPatient)
    const newAppointment = 
    {
      patient_id: dbPatient.dataValues.patient_id,
      provider_id: dbProvider[0].dataValues.provider_id,
      monday: dbPatient.dataValues.monday,
      tuesday: dbPatient.dataValues.tuesday,
      wednesday: dbPatient.dataValues.wednesday,
      thursday: dbPatient.dataValues.thursday,
      friday: dbPatient.dataValues.friday,
      saturday: dbPatient.dataValues.saturday,
      sunday: dbPatient.dataValues.sunday,
     

    }
    //return
    db.Appointment.create(newAppointment).then((dbAppointment) => {
      console.log(dbAppointment.dataValues.appointment_id);
    })})
  })})
    app.delete('/api/patient/:id', (req, res) => {
      db.Patient.destroy({
        where: {
          id: req.params.id,
        },
      }).then((dbPatient) => res.json(dbPatient));
    });
    // PUT route for updating patients
    app.put('/api/patient', (req, res) => {
      db.Patient.update(req.body, {
        where: {
          id: req.body.id,
        },
      }).then((dbPatient) => res.json(dbPatient));
    });
  };
