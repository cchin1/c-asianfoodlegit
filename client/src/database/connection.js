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

//Starter code to create review model
/*
module.exports = sequelize.define("Review", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    content: Sequelize.STRING(300)
  });
*/

//Starter code to create reviewer model
/*
module.exports = sequelize.define("Reviewer", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true
  },
  passwd: {
    type: Sequelize.STRING(20),
    allowNull: false
  }
  });
*/

//Example actions for Sequelize using Node.js

//Create Item Table Structure
var Item = sequelize.define('Item', {
    id: Sequelize.STRING,
    name:Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.INTEGER
});
 
//Applying Item Table to database
sequelize.sync({force:true}).complete(function (err) {
 if(err){
    console.log('An error occur while creating table');
 }else{
    console.log('Item table created successfully');
 }
});

//There is two way of inserting data into database
//One way: Forming object from modal
var item1 = Item.build({
    id: 1,
    name:'Laptop',
    description: 'Acer 2340TL',
    qty: 23
});
//Inserting Data into database
item1.save().complete(function (err) {
 if (err) {
    console.log('Error in Inserting Record');
 } else {
    console.log('Data successfully inserted');
 }
});
 
//Other way: Immediate insertion of data into database
sequelize.sync().success(function () {
  Item.create({
     id: 2,
     name:'Cell Phone',
     description: 'Sony',
     qty: 20
  }).success(function (data) {
  console.log(data.values)
 })
});

//Reading All Data
Item.find({}).complete(function (err,data) {
    console.log(data);
});
//With where condition
    Item.find({where:{name:'Laptop'}}).complete(function (err, data) {
   console.log(data);
});

//Updating Laptop to Computer
Item.find({where:{name:'Laptop'}}).complete(function (err, data) {
    if(err){
      console.log(err);
    }
    if(data){
      data.updateAttributes({
      name:'Computer'
    }).success(function (data1) {
      console.log(data1);
    })
   }
  });

  //Delete All Computer Records
Item.find({where: {name: 'Computer'}}).complete(function (err, data) {
    if (err) {
       console.log(err);
    } else {
       data.destroy({}).success(function (err, data) {
    if(err){
       console.log(err);
    }else{
       console.log(data);
    }
   })
  }
  console.log(data);
 });

