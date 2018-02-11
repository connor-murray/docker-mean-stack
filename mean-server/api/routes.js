const userController = require('./user/user.controller');

module.exports = function (app) {
    app.route('/users').get(userController.getUsers);
    app.route('/user').post(userController.addUser);
};
