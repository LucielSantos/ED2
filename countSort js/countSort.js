var btnAdicionar = document.querySelector("#adicionar");

var array = [];

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("form");

    let mensagen = document.getElementById("mensagemAdd");

    let numero =document.getElementById("numero").value;

    if (numero != "") {
        numero = parseInt(numero);
        addDados(numero);
        mensagen.textContent = "Número Adicionado!";
    }else{
        mensagen.textContent = "Insira um número inteiro válido"
    }

    form.reset();
    form.focus();

})

function countSort(array) {
    let arrayAux = [];

    let cont = 0;

    let i, x;

    for (i = 0; i < array.length; i++) {
        arrayAux[i] = 0
    }

    for (i = 0; i < array.length; i++) {
        for (x = 0; x < array.length; x++) {
            if (array[x] < array[i]) {
                cont++;
            }
        }

        if (array[i] == arrayAux[cont]) {
            for(let y = cont; y < array.length; y++){
                if(array[i] == arrayAux[y]){
                    cont++;
                }else{
                    break;
                }
            }
        }

        arrayAux[cont] = array[i];
        cont = 0;
    }

    return arrayAux;
}


//insere os números no array
function addDados(numero) {
    array.push(numero);

    document.getElementById('arrayAtual').innerHTML += numero + ", ";
}

//ordena os dados do array
function ordenaDados() {
    let arrayArrumado = countSort(array);

    let printa = document.getElementById("printa");

    printa.innerHTML = "";

    for (i=0; i<arrayArrumado.length; i++) {
        printa.innerHTML += arrayArrumado[i] + ", ";
    }
}