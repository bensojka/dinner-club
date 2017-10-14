// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the locations
  app.get("/api/locations", function(req, res) {
    var query = {};
    if (req.query.facebook_key) {
      query.key = req.query.facebook_key;
    }

    db.Location.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbLocation) {
      res.json(dbLocation);
    });
  });

  // Get rotue for retrieving a single location
  app.get("/api/locations/:id", function(req, res) {
    db.Location.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbLocation) {
      res.json(dbLocation);
    });
  });

  // POST route for saving a new location
  app.post("/api/locations", function(req, res) {
    db.Location.create(req.body).then(function(dbLocation) {
      res.json(dbLocation);
    });
  });

  // DELETE route for deleting locations
  app.delete("/api/locations/:id", function(req, res) {
    db.Location.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbLocation) {
      res.json(dbLocation);
    });
  });

  // PUT route for updating locations
  app.put("/api/locations", function(req, res) {
    db.Location.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbLocation) {
        res.json(dbLocation);
      });
  });
};
