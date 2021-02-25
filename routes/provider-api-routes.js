// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  app.get('/api/provider', (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Post.findAll({
      where: query,
      include: [db.User],
    }).then((dbProvider) => res.json(dbProvider));
  });

  // Get route for retrieving a single provider
  app.get('/api/provider/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Provider.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.User],
    }).then((dbProvider) => res.json(dbProvider));
  });

  // POST route for saving a new provider
  app.post('/api/provider', (req, res) => {
    db.Provider.create(req.body).then((dbProvider) => res.json(dbProvider));
  });

  // DELETE route for deleting provider
  app.delete('/api/provider/:id', (req, res) => {
    db.Provider.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbProvider) => res.json(dbProvider));
  });

  // PUT route for updating provider
  app.put('/api/provider', (req, res) => {
    db.Provider.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbProvider) => res.json(dbProvider));
  });
};
