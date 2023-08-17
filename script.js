document.addEventListener("DOMContentLoaded", function () {
    const icones = document.querySelectorAll("#personagens .character-text .icone-personagem");
    const personagemImagem = document.querySelector("#personagens .character-container .layer:nth-child(3) img");
    
    icones.forEach(function (icone) {
        icone.addEventListener("click", function () {
            const iconeSrc = icone.getAttribute("src");
            const nomePersonagem = icone.getAttribute("data-personagem");
            const novoSrc = `Imagens/Personagens/${nomePersonagem}.png`;
            personagemImagem.setAttribute("src", novoSrc);
        });
    });
});
