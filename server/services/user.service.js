(function() {
   var db;

   function init(DB) {
      db = DB;

      return {
         login: login,
         register: register
      };
   }

   function login(email) {
      return db.User.findOne({
         'email': email
      }).then(function(user){
         return user;
      }).catch(function(err) {
         console.error(err);
      });
   }

   function register(params) {
      return login(params.email, params.password)
         .then(function(response) {
            if (!response) {
               return save(params);
            }
            return;
         });
   }

   function save(params) {
      return new db.User(params).save();
   }

   module.exports = init;
})();