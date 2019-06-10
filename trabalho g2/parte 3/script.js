const tabela = new Tabela;
const array = new Hash;

document.querySelectorAll('.btnNav').forEach(btn => {
    btn.onclick = function (event){
        event.preventDefault();

        let form = document.querySelector('form');
        let atributo = btn.getAttribute('id');
        let campoMensagem = document.querySelector('#mensagens');
        
        let aluno = {
            cgu: parseInt(form.cgu.value),
            nome: form.nome.value
        }
        
        if (atributo == 'btnAdiciona') {
            limpaMensagens(campoMensagem);
            !verificaAluno(aluno) ? mostraMensagemAdd(campoMensagem) : addAluno(aluno, campoMensagem);

        }else if(atributo == 'btnPesquisa'){
            limpaMensagens(campoMensagem);
            verificaCgu(aluno) ?  pesquisa(campoMensagem, aluno) : mensagemPesquisa(campoMensagem);
           
        }else if(atributo == 'btnRemove'){
            limpaMensagens(campoMensagem);
            let verif = array.remover(aluno);
            
            if(verif){
                tabela.remover(aluno.cgu)
             }

            mensagemRemover(campoMensagem, verif);
        }
              
        form.reset();
        form.cgu.focus();
    }
});

function comfirmacaoAdiciona(campo, verif) {
    verif ? campo.textContent = 'Aluno Adicionado' : campo.textContent = 'Não foi possivel adicionar (Listas cheias ou luno já existe)'
}

function log() {
    console.log(array.arrayFim);
    console.log(array.arrayMeio);
    console.log(array.arrayInicio);
}

function verificaAluno(aluno) {   
    ultima = aluno.cgu.toString().substring(8, 9);
    if (isNaN(aluno.cgu) || aluno.nome == '' || ultima == '') {
        return false;
    }else{
        return true;
    }
}

function verificaCgu(aluno) {
    if (isNaN(aluno.cgu) || aluno.cgu <= 0) {
        return false;
    }else{
        return true;
    }
}

function mensagemRemover(campo, verif) {
    if (verif) {
        campo.textContent = 'Aluno Removido'
    }else{
        campo.textContent = 'Este aluno não está contido na tabela';
    }
}

function pesquisa(campoMensagem, aluno) {
    let resp = array.pesquisa(aluno.cgu);
    mostraMensagemPesquisa(resp, campoMensagem);
}
function mensagemPesquisa(campoMensagem) {
    campoMensagem.textContent = 'Este CGU não é válido';
}

function addAluno(aluno, campo) {
    let verif = array.adicionar(aluno);
    if(verif){
        tabela.addElemTabela(aluno);
        comfirmacaoAdiciona(campo, verif);
    }else{
        comfirmacaoAdiciona(campo, verif);
    }
}


function mostraMensagemPesquisa(resp, campo) {
    campo.textContent = '';

    if (resp != false && resp != undefined) {
        campo.textContent = `O aluno ${resp.nome} está na lista`;
    }else{
        campo.textContent = `Este CGU não está contido na tabela`;
    }
}

function mostraMensagemAdd(campo) {
    campo.innerHTML = '';
    campo.textContent = 'Preencha os campos corretamente.';
}

function limpaMensagens(campo) {
    campo.innerHTML = '';
}