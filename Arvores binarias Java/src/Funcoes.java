public class Funcoes {

    public Arvore inserir(Arvore aux, int indice){
        if (aux == null){
            aux = new Arvore();
            aux.indice = indice;
        }else if(indice < aux.indice){
            aux.esquerda = inserir(aux.esquerda, indice);
        }else {
            aux.direita = inserir(aux.direita, indice);
        }
        return aux;
    }

    public Arvore buscar(Arvore aux, int indice){
        Arvore aux2 = null;

        if (aux == null){
            aux2 = aux;
        }else if(aux.indice == indice){
            aux2 = aux;
        }else if (indice < aux.indice){
            aux2 = buscar(aux.esquerda, indice);
        }else{
            aux2 = buscar(aux.direita, indice);
        }

        return aux2;
    }

}
