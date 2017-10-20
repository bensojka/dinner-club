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
            // res.json(results);
            console.log('It got here');
            db.UsersGroupsLocations.create({
                groupId: results.id,
                userId: req.body.id
            }).then(function(results){
                res.json(results)
            });
        });
    });

    app.post('/api/groups/new', function(req,res) {
        db.UsersGroupsLocations.create({
            groupID: results.id,
            userID: req.body.id
        });
    });

    app.get('/api/all/groups', function(req, res) {
        db.group.findAll({
            attributes: ['id', 'name']
        }).then(function(results) {
            res.json(results);    
        });
    });

    app.get('/api/all/members', function(req, res) {
        db.UsersGroupsLocations.findAll({
            attributes: ['userid', 'groupid', 'locationid']
        }).then(function(results) {
            res.json(results);    
        });
    });

    app.get('/api/all/locations', function(req, res) {
        db.location.findAll({
            attributes: ['id', 'name']
        }).then(function(results) {
            res.json(results);    
        });
    });

    app.post('/api/new/join', function(req,res) {
        db.UsersGroupsLocations.create({
            groupID: results.id,
            userID: req.body.id
        })
    });

    // app.put('api/new/vote', function(req,res) {
    //     db.UsersGroupsLocations.update({
    //         test:
    //         {
    //             where: {
    //                 groupID: req.body.groupID,
    //                 userID: req.body.userID
    //             }
    //         }).then(function(db) {
    //             res.json(db);
    //         });
    // });

//    app.put("/api/posts", function(req, res) {
//        db.Post.update(
//            req.body,
//            {
//                where: {
//                    id: req.body.id
//                }
//            }).then(function(dbPost) {
//                res.json(dbPost);
//            });
//    });

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
