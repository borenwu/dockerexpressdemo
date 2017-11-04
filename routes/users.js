var express = require('express');
var router = express.Router();
var User = require('../models/UserModel')

/* GET users listing. */
router.get('/', function (req, res, next) {
    User.find({}, function (err, users) {
        if (err) {
            console.log(handleError(err));
        }
        res.render('user', { users: users });
    });
});

router.post('/', function (req, res) {
    var name = req.body.name
    var age = parseInt(req.body.age)

    var newUser = User({
        name: name,
        age: age,
    });
    newUser.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            res.json(newUser)
        }
    });
})

module.exports = router;
