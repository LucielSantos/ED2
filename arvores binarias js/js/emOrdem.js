console.log("Em-ordem Importado");

let botaoEmOrdem = document.querySelector("#emOrdem");
botaoEmOrdem.addEventListener("click", function(event){
    event.preventDefault();

    removerTodosElementos(); //mótodo em preOrdem.js

    addEmOrdem();
    
})

function addEmOrdem() {
    let vet = [];

    vet = arvore.emOrdem(vet);

    setTimeout(function(){
        vet.forEach(function(matricula){
            addTabelaMatricula(matricula); //metodo em adicionar.js
        });    
    }, 500);

    
}