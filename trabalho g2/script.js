const tabela = new Tabela;
const array = new ClassArray;

document.querySelectorAll('.btnNav').forEach(btn => {
    btn.onclick = function (event){
        event.preventDefault();

        let form = document.querySelector('form');

        let aluno = {
            cgu: parseInt(form.cgu.value),
            nome: form.nome.value
        }
        
        let atributo = btn.getAttribute('id');
        
        if (atributo == 'btnAdiciona') {
          verificaAluno(aluno) ? addAluno(aluno) : mostraMensagem(atributo, aluno) ;

        }else if(atributo == 'btnPesquisa'){
            console.log(atributo);
            
        }else if(atributo == 'btnRemove'){
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

function mostraMensagem(atributo) {
    let campo = document.querySelector('#mensagens');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    campo.innerHTML = ''

    if (atributo == 'btnAdiciona') {
        li.textContent = 'Preencha os campos corretamente';
        ul.appendChild(li);
    }
    campo.appendChild(ul);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

function deixarVermelho() {
    let um = document.querySelector('.um')
    let dois = document.querySelector('.dois')

    let tempo = 5000;

    setTimeout(function(){
        um.classList.add('bordaVermelha');
        sleep(2000)
        setTimeout(function(){
            dois.classList.add('bordaVermelha');
        })
    }, tempo)
}