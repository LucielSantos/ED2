console.log('script Importado');



document.querySelectorAll('.btnNav').forEach(btn => {
    btn.onclick = function (event){
        event.preventDefault();

        let form = document.querySelector('form');

        let aluno = {
            cgu: form.cgu.value,
            nome: form.nome.value
        }

        ordenacao.addArray(aluno);

        console.log(ordenacao.array());
        

        let atributo = btn.getAttribute('id');

        if (atributo == 'btnAdiciona') {
             
        }
             
    }
});



console.log(ordenacao.countSort([5,6,1,3,8,2,6,69,4,]));