console.log("Remover Importado");

let botaoRemover = document.querySelector("#botaoRemover");
botaoRemover.addEventListener("click", function(event) {
    event.preventDefault();
    let form = document.querySelector("#formRemover");
    let numero = form.numero.value;

    let verif = arvore.remover(numero); 

    if (verif) {
        removerTabela(numero);
    }
    
    mensagemRemover(verif);


    form.reset();

});

function removerTabela(numero) {
    let matriculas = document.querySelectorAll("table tr");

    matriculas.forEach(function (matricula) {
        if (matricula.firstChild.textContent == numero) {
            matricula.classList.add("fadeOut");

            setTimeout(function(){
                matricula.remove();
            }, 500); 
        }
    })
}

function mensagemRemover(verif) {
    let mensagem = document.querySelector("#mensagemRemover");

    if (verif) {
        mensagem.textContent = "Nº de Matricula Removido";
    }else{
        mensagem.textContent = "Nº de Matícula não Encontrada";
        mensagem.classList.add("mesnagemErro");
    }
}