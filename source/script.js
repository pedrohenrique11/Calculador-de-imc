
function showImc() {
    let resultado = document.getElementById('resultado')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')

    let valorPeso = Number(peso.value)
    let valorAltura = Number(altura.value)

    let imc = (valorPeso/(valorAltura*valorAltura));

    resultado.innerHTML = Number.parseInt(imc);
}
