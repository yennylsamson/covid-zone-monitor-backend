const express = require('express'),
  router = express.Router();

// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM users`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
    })
  })
});

// create new user
router.post('/register', function(req, res) {
  let sql = `INSERT INTO users(dataLastName, dataFirstName, dataEmailAdd, dataPhoneNumber, dataAddress, dataPassword) VALUES (?)`;
  console.log(req.body)
  let values = [
    req.body.dataLastName,
    req.body.dataFirstName,
    req.body.dataEmailAdd,
    req.body.dataPhoneNumber,
    req.body.dataAddress,
    req.body.dataPassword,
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully"
    })
  })
});

//create new place list
router.post('/log', function(req, res) {
  let sql = `INSERT INTO placelist(dataLastName, dataFirstName, dateTime, placeName) VALUES (?)`;
  console.log(req.body)
  let values = [
    req.body.dataLastName,
    req.body.dataFirstName,
    req.body.dateTime,
    req.body.placeName,
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New place added successfully"
    })
  })
});

//get user
router.post('/auth', function(req, res) {
  let sql = `SELECT * FROM users WHERE dataEmailAdd = ?`;
  console.log(req.body)
  let values = [
    req.body.dataEmailAdd,
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Authentication successful"
    })
  })
});

module.exports = router;