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
    db.Post.findAll({
      where: query,
      include: [db.User],
    }).then((dbPatient) => res.json(dbPatient));
  });

  // Get route for retrieving a single patient
  app.get('/api/patient/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Patient.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.User],
    }).then((dbPatient) => res.json(dbPatient));
  });

  // POST route for saving a new patient
  app.post('/api/patient', (req, res) => {
    db.Patient.create(req.body).then((dbPatient) => res.json(dbPatient));
  });

  // DELETE route for deleting patients
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
