let saldo = 3000;

const elementosaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementosaldo !=  null) {
    elementosaldo.textContent = saldo.toString();
}