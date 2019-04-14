console.log("fui importado");

var arvore = new Arvore;

console.log(arvore);

var botaoAdicionar = document.querySelector("#botaoAdiciona");
// botaoAdicionarsssssssssssrrrrrrrrrrrrrrrrrrrrrr.addEventListener("click", function(event){
//     event.preventDefault();

//     console.log("Apertado");
    
//     let form = document.querySelector("#formAdiciona");

//     console.log(form.indice.value);

//     console.log(arvore.inserir(form.indice.value));
    

    

//     console.log(arvore);
// });

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#formAdiciona");

    let matricula = form.matricula.value;

    let verif = arvore.inserir(matricula);

    mensagemAdiciona(verif);

    if (verif) {
        addTabelaMatricula(matricula);
    }

    console.log(arvore);

});


function mensagemAdiciona(verif) {
    let mesnagem = document.querySelector("#mensagemAdiciona");

    if (verif) {
        mesnagem.classList.remove("mensagemErro");
        mesnagem.textContent = "Número de Matrícula Adicionado";    
    }else{
        mesnagem.classList.add("mensagemErro");
        mesnagem.textContent = "Por Favor Preencha o Campo";
    }
}

function montaTr(matriucla){
    let tr = document.createElement("tr");
    
    tr.appendChild(montaTd(matriucla));

    return tr;
}

function montaTd(matricula){
    let td = document.createElement("td");

    td.textContent = matricula;

    return td;
}

function addTabelaMatricula(matriucla){
    let table = document.querySelector(".tabelaMatricula");

    table.appendChild(montaTr(matriucla));

}

