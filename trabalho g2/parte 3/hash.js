class Hash{
    
    constructor(){
        this.arrayFim = [];
        this.arrayMeio = [];
        this.arrayInicio = [];
        this.mod = 10;
    }

    adicionar(elem) {
        let hash = this.calculaHash(parseInt(elem.cgu.toString().substring(6,9)));
        
        if (!this.verificaArray(this.arrayFim, hash)){
            this.arrayFim[hash] = elem;
            return true
        }
        hash = this.calculaHash(parseInt(elem.cgu.toString().substring(3,6)));

        if (!this.verificaArray(this.arrayMeio, hash)) {
            this.arrayMeio[hash] = elem;
            return true;
        }
        hash = this.calculaHash(parseInt(elem.cgu.toString().substring(0,3)));

        if (!this.verificaArray(this.arrayInicio, hash)) {
            this.arrayInicio[hash] = elem;
            return true;
        }else{
            return false;
        }
    }

    calculaHash(num){
        return num%this.mod;
    }

    verificaArray(array, hash){
        if (array[hash] == undefined) {
            return false;
        }else{
            return true;
        }
    }

    pesquisa(elem){
        let hash = this.calculaHash(parseInt(elem.toString().substring(6,9)));
        
        if (this.verificaArray(this.arrayFim, hash)){
            if (this.arrayFim[hash].cgu == elem) {
                return this.arrayFim[hash];
            }
        }
        hash = this.calculaHash(parseInt(elem.toString().substring(3,6)));

        if (this.verificaArray(this.arrayMeio, hash)) {
            if (this.arrayMeio[hash].cgu == elem) {
                return this.arrayMeio[hash];
            }
        }
        hash = this.calculaHash(parseInt(elem.toString().substring(0,3)));

        if (this.verificaArray(this.arrayInicio, hash)) {
            if (this.arrayInicio[hash].cgu == elem) {
                return this.arrayInicio[hash];
            }
        }else{
            return false;
        }
    }

    remover(elem){
        let hash = this.calculaHash(parseInt(elem.cgu.toString().substring(6,9)));
        
        if (this.verificaArray(this.arrayFim, hash)){
            if (this.arrayFim[hash].cgu == elem.cgu  && this.arrayFim[hash].nome == elem.nome) {
                this.arrayFim[hash] == undefined;
                return true;
            }
        }
        hash = this.calculaHash(parseInt(elem.cgu.toString().substring(3,6)));

        if (this.verificaArray(this.arrayMeio, hash)) {
            if (this.arrayMeio[hash].cgu == elem.cgu  && this.arrayMeio[hash].nome == elem.nome) {
                this.arrayMeio[hash] == undefined;
                return true;            
            }
        }
        hash = this.calculaHash(parseInt(elem.cgu.toString().substring(0,3)));

        if (this.verificaArray(this.arrayInicio, hash)) {
            if (this.arrayMeio[hash].cgu == elem.cgu  && this.arrayMeio[hash].nome == elem.nome) {
                this.arrayInicio[hash] == undefined;
                return true;
            }
        }else{
            return false;
        }
    }
}
 
// let classe = new Hash

// classe.adicionar({
//     nome: 'luciel',
//     cgu: 126061310
// })
// classe.adicionar({
//     nome: 'karine',
//     cgu: 126195810
// })
// console.log(classe.adicionar({
//     nome: 'jorge ',
//     cgu: 123456780
// }))
// console.log(classe.adicionar({
//     nome: 'joao ',
//     cgu: 123456770
// }))


// console.log(classe.arrayFim);
// console.log(classe.arrayMeio);
// console.log(classe.arrayInicio);
