function askName() {
    var name = prompt("what is you name")
    return name
}

function greeting(a) {
    alert(`Welcome back, ${a}.`)
}


function askTemp() {
    var user = Number(prompt("Do you want ot convert to Celciusn to Farenheit type c or Farenheit ot Celcius type f"))
    return user
}

function tempNumber() {
    var tempNumber = prompt("what is the temperature")
}


function celciusFarenheit() {
    if (word == "f") {
        var tempf = ((temp *9)/5 +32);
        alert (`${user}, ${temp} celsius is ${tempf} farenheit`);
     
     } else {
        var tempc = ((temp -32)*5 /9);
        alert (`${userName}, ${temp} fahrenheit is ${tempc} celsius`);
     
     }
}


var n = askName()

greeting(n)
askTemp()
tempNumber()
celciusFarenheit()
