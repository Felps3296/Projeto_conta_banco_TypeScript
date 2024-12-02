let saldo = 3000;

const elementosaldo = document.querySelector(".saldo-valor .valor");
elementosaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function () {
    event.preventDefault();

    if(!elementoFormulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação!")
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento boleto") {
        saldo -= valor;
    }else {
        alert("Tipo de Transação é inválida!")
        return;
    }

    elementosaldo.textContent = saldo;

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    elementoFormulario.reset();
});


