const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const documentModel = sequelize.define("document", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    empId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
            model: "employees",
            key: "id"
        }
    },
    fileName: {
      type: Sequelize.STRING(255),
    },
    filePath: {
      type: Sequelize.STRING(255),
    },
  });
  const Employee = require("./dummyUserModel")(sequelize, Sequelize);

  documentModel.belongsTo(Employee, {
    foreignKey: "empId",
    onDelete: "CASCADE",
  });
  return documentModel;
};
