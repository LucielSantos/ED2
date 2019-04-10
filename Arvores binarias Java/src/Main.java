import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        boolean sair = false;
        String resp;

        Arvore arvore = null;
        Arvore arvoreAux = null;

        Funcoes funcoes = new Funcoes();

        Scanner read = new Scanner(System.in);

        do {
            System.out.print("Arvore Binária(Inserção e Remoção):\n" +
                    "1- Inserir\n" +
                    "2- Buscar\n" +
                    "0- Sair\n" +
                    "Insira o comando: ");
            resp = read.next();

            switch (resp){
                case "1":
                    try {
                        System.out.print("Insira o indice a ser inserido: ");
                        arvore = funcoes.inserir(arvore, read.nextInt());
                        System.out.println("Indice Adicionado!");
                    }catch (Exception e){
                        read.next();
                        System.out.println("Por favor insira um número inteiro!");
                    }
                    break;

                case "2":
                    try {
                        System.out.print("Insira o indice a ser Buscado: ");
                        arvoreAux = funcoes.buscar(arvore, read.nextInt());

                        if (arvoreAux == null){
                            System.out.println("Indice não encontrado!");
                        }else{
                            System.out.println("Nó com indice: "+arvoreAux.indice);
                        }
                    }catch (Exception e){
                        read.next();
                        System.out.println("Por favor insira um número inteiro!");
                    }
                    break;

                case "0":
                    System.out.print("Você tem certeza que deseja sair do programa (s/n)? ");
                    if (read.next().equals("s")){
                        sair = true;
                    }
                    break;

                default:
                    System.out.println("Por favor, insira o comando correto!");
                    break;
            }

            System.out.println("-------------------------------");

        }while(!sair);

        System.out.println("VOCÊ SAIU DO PROGRAMA!");
    }
}