// function btn(angka) {
//     var display = document.getElementById("data").value;
//     if(display == 0){
//         display = angka; 
//     } else{
//         display += angka;
//     }
//     document.getElementById("data").value = display;
// }

// function clearAll() {
//     document.getElementById("data").value = "0";
// }

// function clear(){
//     var tampil = document.getElementById("data");
//     exp.value = exp.value.substr(0,exp.value.length-1);
// }

var tampil = document.getElementById("data");

function btn(angka){
    tampil.value += angka;
}
function backspace(){
    tampil.value = tampil.value.substr(0,tampil.value.length-1);  
}
function clean(){
    tampil.value = "";
}
function equal() {
    tampil.value = eval(tampil.value);
}