class Pessoa{
    constructor(){
        this.nome = null;
    }

    setNome(nome){
        this.nome = nome;
    }

    imprimir(){
        console.log(this.nome);
        
    }
}

pessoa = new Pessoa;

pessoa.setNome("julio")

pessoa.imprimir()