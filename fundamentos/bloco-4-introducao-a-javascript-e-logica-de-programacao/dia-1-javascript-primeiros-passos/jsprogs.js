
const custo = 9
const valorVenda = 13

if (custo >= 0 && valorVenda >= 0) {
  const totalCusto = custo * 1.2
  const totalLucro = (valorVenda - totalCusto) * 1000
  console.log(totalLucro)
} else {
  console.log("Error: os valores não podem ser negativos")
}