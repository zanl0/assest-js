document.getElementById("descuentos-form").addEventListener('submit', function(e){
e.preventDefault();
let numerodescuento1 =parseFloat(document.getElementById('numerodescuento').value );

let matriculaBase = 1000000; // Valor base de la matrícula
let descuento = 0;

if(numerodescuento1 <= 3){
    descuento=0;

}else if ( numerodescuento1 >=3.1 && numerodescuento1 <=4 ){
    descuento = matriculaBase * 0.05;

}else if (numerodescuento1 > 4){
    descuento = matriculaBase * 0.5;
}
let matriculaFinal= matriculaBase -descuento;

document.getElementById('resultado').innerHTML= "valor a pagar de matricula es: $" + matriculaFinal

}) 

