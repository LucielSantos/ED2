console.log("Adicionar Importado");

var arvore = new Arvore;

let botaoAdicionar = document.querySelector("#botaoAdiciona");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#formAdiciona");

    let matricula = form.matricula.value;

    let verif = false;

    if (matricula == "") {
        mensagemAdiciona(verif);
        return "";
    }

    matricula = parseInt(matricula);

    verif = arvore.inserir(matricula);    

    mensagemAdiciona(verif);

    if (verif) {
        addTabelaMatricula(matricula);
    }

    form.reset();

});


function mensagemAdiciona(verif) {
    let mesnagem = document.querySelector("#mensagemAdiciona");

    if (verif) {
        mesnagem.classList.remove("mensagemErro");
        mesnagem.textContent = "Número de Matrícula Adicionado";    
    }else{
        mesnagem.classList.add("mensagemErro");
        mesnagem.textContent = "Por Favor Preencha o Campo Corretamente";
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