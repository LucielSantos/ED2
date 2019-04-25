var btnAdicionar = document.querySelector("#adicionar");
function countSort(array) {
    let arrayAux = [];

    let cont = 0;

    let i, x;

    for (i = 0; i < array.length; i++) {
        arrayAux[i] = 0        
    }

    for (i = 0; i < array.length;  i++) {
        for(x = 0; x < array.length;  x++){
            if (array[x] < array[i]) {
                cont++;
            }
        }

        if (array[i] == arrayAux[cont]) {
            cont++
        }
        
        arrayAux[cont] = array[i];
        cont = 0;
    }

    return arrayAux;   
    
}

var array = [5,6,4,2,9,1,7,5,6,9];

array = countSort(array);

console.log(array);
