const array = []

const ordenacao = {
    array: () =>{
        return array;
    },

    countSort: array => {
        let arrayAux = [];
    
        let cont = 0;
    
        let i, x;
    
        for (i = 0; i < array.length; i++) {
            arrayAux[i] = 0
        }
    
        for (i = 0; i < array.length; i++) {
            for (x = 0; x < array.length; x++) {
                if (array[x].cgu < array[i].cgu) {
                    cont++;
                }
            }
    
            if (array[i].cgu == arrayAux[cont].cgu) {
                for(let y = cont; y < array.length; y++){
                    if(array[i].cgu == arrayAux[y].cgu){
                        cont++;
                    }else{
                        break;
                    }
                }
            }
    
            arrayAux[cont].cgu = array[i].cgu;
            cont = 0;
        }
    
        return arrayAux;
    },

    addTabela: tabela =>{
        
    },

    addArray: elem => {
        array.push(elem);
    }
}
 