const {Sequelize}= require('sequelize')
const sequelize = require('../database');
const laptops = require('./laptops');
const student =sequelize.define('Students', {
    id:{
        primaryKey:true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
    },
    name:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName:true,
    timestamps:false,
});
student.hasMany(laptops,{
     foreignKey:"StudtId"
    });
laptops.belongsTo(student,{
    foreignKey:"StudtId",allowNull:false
});





module.exports = student