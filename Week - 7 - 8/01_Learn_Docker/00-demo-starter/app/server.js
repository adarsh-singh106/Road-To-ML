let express = require('express');
let path = require('path');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');

let app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 🔥 Serve public folder
app.use(express.static(path.join(__dirname, 'public')));


// Mongo config
let mongoUrlLocal = process.env.MONGO_URL;
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
let databaseName = "demo-mongo";


// UPDATE PROFILE
app.post('/update-profile', function (req, res) {

  let userObj = req.body;

  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);

    userObj['userid'] = 1;

    db.collection("users").updateOne(
      { userid: 1 },
      { $set: userObj },
      { upsert: true },
      function(err) {
        if (err) throw err;
        client.close();
      }
    );
  });

  res.send(userObj);
});


// GET PROFILE
app.get('/get-profile', function (req, res) {

  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);

    db.collection("users").findOne({ userid: 1 }, function (err, result) {
      if (err) throw err;

      client.close();
      res.send(result || {});
    });
  });
});


// START SERVER
app.listen(3000, '0.0.0.0', function () {
  console.log("Server running on http://localhost:3000");
});