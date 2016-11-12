(function() {
   var userService;

   function login(req, res){
      userService.login(req.body.email,
         req.body.password)
      .then(function(response) {
         if(response.password !== req.body.password) {
            res.status(403).end();
         } else {
            res.json(response);
            res.status(200).end();
         }
      }).catch(function (){
         console.error(err);
         res.status(403).end();
      });
   }

   function register(req, res) {
      userService.register(req.body).then(function() {
         res.status(200).end();
      }).catch(function(err) {
         console.error(err);
         res.status(403).end();
      });
   }

   function init(db){
      userService = require(__dirname + '/../services/user.service')(db);

      return {
         register: register,
         login: login
      };
   }

   module.exports = init;
})();