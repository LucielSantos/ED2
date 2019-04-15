console.log("Aninhmaneto Importado");

let botaoAninhmaento = document.querySelector("#btnAninhmaneto");
botaoAninhmaento.addEventListener("click", function(event){
    event.preventDefault();

    let mensagem = document.querySelector("#mostraAninhamento");
    
    if (arvore.indice != null) {
        mensagem.textContent = arvore.aninhamento("");
    }else{
        mensagem.textContent = "Arvore Vazia";
    }
})
