function formatarMoeda(valor: number): string {

    return valor.toLocaleString("pt-br", {style: "currency", currency: "BRL" });
}

function formatarData(data: Date): string {

    return data.toLocaleString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })
}