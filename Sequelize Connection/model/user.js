const {Sequelize, DataTypes} = require("sequelize");

const userModel = (sequelize)=>{
    const {DataTypes} = Sequelize;

    return sequelize.define("userDetail",{
        userDetail:{
            type:DataTypes.STRING
        },
        fname:{
            type: DataTypes.STRING
        },
        Lname:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        },
        city:{
            type: DataTypes.STRING
        },
    })
}

module.exports = {
    userModel
}