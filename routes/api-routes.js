// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/all", function(req, res) {
    db.user.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Add a user:
  app.post("/api/new", function(req, res) {
    db.user.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(results){
        if(results){
            res.json(results.email);
        } else {
            db.user.create({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            });
        }
    });
  });

    //Login

    app.get("/api/login", function(req, res) {
        db.user.findOne({
            where: {
                email: req.query.email
            }
        }).then(function(results){
            if(req.query.password === results.dataValues.password){
                res.json(results.dataValues.id)
            } else {
                res.json(null)
            }
        })
    });

    app.post('/api/groups/new', function(req,res) {
        db.group.create({
            name: req.body.name
        }).then(function(results){
            res.json(results);
            // db.UsersGroupsLocations.create({
            //     groupId: results.id,
            //     userId: req.body.id
            // })
        })
    })


  // Get a specific book
  // app.get("/api/:book", function(req, res) {
  //   if (req.params.book) {
  //     Book.findAll({
  //       where: {
  //         title: req.params.book
  //       }
  //     }).then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });

  // Get all books of a specific genre
  // app.get("/api/genre/:genre", function(req, res) {
  //   if (req.params.genre) {
  //     Book.findAll({
  //       where: {
  //         genre: req.params.genre
  //       }
  //     }).then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });

  // Get all books from a specific author
  // app.get("/api/author/:author", function(req, res) {
  //   if (req.params.author) {
  //     Book.findAll({
  //       where: {
  //         author: req.params.author
  //       }
  //     }).then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });

  // Get all "long" books (books 300 pages or more)
  // app.get("/api/books/long", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       pages: {
  //         $gte: 300
  //       }
  //     },
  //     order: [["pages", "DESC"]]
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // Get all "short" books (books 150 pages or less)
  // app.get("/api/books/short", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       pages: {
  //         $lte: 150
  //       }
  //     },
  //     order: [["pages", "ASC"]]
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  
  // Delete a book
  // app.post("/api/delete", function(req, res) {
  //   console.log("Book Data:");
  //   console.log(req.body);
  //   Book.destroy({
  //     where: {
  //       id: req.body.id
  //     }
  //   });
  // });
};
