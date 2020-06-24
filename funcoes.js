const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for (let tecnologia of usuario.tecnologias) {      
    const encontreiTecnologiaCSS = tecnologia === 'CSS'
    if (encontreiTecnologiaCSS) { 
        return true;
        }
    }
    return false
}

for (let usuario of usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario); //toda vez que eu escrever esse código eu uso a função
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
  }
    
  

// 5 coisas que você precisa saber sobre funções (iniciante
//1. Escrever uma função/ criar a função - 20%
//2. Saber como enviar dados pra dentro da função -  20%
//3. Saber como enviar um dado para FORAA da função - 20%
//4. Saber utilizar a função / executar - 20%
//5. Saber como enviar os dados para dentro da função quando executar ela - 20%
//6. Saber como capturar o dado enviado de dentro para fora - 20%

// Curiosidade extra que você deveria estar sabendo sobre função (iniciante)
// Para que serve uma função?
// Para reutilizar um bloco de código
// Para eu não repetir o mesmo código
//Pq eu vou usar uma função?
// Para facilitar


// a função não precisa obrigartóriamente, receber ou retornar valores
