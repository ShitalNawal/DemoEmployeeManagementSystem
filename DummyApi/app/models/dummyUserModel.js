// 
module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      Fname: {
        type: Sequelize.STRING
      },
      Lname: {
        type: Sequelize.STRING
      },
      Salary: {
        type: Sequelize.INTEGER
      }
    });
  
    return Employee;
  };































  //const{Sequelize, DataTypes} = require("sequelize")

// const Employee = (sequelize)=>{
//     const{DataTypes} = Sequelize;

//     return sequelize.define("employee",{
//         id:{
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         Fname:{
//             type: DataTypes.STRING,
//         },
//         Lname: {
//             type: DataTypes.STRING,
//         },
//         Salary:{
//             type: DataTypes.INTEGER
//         }

//     })
// }