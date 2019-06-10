const tabela = new Tabela;
const array = new ClassArray;

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
            verificaAluno(aluno) ? addAluno(aluno) : mostraMensagemAdd(campoMensagem);

        }else if(atributo == 'btnPesquisaSeq'){
            limpaMensagens(campoMensagem);
            verificaCgu(aluno) ?  pesquisaSequencial(campoMensagem, aluno) : mensagemPesquisa(campoMensagem);
           
            
        } else if(atributo == 'btnPesquisaBin'){
            limpaMensagens(campoMensagem);
            if (array.ordenado) {
                verificaCgu(aluno) ?  pesquisaBinaria(campoMensagem, aluno) : mensagemPesquisa(campoMensagem);
            }else{
                campoMensagem.textContent = 'É obrigatório a ordenação do vetor';
            }
            
        }
        else if(atributo == 'btnRemove'){
            let verif = array.remover(aluno);
            console.log(verif);
            
            if(verif){
                tabela.remover(aluno.cgu)
             }else{
                 mensagemRemover(campoMensagem);
             }
            
        }else if(atributo == 'btnOrdena'){
            limpaMensagens(campoMensagem);
            campoMensagem.textContent = 'Vetor Ordenado!';
            tabela.addArrayTabela(array.countSort());            
        }        
        form.reset();
        form.cgu.focus();
    }
});

function verificaAluno(aluno) {    
    if (isNaN(aluno.cgu) || aluno.nome == '') {
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

function mensagemRemover(campo) {
    campo.textContent = 'Este aluno não está contido na tabela';
}

function pesquisaSequencial(campoMensagem, aluno) {
    let resp = array.pesquisaSequencial(aluno.cgu);
    mostraMensagemPesquisa(resp, campoMensagem);
}
function pesquisaBinaria(campoMensagem, aluno) {
    let resp = array.pesquisaBinaria(aluno.cgu);
    mostraMensagemPesquisa(resp, campoMensagem);
}

function mensagemPesquisa(campoMensagem) {
    campoMensagem.textContent = 'Este CGU não é válido';
}

function addAluno(aluno) {
    array.add(aluno);
    tabela.addElemTabela(aluno);
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