console.log("Pos-ordem Importado");

let botaoPosOrdem = document.querySelector("#posOrdem");
botaoPosOrdem.addEventListener("click", function(event){
    event.preventDefault();

    removerTodosElementos();//motodo em preOrdem.js

    addPosOrdem();  

});

function addPosOrdem (){
    let vet = [];

    vet = arvore.posOrdem(vet);

    setTimeout(function(){
        vet.forEach(function(matricula){
            addTabelaMatricula(matricula);//metodo em aiciona.js
        });
    }, 500);

    
}