const { Sequelize } = require ("sequelize");
const { userModel } = require("../model/user.js");
const {userRole} = require("../model/userRole.js")

const connection = async()=>{
    const sequelize = new Sequelize('Crud-Api', 'postgres', 'Shital@123', {
        host:'localhost', 
        dialect: "postgres"
      });
      let userDetail = null;
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
       //userDetail = userModel(sequelize);
       await sequelize.sync();
      //   console.log('Table created \ successfully.');
     // userDetail = userRole(sequelize);
     // await sequelize.sync();
       //console.log('Table created \ successfully.');

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports={
    connection
}