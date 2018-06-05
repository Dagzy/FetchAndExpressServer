// var randomImage = document.querySelector('.random-image'); 
// console.log("randomImage:", randomImage);
// () => {}
// fetch('https://source.unsplash.com/random') 
// .then(function(response) {
//   if (!response.ok){ 
//     console.log(response);
//     return new Error(response); 
//   } 
//   console.log("Response:", response);
//   return response.blob(); 
// })
// .then(function(photoBlob) { 
//   console.log("My Blob:", photoBlob)
//   var objectURL = URL.createObjectURL(photoBlob); 
//   console.log("Object URL:", objectURL);
//   randomImage.src = objectURL; 
// document.readyState()

//   console.log("randomImage.src:", randomImage.src);
// })
// .catch(function(err) { 
//   console.log(err); 
// });
// console.log(this)


function callbackFunction(){
    const thatGuy = {
        name: "The Dude",
        occupation: "bowling",
        possessions: "awesome rug"

    }
    return thatGuy
}

function showGreeting(result){
    console.log(`${result.name} loves to go ${result.occupation}`)
}
showGreeting(callbackFunction())

const User = {
    getUrl: function(){
        return url
    },
    fetch: function(args){
        console.log(args)
    }
}
User.fetch('hi');



// Example POST method implementation:

postData('https://source.unsplash.com/random', {answer: 42})
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error));

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // *manual, follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}