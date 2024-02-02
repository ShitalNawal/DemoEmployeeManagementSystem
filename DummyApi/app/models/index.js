const dbConfig = require("../config/db.config")

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
// try{
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully")
// }catch(error){
// console.error("Unable to connect database",error)
// }

const db = {};
db.employee = require("./dummyUserModel")(sequelize, Sequelize);
db.employeeDetails = require("./employeeDetailsModel")(sequelize, Sequelize);
db.document = require("./documentModel")(sequelize, Sequelize);

// Establish associations
//db.employee.hasMany(db.employeeDetails, { foreignKey: 'id' });
//db.employee.hasOne(db.document, { foreignKey: 'id' });
//db.document.belongsTo(db.employeeDetails, { foreignKey: 'empId' });
//db.employeeDetails.hasMany(db.document, { foreignKey: 'empId' });
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;