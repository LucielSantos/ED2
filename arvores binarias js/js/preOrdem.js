console.log("Pré-ordem Importado");

let botaoPreOrdem = document.querySelector("#preOrdem");
botaoPreOrdem.addEventListener("click", function(event){
    event.preventDefault();

    removerTodosElementos();

    addPreOrdem();    
});

function removerTodosElementos() {
    let matriculas = document.querySelectorAll("table tr");

    matriculas.forEach(function(matricula){
        matricula.classList.add("fadeOut");

        setTimeout(function(){
            matricula.remove();
        },500)
    })
}

function addPreOrdem() {
    let vet = [];

    vet = arvore.preOrdem(vet);

    setTimeout(function(){
        vet.forEach(function(matricula){
            addTabelaMatricula(matricula); //metodo em adicionar.js
        })
    }, 500);
}