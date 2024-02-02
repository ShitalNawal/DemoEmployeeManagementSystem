module.exports = (sequelize, Sequelize) => {
  const EmployeeDetails = sequelize.define("employeeDetails", {
    empId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: true,
    },
    id:{
        type: Sequelize.UUID,
        allowNull: true,
        references:{
            model: "employees",
            key: "id"
        }

    },
    address: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    DOB: {
      type: Sequelize.DATE,
    },
    gender: {
      type: Sequelize.ENUM("male", "female", "prefer not to say"),
      allowNull: false,
    },
  });
  const Employee = require("./dummyUserModel")(sequelize, Sequelize);

  EmployeeDetails.belongsTo(Employee, {
    foreignKey: "id",
    onDelete: "CASCADE",
  });
  return EmployeeDetails;
};
