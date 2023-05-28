const frases = [
  "A vida é um constante recomeço.",
  "Nada é impossível para aquele que persiste.",
  "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
  "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
  "Imagine uma nova história para sua vida e acredite nela.",
  "A persistência é o caminho do êxito.",
  "Não espere por uma crise para descobrir o que é importante em sua vida.",
  "Acredite em milagres, mas não dependa deles.",
  "Não crie limites para si mesmo. Você deve ir tão longe quanto sua mente permitir.",
  "Você é do tamanho do seu sonho.",
  "Pra quem sonha alto, o céu é o limite.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "O que você pode fazer agora que tem o maior impacto sobre o seu sucesso?"
];

const frasesContainer = document.getElementById("frases-container");
const fraseElement = document.createElement("div");
fraseElement.classList.add("frase");
fraseElement.textContent = frases[Math.floor(Math.random() * frases.length)];
frasesContainer.appendChild(fraseElement);