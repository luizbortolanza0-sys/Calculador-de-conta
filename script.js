const botao = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', calcularTudo);

const calcularValor = (valorTotal, percentualGorjeta, pessoas) => (valorTotal + (valorTotal*percentualGorjeta))/pessoas;


function verValidade(valorTotal, percentualGorjeta, pessoas){
    if(valorTotal<=0 || percentualGorjeta <0 || pessoas<=0){
        resultado.innerHTML = `<p id = "frase">Valor invalido! Digite numeros positivos.</p>`;
        return false;
    }
    return true;
}

function calcularTudo(){
    
    const valorTotal = parseFloat(document.getElementById('valor').value);
    const percentualGorjeta = parseFloat((document.getElementById('gorjeta').value)/100);
    const pessoas = parseInt(document.getElementById('pessoas').value);

    if(verValidade(valorTotal, percentualGorjeta, pessoas)){
        let aux = "R$"+ calcularValor(valorTotal, percentualGorjeta, pessoas).toFixed(2);
        resultado.innerHTML = `<p id = "frase">Valor por pessoa é ${aux}</p>`;
    }
}