module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Shital@123",
    DB: "Crud-Api",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };