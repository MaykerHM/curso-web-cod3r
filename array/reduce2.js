const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const desafio1 = (acumulador, atual) => {
    return acumulador && atual
}

console.log(alunos.map( e => e.bolsista).reduce(desafio1))

// Desafio 2: Algum aluno é bosista?
    
const desafio2 = (acumulador, atual) => {
    return acumulador || atual 
}

console.log(alunos.map( e => e.bolsista).reduce(desafio2))