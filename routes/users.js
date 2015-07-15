var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET /api/users */
router.get('/', function(req, res, next) {
  models.User.findAll()
    .then(function(users) {
      res.status = 200;
      res.json({
        status: res.status,
        message: 'OK',
        users: users
      });
    });
});

/* GET /api/users/:id */
router.get('/:id', function(req, res, next) {
  models.User.findById(req.params.id)
    .then(function(user) {
      res.status = 200;
      res.json({
        status: res.status,
        message: 'OK',
        user: user
      })
    });
});

/* POST /api/users */
router.post('/', function(req, res, next) {
  models.User.create(req.body)
    .then(function(user) {
      res.status = 201;
      res.json({
        status: res.status,
        message: 'User created',
        user: user
      });
    });
});

/* PUT /api/users/:id */
router.put('/:id', function(req, res, next) {
  models.User.update(req.body, { where: { id: req.params.id } })
    .then(function() {
      res.status = 200;
      res.json({
        status: res.status,
        message: 'User updated'
      });
    });
});

/* DELETE /api/users/:id */
router.delete('/:id', function(req, res, next) {
  models.User.destroy({ where: { id: req.params.id } })
    .then(function() {
      res.status = 200;
      res.json({
        status: res.status,
        message: 'User deleted'
      });
    });
});

module.exports = router;
