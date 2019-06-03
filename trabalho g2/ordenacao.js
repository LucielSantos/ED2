class ClassArray{
    
    constructor(){
        this.array = [];
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
        return arrayAux;
    };

    add(elem) {
        this.array.push(elem);
    };

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
}
 