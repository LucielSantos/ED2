console.log("Em-ordem Importado");

let botaoEmOrdem = document.querySelector("#emOrdem");
botaoEmOrdem.addEventListener("click", function(event){
    event.preventDefault();

    removerTodosElementos(); //mótodo em preOrdem.js

    addEmOrdem();
    
})

function addEmOrdem() {
    var vet = [];

    vet = arvore.emOrdem(vet);

    setTimeout(function(){
        vet.forEach(function(vet){
            addTabelaMatricula(vet); //metodo em adicionar.js
        });    
    }, 500);

    
}