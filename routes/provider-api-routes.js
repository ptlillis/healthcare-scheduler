// Dependencies
// Requiring our models
const db = require('../models');
// Routes
module.exports = (app) => {
  app.get('/api/provider', (req, res) => {
    const query = {};
    if (req.query.provider_id) {
      query.UserId = req.query.provider_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Provider.findAll({
      where: query,
      include: [db.Patient],
    }).then((dbProvider) => res.json(dbProvider));
  });
  // Get route for retrieving a single patient
  app.get('/api/provider/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Provider.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Patient],
    }).then((dbProvider) => res.json(dbProvider));
  });
  // POST route for saving a new patient
  app.post('/api/provider', (req, res) => {
    console.log('======================',req.body);
    db.Provider.create(req.body).then((dbProvider) => res.json(dbProvider));
  });
  // DELETE route for deleting patients
  app.delete('/api/provider/:id', (req, res) => {
    db.Provider.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbProvider) => res.json(dbProvider));
  });
  // PUT route for updating patients
  app.put('/api/provider', (req, res) => {
    db.Provider.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbProvider) => res.json(dbProvider));
  });
};