document.getElementById('currencyForm').addEventListener('submit', function(event){
    event.preventDefault(); //Previne a atualização automática do navegador.

    //Função para obter os valores inseridos pelo usuário no select
    const valor = parseFloat(document.getElementById('amount').value); // Cria uma variável do valor inserido pelo usuário(que tal pode ser número quebrado Ex. 1,23).
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    //definir taxa de câmbio fixa com objetos.
    const exchangeRates = {
        USD: { BRL: 5.67, EUR: 0.92}, 
        BRL: { USD: 0.18, EUR: 0.16}, 
        EUR: { USD: 1.08, BRL: 6.15} //O último objeto não recebe a vírgula.
    };

    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda]

    }

    //Exibir resultado

    const conversao = document.getElementById('conversao');
    conversao.textContent = `resultado: ${valorConvertido}`; 

})