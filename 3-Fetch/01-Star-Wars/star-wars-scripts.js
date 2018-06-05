var starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.co/api/planets')
.then(function(response){
    return response.json()
})
.then(function(json){
    console.log(json)
    let people = json.results;

    // for ( p of people ) {
        let listItem = document.createElement('li')
        myVar = toString(myVar)
        let myVar = people[0]
    
        listItem.innerHTML = people[0];

        starWarsPeopleList.appendChild(listItem)
    // }

})
