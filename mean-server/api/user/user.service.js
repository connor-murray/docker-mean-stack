'use strict';

const mongoose = require('mongoose');
const userSchema = createUserSchema();

exports.connect = function () {
    mongoose.connect('mongodb://database/mean-docker');
};

exports.userModel = function () {
    return mongoose.model('User', userSchema);
};

function createUserSchema() {
    return new mongoose.Schema({name: String, age: Number});
}