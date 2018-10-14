var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String,
    email: String,
    rank: String,
    countryServed: String,
    trade: String,
    lengthOfService: String
   });

var UserData = mongoose.model("UserData", nameSchema);

router.post('/addUserData', function(req, res, next) {
    var myData = new UserData(req.body);
     myData.save()
     .then(item => {
     res.send("item saved to database");
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
});
      
module.exports = router;