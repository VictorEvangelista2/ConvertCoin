document.getElementById('currencyForm').addEventListener('submit', function(event){
    event.preventDefault(); //Previne a atualização automática do navegador.

    //Função para obter os valores inseridos pelo usuário no select
    
    const valor = parseFloat(document.getElementById('amount').value); // Cria uma variável do valor inserido pelo usuário(que tal pode ser número quebrado Ex. 1,23).
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;


    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{

    }

})