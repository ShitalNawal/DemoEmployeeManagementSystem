const {Sequelize} = require("sequelize")

const userRole = (sequelize)=>{
    const {DataTypes} = Sequelize;

    return sequelize.define("UserRole",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Role:{
            type: DataTypes.STRING,   
        },
    })
}

module.exports = {
    userRole
}