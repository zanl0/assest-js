
document.getElementById('numeroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let n = parseInt(document.getElementById('numero').value);
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    console.log("La suma de los números del 1 al " + n + " es: " + suma);
    document.getElementById('resultado').innerHTML = "La suma de los números del 1 al " + n + " es: " + suma;
});
