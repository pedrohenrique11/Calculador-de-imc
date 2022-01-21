var name = document.getElementById('name');


var resultado = document.getElementById('resultado')

function showImc() {
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')

    var valorPeso = Number(peso.value)
    var valorAltura = Number(altura.value)

    var imc = (valorPeso/(valorAltura*valorAltura))*1000;

    resultado.innerHTML = Number.parseInt(imc);
    
}
