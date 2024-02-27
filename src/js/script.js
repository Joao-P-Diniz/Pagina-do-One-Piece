const botoes = document.querySelectorAll(".botao");
const personagem = document.querySelectorAll(".personagens");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // Remova a classe "selecionado" de todos os botões
    botoes.forEach((botao) => {
      botao.classList.remove("selecionado");
    });

    // Adicione a classe "selecionado" apenas ao botão clicado
    botao.classList.add("selecionado");

    // Remova a classe "selecionado" de todos os personagens
    personagem.forEach((personagens) => {
      personagens.classList.remove("selecionado");
    });

    // Adicione a classe "selecionado" ao personagem correspondente ao botão clicado
    personagem[indice].classList.add("selecionado");
  });
});

