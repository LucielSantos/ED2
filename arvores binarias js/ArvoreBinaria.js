class Arvore{
    constructor(){
        this.indice = null;
        this.esquerda = null;
        this.direita = null;
    }

    inserir(numero){
        if(numero == ""){
            return false;
        }
        if (this.indice == null) {
            this.indice = numero;
            return true;
        }else if (numero < this.indice) {
            if(this.esquerda == null){
                this.esquerda = new Arvore;
            }
            return this.esquerda.inserir(numero);
        }else{
            if(this.direita == null){
                this.direita = new Arvore;
            }
            return this.direita.inserir(numero);
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

    emOrdem(vet){
        if (this.esquerda != null) {
            this.esquerda.emOrdem(vet);
        }
        if (this.indice != null) {
            vet.push(this.indice);
        }
        if(this.direita != null){
            this.direita.emOrdem(vet);
        }
        return vet;   
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

    remover(numero){
        if (this.indice == null) {
            return false;
        }

        if (this.indice == numero) {
            if (this.esquerda == null && this.direita == null) {
                // sem filhos
                this.indice = null;
                return true;
            }
            if ((this.direita == null || this.esquerda == null) && !(this.direita == null && this.esquerda == null)) {
                // um filho
                if (this.direita != null) {
                    let aux = this.direita;
                    this.indice = aux.indice;
                    this.esquerda = aux.esquerda;
                    this.direita = aux.direita;
                }else{
                    let aux = this.esquerda;
                    this.indice = aux.indice;
                    this.esquerda = aux.esquerda;
                    this.direita = aux.direita;
                }
                return true;
            }else{
                // dois Filhos

                var aux = this.esquerda.buscaMaior();

                this.remover(aux);
                
                this.indice = aux;

                return true;
            }
        }

        if (this.esquerda != null || this.direita != null) {
            if (numero < this.indice) {
                this.esquerda.remover(numero);
                if (this.esquerda.indice == null) {
                    this.esquerda = null;
                    return true;
                }
            }else{
                let verif;
                verif = this.direita.remover(numero);
                if (this.direita.indice == null) {
                    this.direita = null;
                }

                return verif;
            }
        }
        return false;
    }

    buscaMaior(){
        if (this.direita != null) {
            return this.direita.buscaMaior();
        }else{
            return this.indice;
        }
    }

}

arvore = new Arvore;

arvore.inserir(2);
arvore.inserir(1);
arvore.inserir(5);
arvore.inserir(4);

// var vet = [];

// arvore.emOrdem(vet);

// console.log(vet);



// console.log("--------------------");

// console.log(arvore.remover(5));

// console.log("--------------------");

// arvore.emOrdem(arvore);

// console.log(arvore);