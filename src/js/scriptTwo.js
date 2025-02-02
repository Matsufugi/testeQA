document.getElementById('calculate').addEventListener('click', function(){
    const valorMulta = document.getElementById('value').value;
    const dias = document.getElementById('dias').value;

    const totalPagar = valorMulta * dias;

    document.getElementById('text').innerHTML = ("O valor da multa para " + dias + " dias de atraso é: ")
    document.getElementById('total').innerHTML = ("R$" + totalPagar.toFixed(2))
})