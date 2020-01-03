//Setting up the connection with mysql
//Including dependency

var Sequelize = require("sequelize");

//Setting up the config - note that Candice's password is currently included here 
var Sequelize = new Sequelize("asainfoodlegit", "root", "JS123$$$", {
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
    operatorsAliases: false
});

//Check connection status
sequelize.authenticate().complete(function (err) {
    if (err) {
       console.log('There is connection in ERROR');
    } else {
       console.log('Connection has been established successfully');
    }
   });

module.exports = sequelize;
global.sequelize = sequelize;
