class ClassArray{
    
    constructor(){
        this.array = [];
        this.ordenado = false;
    }

    

    countSort (){
        let arrayAux = [];
    
        let cont = 0;
    
        let i, x;
    
        for (i = 0; i < this.array.length; i++) {
            arrayAux[i] = {
                cgu: 0,
                nome: null
            }
        }
    
        for (i = 0; i < this.array.length; i++) {
            for (x = 0; x < this.array.length; x++) {
                if (this.array[x].cgu < this.array[i].cgu) {
                    cont++;
                }
            }
    
            if (this.array[i].cgu == arrayAux[cont].cgu) {
                for(let y = cont; y < this.array.length; y++){
                    if(this.array[i].cgu == arrayAux[y].cgu){
                        cont++;
                    }else{
                        break;
                    }
                }
            }
    
            arrayAux[cont] = this.array[i];
            cont = 0;
        }
    
        this.array = arrayAux;
        this.ordenado = true;
        return arrayAux;
    };

    add(elem) {
        this.array.push(elem);
        this.ordenado = false;
    };

    remover(elem){
        let index = this.verificaArray(elem);
        if (index > -1) {
            this.array.splice(index, 1);
            return true;
        }else{
            return false;
        }        
    }

    verificaArray(elem){
        let cont = -1;
        this.array.forEach((aluno, index) => {
            if (aluno.nome == elem.nome) {
                if (aluno.cgu == elem.cgu) {
                    cont =  index;
                }
            }
        });
        return cont;
    }

    pesquisaSequencial(cgu){
        let resp;

        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].cgu == cgu) {
                resp = this.array[i];
                break;
            }else{
                resp = false;
            }
        }
        return resp;
    }
    
    pesquisaBinaria(cgu){
        let fim = this.array.length - 1;
        let inicio = 0;
        let meio = 0;

        do {
            meio = Math.round((inicio + fim) / 2);

            if (this.array[meio].cgu == cgu) {
                return this.array[meio];

            }else if (cgu < this.array[meio].cgu) {
                fim = meio -1;
            }else if (cgu > this.array[meio].cgu) {
                inicio = meio + 1;
            }
            
        } while (inicio <= fim);

        return false;
    }
}
 
let classe = new ClassArray

classe.add({
    nome: 'luciel',
    cgu: 1
})
classe.add({
    nome: 'luciel',
    cgu: 2
})
classe.add({
    nome: 'luciel',
    cgu: 3
})
classe.add({
    nome: 'luciel',
    cgu: 4
})
classe.add({
    nome: 'luciel',
    cgu: 5
})
classe.add({
    nome: 'luciel',
    cgu: 6
})
classe.add({
    nome: 'luciel',
    cgu: 7
})
classe.add({
    nome: 'luciel',
    cgu: 8
})
classe.add({
    nome: 'luciel',
    cgu: 9
})
classe.add({
    nome: 'luciel',
    cgu: 10
})

console.log(classe);

console.log(classe.remover({
    nome: 'luciel',
    cgu: 6
}));

console.log(classe);