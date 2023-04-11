function calculo(){

let altura = document.getElementById('altura').value;

let peso = document.getElementById('peso').value;

let alturaAoQuadrado = (altura*altura).toFixed(2)

let resultadoFinal = (peso/alturaAoQuadrado).toFixed(2)

let classificacao = ''

if(resultadoFinal < 18.5){
classificacao = 'Abaixo do Peso'
}
else if(resultadoFinal < 25){
    classificacao = 'Peso Normal'
}
else if(resultadoFinal < 30){
    classificacao = 'Sobrepeso'
}
else if(resultadoFinal < 35){
    classificacao = 'Obsidade Grau I'
}
else if(resultadoFinal < 41){
    classificacao = 'Obsidade Grau II'
}
else{
    classificacao = 'Obsidade Grau III'
}

let span = document.getElementById('resultado').innerHTML = "IMC:"+resultadoFinal+ "(" +classificacao+")"

}