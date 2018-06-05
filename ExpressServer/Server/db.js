var Sequelize = require('sequelize');
var sequelize = new Sequelize('plantaBase', 'postgres', 'Letmein1234!', {
    host : 'localhost',
    dialect : 'postgres',
    port: 5433
})
var Planty = sequelize.import('./models/plantModel')

sequelize.authenticate().then(
    function(){
        console.log('Successfully connected to plantaBase')
    },
    function(err){
        console.log(err) 
    }
)
module.exports = sequelize;