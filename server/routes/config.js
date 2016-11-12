function init(app, db) {
   var userController = require(__dirname + '/../controllers/user.controller')(db);

   app.post('/login', userController.login);
   app.post('/register', userController.register);
}

module.exports = init;