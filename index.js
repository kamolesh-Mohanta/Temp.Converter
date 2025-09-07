let celsius = document.getElementById("input1");
let fahrenheit =  document.getElementById("input2");

function message(){

    let output = (parseFloat(celsius.value) * 9/5)+32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    
}
function functionMsg(){
    let output = (parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value = parseFloat(output.toFixed(2));
    
}