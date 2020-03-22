//DIFERENCIA DE AÑOS
export function obtener_diferencia_year(year){
    return new Date().getFullYear() - year;
}

//CALCULA EL TOTAL A PAGAR SEGUN LA MARCA
export function calcular_marca(marca){
    let incremento;
    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}
// CALCULA EL TIPO DE SEGURO
export function obtener_plan(plan){
    return (plan === 'basico') ? 1.20 :1.50;
}


//MUESTRA LA PRIMER LETRA MAYÜSCULA
export function primer_mayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}