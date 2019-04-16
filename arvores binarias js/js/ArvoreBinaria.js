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

    preOrdem(vet){
        if(this.indice != null){
            vet.push(this.indice);
        }
        if (this.esquerda != null) {
            this.esquerda.preOrdem(vet);
        }
        if (this.direita != null) {
            this.direita.preOrdem(vet);
        }
        return vet;
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

    posOrdem(vet){
        if (this.esquerda != null) {
            this.esquerda.posOrdem(vet);
        }
        if(this.direita != null){
            this.direita.posOrdem(vet);
        }
        if (this.indice != null) {
            vet.push(this.indice);
        } 
        return vet; 
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

        if (this.esquerda != null) {
            if (numero < this.indice) {
                let verif;
                verif = this.esquerda.remover(numero);
                if (this.esquerda.indice == null) {
                    this.esquerda = null;
                    return true;
                }
                return verif;
            }
        }

        if (this.direita != null) {
            if (numero > this.indice) {
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

    aninhamento(aux){
        if (this.indice != null) {
            aux = aux.concat("{"+this.indice);
        }
        if (this.esquerda != null) {
            aux = this.esquerda.aninhamento(aux);
        }
        if (this.direita != null) {
            aux = this.direita.aninhamento(aux);
        }

        aux = aux.concat("}");
        
        return aux;
    }

    concat(aux){
        var hello = "hello"
        aux.concat(hello)
        return aux
    }

}

// arvore = new Arvore;

// arvore.inserir(48);
// arvore.inserir(9);
// arvore.inserir(4);
// arvore.inserir(50);
// arvore.inserir(69);

// var vet = [];

// vet = arvore.emOrdem(vet);

// console.log(vet);

// console.log("--------------------");

// console.log(arvore);


// console.log(arvore.remover(5));

// console.log("--------------------");

// arvore.emOrdem(arvore);

// console.log(arvore);