const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//Minha tentativa
// axios.get(url).then(response => {
//     const funcionarios = response.data
//     let menor
//     funcionarios.map((e) => {
//         if(e.pais === 'China' && e.genero === 'F') {
//             if(menor > e.salario) {
//                 menor = e.salario
//             } else if(menor == undefined) {
//                 menor = e.salario
//             }
//         }
//     })
//     console.log(menor)
// })

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})