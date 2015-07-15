var express = require('express');
var router = express.Router();

/* GET / */
router.get('/', function(req, res, next) {
  res.json({
    status: 200,
    message: "OK"
  });
});

module.exports = router;
