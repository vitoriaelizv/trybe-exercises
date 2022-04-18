let angulo1 = 40
let angulo2 = -20
let angulo3 = 60
let somaDosAngulos = angulo1 + angulo2 + angulo3
let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0

if (angulosPositivos) {
    if(somaDosAngulos === 180) {
    console.log(true)
    } else {
    console.log(false)
    };
} else {
    console.group('Erro: triângulo inválido')
}