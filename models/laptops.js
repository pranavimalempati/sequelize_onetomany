const Sequelize = require('sequelize');
const sequelize = require('../database');
const laptops =sequelize.define('Laptops', {
    lap_id:{
        primaryKey:true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
    },
    brand:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    amount:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true,
    timestamps:false,
})



module.exports = laptops