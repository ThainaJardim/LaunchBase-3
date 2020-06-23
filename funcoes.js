const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: [ 'HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['JavaScript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologias: [ 'HTML', 'Node.js']
    }
]
function usuariosPrograma (programadores) {
    for (let i=0; i < programadores.length; i++)
    return programadores
}

const usuario1 = usuariosPrograma(usuarios)

console.log (`${usuarios[0].nome}, trabalha com ${usuarios[0].tecnologias}`)
console.log (`${usuarios[1].nome}, trabalha com ${usuarios[1].tecnologias}`)
console.log (`${usuarios[2].nome}, trabalha com ${usuarios[2].tecnologias}`)


