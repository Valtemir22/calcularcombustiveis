//alert('JS carregado');

//console.log('JS carregado!');

function calcularCombustivel(){
    //alert('funçao acionada');

//Seleção de DOM
var etanol= document.querySelector('#etanol');
var gasolina= document.querySelector('#gasolina');
var areaResult= document.querySelector('#result');
//console.log(etanol.value);
//console.log(gasolina.value);


//verificar se os valores são diferentes de vazio
if(etanol.value != '' &&gasolina.value != ""){
    areaResult.style.display = 'block';

//executar calculo
var resultado = etanol.value/gasolina.value;

//console.log(resultado.toFixed(2));
if(resultado<= 0.7){
    areaResult.innerHTML = ' <span>Abasteça com: <br> <strong>etanol</strong></span>';
    //alert('Abasteça com etanol');
    }else{
      //  alert('Abasteça com gasolina');
      areaResult.innerHTML = ' <span>Abasteça com: <br> <strong>Gasolina</strong></span>';
    }
}else{
    alert('Preencha todos os campos!');
}

}

