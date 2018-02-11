'use strict';

const userService = require('./user.service');
const httpStatusCodes = require('../shared/http-status-codes');

userService.connect();
const userModel = userService.userModel();

exports.getUsers = function (req, res) {
    userModel.find({}, (error, users) => {
        error ? res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send(error) : res.status(httpStatusCodes.OK).json(users);
    });
};

exports.addUser = function (req, res) {
    const user = new userModel({name: req.body.name, age: req.body.age});
    user.save((error) => {
        error ? res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send(error) : res.status(httpStatusCodes.CREATED).json({
            message: 'User Created'
        });
    });
};