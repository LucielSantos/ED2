console.log("Buscar Importado");

let botaoBuscar = document.querySelector("#botaoBuscar");
botaoBuscar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#formBusca");

    let matricula = form.numero.value;

    mensagemBuscar(arvore.buscar(matricula));

    form.reset();        
});

function mensagemBuscar(verif) {
    let mensagem = document.querySelector("#mensagemBuscar");
    if (verif) {
        mensagem.textContent = "Número de Matricula Encontrado na Tabela";
    }else{
        mensagem.textContent = "Número de Matricula não Encontrado na Tabela";
    }
}