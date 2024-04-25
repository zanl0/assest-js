
document.getElementById('btnValidar').addEventListener('click', function() {
    const edad = parseInt(document.getElementById('edadInput').value);
    const genero = document.getElementById('generoSelect').value;
    const resultado = validarPremio(edad, genero);
    
    function validarPremio(edad, genero) {
        if (edad <= 10) {
            return " Jugo";
        } else if (edad >= 18) {
            if (genero === "mujer") {
                return " Cerveza + Porción de pizza Hawaiana";
            } else if (genero === "hombre") {
                return " Cerveza + Porción de pizza tres carnes";
            } else {
                return "Desafortunadamente, no recibe ningún premio.";
            }
        } else {
            return "Desafortunadamente, no recibe ningún premio.";
        }
    }
    document.getElementById('resultadoPremio').innerHTML = resultado;
    


    
});
