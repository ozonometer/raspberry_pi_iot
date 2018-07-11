let helper = require('../config/helper.js');
let RecordModel = require('../model/RecordModel.js');

module.exports = function (server, Gpio) {
    let LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
    let toggle = false;
    let state = 0;
    server.get("/toggle", function(req, res, next) {
        toggle = !toggle;
        if (toggle === true) {
            state = 1;
        } else {
            state = 0;
        }
        LED.writeSync(state);
            helper.success(res, next, 'toggled '+ toggle);
    });

    server.get("/", function(req, res, next) {
        RecordModel.find({}, function (err, users){ //get all database records
            helper.success(res, next, users);
        });
    });

    // get user, example http://localhost:8081/records/3
    server.get("/record/:id", function(req, res, next) {
        req.assert('id', 'Id is required').notEmpty();
        let errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors[0], 400);
        }else {
            RecordModel.findOne({_id: req.params.id}, function (err, user){
                if (user === null) {
                    helper.failure(res, next, 'record with id ' + req.params.id + ' does not exists', 404 );
                } else {
                    helper.success(res, next, user);
                }
            });
        }
    });

    server.post("/record", function(req, res, next) {
        req.assert('open', 'Open status is required').notEmpty();
        req.assert('temperature', 'Temperature is required and must be a number').notEmpty();
        req.assert('message', 'Message is required and must be true').notEmpty();
        let errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, errors, 400);
        } else {
            let user = new RecordModel();
            user.open = req.params.open;
            user.temperature = req.params.temperature;
            user.message = req.params.message;
            user.save(function (err) {
                if (err) {
                    helper.failure(res, next, err, 500);
                } else {
                    helper.success(res, next, user);
                }
            });
        }

    });

//update
    server.put("/record/:id", function(req, res, next) {
        req.assert('id', 'id is required').notEmpty();
        let errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, 'record with id ' + req.params.id + ' does not exists', 404 );
        } else {
            RecordModel.findOne({_id: req.params.id}, function (err, user){
                if (user === null) {
                    helper.failure(res, next, 'Ups does not look good, something wrong happend!', 500 );
                } else {
                    let updates = req.params;
                    delete  updates.id;
                    for (let int in updates) {
                        user[int] = updates[int];
                    }
                    user.save(function (err) {
                        if (err) {
                            helper.failure(res, next, err, 500);
                        } else {
                            helper.success(res, next, user);
                        }
                    });
                }
            });
        }

    });

//delete
    server.del("/record/:id", function(req, res, next) {
        req.assert('id', 'id is required').notEmpty();
        let errors = req.validationErrors();
        if (errors){
            helper.failure(res, next, 'record with id ' + req.params.id + ' does not exists', 404 );
        } else {
            RecordModel.findOne({_id: req.params.id}, function (err, user) {
                if (user === null) {
                    helper.failure(res, next, 'Ups does not look good, something wrong happend!', 500);
                } else {
                    user.remove(function (err) {
                        if (err) {
                            helper.failure(res, next, err, 500);
                        } else {
                            helper.success(res, next, user);
                        }
                    });
                }
            });
        }
    });
};