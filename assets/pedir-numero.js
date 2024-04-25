document.getElementById('btnMostrarTabla').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numeroInput').value);
    mostrarTablaMultiplicar(numero);
});

function mostrarTablaMultiplicar(numero) {
    let tablaHTML = '<table>';
    let totalMultiplicaciones = 0;

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tablaHTML += `<tr><td>${numero} x    ${i}</td><td>=</td><td>${resultado}</td></tr>`;
        totalMultiplicaciones += resultado;
    }

    tablaHTML += '</table>';
    document.getElementById('tablaMultiplicar').innerHTML = tablaHTML;
    document.getElementById('totalMultiplicaciones').innerText = `Total: ${totalMultiplicaciones}`;
}
