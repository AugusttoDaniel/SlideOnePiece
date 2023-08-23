// Objeto com descrições
const personagens = {
  luffy: {
    fundo: "luffy.png",
    img: "luffy.png",
    titulo: "Monkey D.",
    subtitulo: "Luffy",
    texto:
      "O sonho de Luffy é se tornar o Rei dos Piratas encontrando o lendário tesouro conhecido como One Piece. Ele deseja superar todos os desafios e se tornar o pirata mais forte e respeitado, enquanto reúne amigos leais ao longo do caminho..",
    jolly: "luffy.png",
  },
  zoro: {
    fundo: "zoro.png",
    img: "zoro.png",
    titulo: "Roronoa",
    subtitulo: "Zoro",
    texto:
      "Zoro é um espadachim habilidoso e o combatente mais forte da tripulação depois de Luffy. Seu sonho é se tornar o maior espadachim do mundo.",
    jolly: "zoro.png",
  },

  nami: {
    fundo: "nami.png",
    img: "nami.png",
    titulo: "Gata Ladra",
    subtitulo: "Nami",
    texto:
      "Nami é a navegadora da tripulação. Ela é excelente em cartografia, climatologia e navegação. Seu sonho é desenhar um mapa-mundi completo.",
    jolly: "nami.png",
  },

  ussop: {
    fundo: "usopp.png",
    img: "usopp.png",
    titulo: "God",
    subtitulo: "Ussop",
    texto:
      "Ussop é o atirador e inventor da tripulação. Ele é um grande contador de histórias e mentiroso. Seu sonho é se tornar um guerreiro corajoso do mar.",
    jolly: "usopp.png",
  },

  sanji: {
    fundo: "sanji.png",
    img: "sanji.png",
    titulo: "Vinsmoke",
    subtitulo: "Sanji",
    texto:
      "Sanji é o cozinheiro da tripulação. É exímio na cozinha e luta usando apenas os pés. Seu sonho é encontrar o All Blue, um lendário mar.",
    jolly: "sanji.png",
  },

  chopper: {
    fundo: "chopper.png",
    img: "chopper.png",
    titulo: "Tony Tony",
    subtitulo: "Chopper",
    texto:
      "Chopper é um réndeer que comeu a Hito Hito no Mi e virou humano. É o médico da tripulação. Seu sonho é se tornar um excelente médico.",
    jolly: "chopper.png",
  },

  robin: {
    fundo: "robin.png",
    img: "robin.png",
    titulo: "Nico",
    subtitulo: "Robin",
    texto:
      "Robin é a arqueóloga da tripulação. Ela tem poderes da Hana Hana no Mi. Seu sonho é encontrar o Rio Poneglyph perdido.",
    jolly: "robin.png",
  },

  franky: {
    fundo: "franky.png",
    img: "franky.png",
    titulo: "Cutty Flam",
    subtitulo: "Franky",
    texto:
      "Franky é o carpinteiro da tripulação. É um ciborgue que construiu o navio Thousand Sunny. Seu sonho é que o Sunny navegue por todos os mares.",
    jolly: "franky.png",
  },

  brook: {
    fundo: "brook.png",
    img: "brook.png",
    titulo: "Soul King",
    subtitulo: "Brook",
    texto:
      "Brook é um esqueleto e músico da tripulação. Possui poderes da Yomi Yomi no Mi. Seu sonho é cumprir a promessa de reencontrar Laboon, a baleia.",
    jolly: "brook.png",
  },
};

// Função para alterar conteúdo
function alteraConteudo(personagem) {
  const imagemPersonagem = document.querySelector('.imagemPersonagem');
  const imagemFundo = document.querySelector('.imagemFundo');
  const tituloPersonagem = document.querySelector('.tituloPersonagem');
  const subtituloPersonagem = document.querySelector('.subtituloPersonagem'); 
  const textoPersonagem = document.querySelector('.textoPersonagem');
  const imgJolly = document.querySelector('.imgJolly');
  
  console.log('Personagem selecionado:', personagem);
  const infoPersonagem = personagens[personagem];
  
  if (infoPersonagem) {
    console.log('Informações do personagem:', infoPersonagem);

    imagemPersonagem.src = `Imagens/Personagens/${infoPersonagem.img}`;
    console.log('Imagem do personagem:', imagemPersonagem.src);

    imagemFundo.src = `Imagens/Objeto/${infoPersonagem.fundo}`;
    console.log('Imagem de fundo:', imagemFundo.src);

    tituloPersonagem.textContent = infoPersonagem.titulo;
    console.log('Título do personagem:', tituloPersonagem.textContent);

    subtituloPersonagem.textContent = infoPersonagem.subtitulo;
    console.log('Subtítulo do personagem:', subtituloPersonagem.textContent);

    textoPersonagem.textContent = infoPersonagem.texto;
    console.log('Texto do personagem:', textoPersonagem.textContent);

    imgJolly.src = `Imagens/Jolly Roger/${infoPersonagem.jolly}`;
    console.log('Imagem Jolly Roger:', imgJolly.src);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const icones = document.querySelectorAll("[id^=icone-]");

  icones.forEach((icone) => {
    icone.addEventListener("click", () => {
      const personagem = icone.dataset.personagem;
      alteraConteudo(personagem);
    });
  });
});
