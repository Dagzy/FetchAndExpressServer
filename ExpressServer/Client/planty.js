var baseUrl = "https://localhost:3000/"
var plantList = document.getElementById('plantList')
console.log(plantList)
fetch(baseUrl)
.then(function(result){
    console.log(result)
})