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
            let resp = array.pesquisaSequencial(aluno.cgu);
            mostraMensagemPesquisa(resp, campoMensagem);
            
        } else if(atributo == 'btnPesquisaBin'){
            console.log(atributo);
        
        }
        else if(atributo == 'btnRemove'){
            console.log(atributo);
            
        }else if(atributo == 'btnOrdena'){
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