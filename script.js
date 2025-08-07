const messages = [
  'Você está fazendo o seu melhor e isso já é incrível.',
  'Hoje é um ótimo dia para vencer.',
  'Seu esforço vai valer a pena.',
  'Você é mais forte do que pensa.'
];

const news = [
  { title: 'Cachorro é resgatado de enchente por vizinhos.', link: '#' },
  { title: 'Idosa de 82 anos aprende a andar de skate.', link: '#' },
  { title: 'Família planta 1.000 árvores em bairro urbano.', link: '#' }
];

let timer;

function randomMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('messageBox').textContent = msg;
}

function startMessages() {
  clearInterval(timer);
  randomMessage();
  const freq = Number(document.getElementById('frequency').value);
  timer = setInterval(randomMessage, freq);
}

document.getElementById('start').addEventListener('click', startMessages);

document.getElementById('sos').addEventListener('click', () => {
  const sequence = [
    'Respire fundo e conte até quatro.',
    'Você consegue superar qualquer desafio.',
    'Cada passo conta. Continue!'
  ];
  let i = 0;
  const box = document.getElementById('messageBox');
  box.textContent = sequence[i];
  const sosInterval = setInterval(() => {
    i++;
    if (i < sequence.length) {
      box.textContent = sequence[i];
    } else {
      clearInterval(sosInterval);
    }
  }, 3000);
});

const newsList = document.getElementById('newsList');
news.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.link;
  a.textContent = item.title;
  a.target = '_blank';
  li.appendChild(a);
  newsList.appendChild(li);
});
