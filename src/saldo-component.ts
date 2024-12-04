let saldo: number = 3000;

const elementosaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementosaldo !=  null) {
    elementosaldo.textContent = formatarMoeda(saldo);
}

if(elementoDataAcesso != null) {

    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}