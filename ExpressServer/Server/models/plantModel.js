module.exports = function(sequelize, DataTypes){
    return sequelize.define('plant', {
        plant : DataTypes.STRING,
        watered : DataTypes.INTEGER
    })
}