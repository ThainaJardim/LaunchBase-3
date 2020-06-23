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
//para(usuario de usuarios)
    for( usuario of usuarios) {
        //faça alguma coisa
        console.log (`${usuario.nome} trabalha com ${usuario.tecnologias.join (', ')}` )
    }
