var router = require('express').Router();
var sequelize = require('../db');
var Plant = sequelize.import ('../models/plantModel.js')

router.post('/', function (req, res) {
    var plantName = req.body.plant;
    var waterTime = req.body.waties;
    
    Plant
        .create({plant: plantName, watered: waterTime})
        .then(function createSuccess(plant) {
                res.json({result: plant, message: "A plant was watered!"})
            }, function createError(err) {
                    res.send(500, err.message)
        })
})
// router.get('/', function(req, res){
//     res.send('blaggityblag')
    // Plant
    //     .findAll()
    //     .then(
    //         function findAllSuccess(data){
    //             res.json(data);
    //         },
    //         function findAllError(err){
    //             res.send(500, err.message)
    //         }
    //     )
// })
router.get('/', function (req, res) {
    res.send('GETTY request to the plantpage')
})
module.exports = router;