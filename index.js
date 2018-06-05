////Callback Example
function callbackFunction() {
    const karateDude = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'kickboxing',
        movies: {
            first: "kk1"
        }
    }
    return karateDude;
}
callbackFunction()
// A callback function is a function passed into another function as an
// argument, which is then invoked inside the outer function to complete some
// kind of routine or action.
function showGreeting(result) {
    return "hello " + result.name + ", I hear you're the greatest?!"
};
console.log(showGreeting(callbackFunction()))




var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
  
    if (true) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });
