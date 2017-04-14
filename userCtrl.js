var users = require('./users.js')
var allUsers = users.find();

module.exports = {
  readAll : function(req, res){
    return allUsers;
  },

  findUserById : function(){
    console.log(users.findOne('id'));
    return users.findOne('id')
  },

  getAdmins : function(){
    var admins = [];
    for (var i = 0; i < allUsers.length; i++){
      if(allUsers[i].type === 'admin'){
        admins.push(allUsers[i]);
      };
    };
    return admins;
  },

  getNonAdmins : function(){
    var nonAdmins = [];
    for (var i = 0; i < allUsers.length; i++){
      if(allUsers[i].type === 'user'){
        nonAdmins.push(allUsers[i]);
      };
    };
    return nonAdmins;
  },

  createUser : function(req,res){
    return users.add();
  }




};



  // findUserById : function(){
  //   return users.findOne('id')
  // }
// };


  //
  // findUserById: users.findOne()
  //
  //
  //

  //
  // getNonAdmins: function(){
  //   var nonAdmins = [];
  //   for(var i = 0; i < users.length, i++){
  //     if(users[i].type === 'user'){
  //       nonAdmins.push(users[i]);
  //     }
  //   }
  //   return nonAdmins;
  // },
  //
  // getUserByFavorite
