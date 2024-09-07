const perguntas = [
    {
      pergunta: "O que é uma 'closure' em JavaScript?",
      respostas: [
        "Uma função que retorna outra função",
        "Uma função que lembra seu escopo lexical",
        "Um loop que nunca termina"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 'typeof NaN' em JavaScript?",
      respostas: [
        "number",
        "NaN",
        "undefined"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "'==' compara valores e '===' compara valores e tipos",
        "'===' é uma comparação matemática e '==' não é",
        "Não há diferença, ambos são iguais"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'Array.prototype.map()' faz?",
      respostas: [
        "Modifica o array original",
        "Cria um novo array com os resultados de uma função aplicada a cada elemento",
        "Filtra elementos do array com base em uma condição"
      ],
      correta: 2
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var, let, const",
        "var, int, const",
        "let, const, int"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o valor de 'null' em JavaScript?",
      respostas: [
        "Um número",
        "Um objeto",
        "Uma string"
      ],
      correta: 2
    },
    {
      pergunta: "O que significa 'hoisting' em JavaScript?",
      respostas: [
        "Mover declarações de variáveis e funções para o topo do escopo",
        "Declarar variáveis com 'var'",
        "Evitar a execução de funções"
      ],
      correta: 1
    },
    {
      pergunta: "O que é um 'Promise' em JavaScript?",
      respostas: [
        "Uma função que retorna um valor imediatamente",
        "Um objeto que representa a eventual conclusão ou falha de uma operação assíncrona",
        "Um método para iterar sobre arrays"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o propósito do método 'bind()' em JavaScript?",
      respostas: [
        "Mesclar dois arrays",
        "Ligar um evento a um elemento DOM",
        "Criar uma nova função com um valor específico de 'this'"
      ],
      correta: 3
    },
    {
      pergunta: "O que o operador '...' (spread) faz em JavaScript?",
      respostas: [
        "Cria um novo objeto ou array com base em um existente",
        "Destrói um objeto ou array",
        "Executa uma função em todos os elementos de um array"
      ],
      correta: 1
    }
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou repetição
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value =item.respostas.indexOf(resposta)
  
    dt.querySelector('input').onchange = (event)=> {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
  }