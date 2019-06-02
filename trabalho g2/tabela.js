class Tabela{
    constructor(){
        this.tabela = document.querySelector('table');
    }

    addElemTabela(elem){

        this.tabela.appendChild(this.criaTr(elem))
    }

    addArrayTabela(array){
        let conteudo = document.querySelectorAll(".td");
        conteudo.forEach(elem => {
            elem.parentNode.removeChild(elem);
        })
        

        array.forEach(elem => {
            this.tabela.appendChild(this.criaTr(elem));
        });
    }

    criaTr(elem){
        let tdCgu = document.createElement('td');
        let tdNome = document.createElement('td');
        let tr = document.createElement('tr');

        tdCgu.textContent = elem.cgu;
        tdNome.textContent = elem.nome;
        
        tr.appendChild(tdCgu);
        tr.appendChild(tdNome);
        tr.classList.add('td')

        return tr;
    }
}