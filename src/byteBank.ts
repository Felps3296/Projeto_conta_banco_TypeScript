let saldo = 3000;

const elementosaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementosaldo !=  null) {
    elementosaldo.textContent = saldo.toString();
}

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", function () {
    event.preventDefault();

    if(!elementoFormulario.checkVisibility()){
        alert("Por favor, preencha todos os campos da transação!")
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == "Depósito") {
        saldo += valor;

    }else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento boleto") {
        saldo -= valor;

    }else {
        alert("Tipo de Transação é inválida!")
        return;
    }

    elementosaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    elementoFormulario.reset();
});


