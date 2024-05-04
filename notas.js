document.getElementById("descuentos-form").addEventListener('submit', function(e){
    e.preventDefault();
    
    // Obtener el valor del campo numerodescuento como un número entero
    let numerodescuento = parseInt(document.getElementById('numerodescuento').value);
    
    // Validar el valor del promedio y calcular el descuento
    let matriculaBase = 1000000; // Valor base de la matrícula
    let descuento = 0; // Inicializar el descuento como 0 por defecto
    
    if (numerodescuento < 3) {
        // No se aplica descuento
        descuento = 0;
    } else if (numerodescuento >= 3 && numerodescuento <= 4) {
        // Se aplica un descuento del 5%
        descuento = matriculaBase * 0.05;
    } else if (numerodescuento > 4) {
        // Se aplica un descuento del 50%
        descuento = matriculaBase * 0.5;
    }
    
    // Calcular el valor final de la matrícula después del descuento
    let matriculaFinal = matriculaBase - descuento;
    
    // Mostrar el resultado en algún lugar de la página HTML
    document.getElementById('resultado').innerText = "El valor de la matrícula a pagar es: $" + matriculaFinal.toLocaleString(); // Formatear el resultado como dinero
});
