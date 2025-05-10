export function sum (array) {
    let soma = 0;
    for (let numero of array){
        soma += numero;
    }
    return soma
}
export function sumOdds(array){
    let soma = 0;
    for (let numero of array){
        if (numero%2==1){
            soma += numero;
        }
    }
    return soma
}

export function product (array) {
    let multi = 1;
    for (let numero of array){
        multi *= numero;
    }
    return multi
}