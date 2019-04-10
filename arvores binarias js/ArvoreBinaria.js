class Arvore{
    constructor(){
        this.indice = null;
        this.esquerda = null;
        this.direita = null;
    }

    inserir(numero){
        if (this.indice == null) {
            this.indice = numero;
        }else if (numero < this.indice) {
            if(this.esquerda == null){
                this.esquerda = new Arvore;
            }
            this.esquerda.inserir(numero);
        }else{
            if(this.direita == null){
                this.direita = new Arvore;
            }
            this.direita.inserir(numero);
        }
    }

    buscar(numero){
        if(this.indice == numero){
            return true;
        }else if (numero < this.indice) {
            if(this.esquerda == null){
                return false;
            }
            return this.esquerda.buscar(numero);
        }else{
            if(this.direita == null){
                return false;
            }
            return this.direita.buscar(numero);
        }
    }

    preOrdem(){
        if(this.indice != null){
            console.log(this.indice);
        }
        if (this.esquerda != null) {
            this.esquerda.preOrdem();
        }
        if (this.direita != null) {
            this.direita.preOrdem();
        }
    }

    emOrdem(){
        if (this.esquerda != null) {
            this.esquerda.emOrdem();
        }
        if (this.indice != null) {
            console.log(this.indice);
        }
        if(this.direita != null){
            this.direita.emOrdem();
        }   
    }

    posOrdem(){
        if (this.esquerda != null) {
            this.esquerda.posOrdem();
        }
        if(this.direita != null){
            this.direita.posOrdem();
        }
        if (this.indice != null) {
            console.log(this.indice);
        }  
    }

    removerSemFilhos(numero){
        if (this.indice == null) {
            return false;
        }

        if(this.esquerda != null){
            if(this.esquerda.indice == numero){
                this.esquerda = null;
                return true;
            }

            if (numero < this.esquerda.indice) {
                return this.esquerda.removerSemFilhos(numero);
            }
        }

        if (this.direita != null) {
            if (this.direita.indice == numero) {
                this.direita = null;
                return true;
            }

            if (numero >= this.direita.indice) {
                return this.direita.removerSemFilhos(numero);
            }
        }

        return false;
    }

    removerComUmFilho(numero){
        if (this.indice == null) {
            return false;
        }

        if (this.esquerda != null) {
            if(this.esquerda.indice == numero){
                this.esquerda = this.esquerda.retornaUmFilho();
                return true;
            }

            if(numero < this.esquerda.indice){
                return this.esquerda.removerComUmFilho(numero)
            }
        }

        if (this.direita != null) {
            if (this.direita.indice == numero) {
                this.direita = this.direita.retornaUmFilho();
                return true;
            }
            if(numero >= this.direita.indice){
                return this.direita.removerComUmFilho();
            }
        }
        return false;
    }

    retornaUmFilho(){
        if (this.esquerda != null) {
            return this.esquerda;            
        }else{
            return this.direita;
        }
    }
}



arvore = new Arvore;


arvore.inserir(2);
arvore.inserir(1);
arvore.inserir(3);
arvore.inserir(4);

// console.log(arvore);

// console.log("--------------------");

// console.log(arvore.buscar(4));

// console.log("--------------------");

// arvore.preOrdem(arvore);

// console.log("--------------------");

arvore.emOrdem(arvore);

// console.log("--------------------");

// arvore.posOrdem(arvore);

console.log("--------------------");

// console.log(arvore.removerSemFilhos(4));

console.log(arvore.removerComUmFilho(2));



console.log("--------------------");

arvore.emOrdem(arvore);

// console.log(arvore);


