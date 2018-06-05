var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var sequelize = require('./db')
var Plant = sequelize.import ('./models/plantModel.js')

Plant.sync()
sequelize.sync()
app.use(bodyParser.json())
app.use(require('./middleware/headers'));

app.get('/', function (req, res) {
    res.json({plants: ['georgia', 'cassiopeia', 'angel', 'jack', 'george']})

})
app.post('/', function (req, res) {
    const nome = req.body.name
    console.log(nome)
    if(nome === 'rabies'){
        console.log('fired')
        res.send({word:nome})
    }else{
        res.send({jazle:'jaz'})
    }
})

// app.use(require('./middleware/validate-session'));

app.use('/plant', require('./routes/plant'));
app.use('/api/test', function (req, res) {     res.send('API Running') })
app.listen(3001, function () {
    console.log('App is listening on 3000!~')
})