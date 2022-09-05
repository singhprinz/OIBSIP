let CELCIUS = document.getElementById("celcius");
let FAHRENHEIT = document.getElementById("fahrenheit");

function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}
function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

