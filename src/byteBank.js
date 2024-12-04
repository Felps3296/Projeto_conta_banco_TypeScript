var saldo = 3000;
var elementosaldo = document.querySelector(".saldo-valor .valor");
if (elementosaldo != null) {
    elementosaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function () {
    event.preventDefault();
    if (!elementoFormulario.checkVisibility()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é inválida!");
        return;
    }
    elementosaldo.textContent = saldo.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    elementoFormulario.reset();
});
