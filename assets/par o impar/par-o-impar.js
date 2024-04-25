
document.getElementById('paro').addEventListener('submit', function(e) {
    e.preventDefault();
    let imparopar = parseInt(document.getElementById('numeropsroimpar').value);
    
    function esParOImpar(paroimpar) {
        if (paroimpar % 2 === 0) {
            return "El número es par";
        } else {
            return "El número es impar";
        }
    }
    
    console.log(esParOImpar(imparopar)); 
    document.getElementById('resultado').innerHTML =esParOImpar(imparopar)
});
