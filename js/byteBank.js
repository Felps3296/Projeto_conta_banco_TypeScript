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
});

