// Selecionar o botão e adicionar um evento de clique
const buttonElement = document.getElementById("embaralharSortearButtonn");
buttonElement.addEventListener("click", embaralharESortear);

function exibirMensagem(mensagem) {
    const mensagemElement = document.getElementById("mensagem");
    mensagemElement.textContent = mensagem;
}
