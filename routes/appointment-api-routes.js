// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  app.get('/api/appointment', (req, res) => {
    const query = {};
    if (req.query.appointment_id) {
      query.AppointmentId = req.query.appointment_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, db.Patient and db.Provider
        db.Appointment.findAll({
      where: query,
      include: [db.patient], 
    }).then((dbAppointment) => res.json(dbAppointment));
  });

  // Get route for retrieving a single appointment...?
  app.get('/api/appointment/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    
    db.Appointment.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.patient],
    }).then((dbAppointment) => res.json(dbAppointment));
  });

  // POST route for saving a new appointment
  app.post('/api/appointment', (req, res) => {
    db.Appointment.create(req.body).then((dbAppointment) => res.json(dbAppointment));
  });

  // DELETE route for deleting appointment
  app.delete('/api/appointment/:id', (req, res) => {
    db.Appointment.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbAppointment) => res.json(dbAppointment));
  });

  // PUT route for updating appointment
  app.put('/api/appointment', (req, res) => {
    db.Appointment.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbAppointment) => res.json(dbAppointment));
  });
};
