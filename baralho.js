const naipes = ["Copas", "Espadas", "Ouros", "Paus"];
const nomes = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cartasEspeciais = ["J", "Q", "K"];
const coringa = { naipe: "Coringa", nome: "C" };

function criarBaralho() {
    const baralho = [];

    for (const naipe of naipes) {
        for (const nome of nomes) {
            const carta = {
                naipe: naipe,
                nome: nome,
                mostrarNaipe: false // controla a exibição do nome do naipe
            };

            baralho.push(carta);
        }
    }

    // Adiciona o coringa ao baralho
    baralho.push(coringa);

    return baralho;
}

function embaralharCartas(baralho) {
    for (let i = baralho.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
    }
}
 
function sortearCarta() {
    const cartaSorteada = baralho.shift(); // Retira a primeira carta do baralho
    exibirCarta(cartaSorteada);
}

function exibirCarta(carta) {
    const suitElement = document.getElementById("suit");
    const nameElement = document.getElementById("name");
    const cardImageElement = document.getElementById("cardImage");

    if (carta.naipe === "Coringa") {
        suitElement.textContent = "CORINGA";
        nameElement.textContent = "C";
        cardImageElement.src = "imagens/coringa.png";

        // Adicione a classe específica para o coringa
        cardImageElement.classList.add("coringa-image");

    } else {
        suitElement.textContent = carta.mostrarNaipe ? carta.naipe : "";
        nameElement.textContent = carta.nome;
        cardImageElement.classList.remove("coringa-image");

        if (cartasEspeciais.includes(carta.nome)) {
            const chapeuzinhoSrc = `imagens/${carta.nome.toLowerCase()}-head.png`;
            const naipeSrc = `imagens/${carta.naipe.toLowerCase()}.png`;

            // Adiciona o contêiner para envolver o chapéu e o nome
            nameElement.innerHTML = `<div class="name-container"><img src="${chapeuzinhoSrc}" alt="Chapeuzinho"></div><div class="chapeu">${carta.nome}</div>`;

            // Define a imagem da carta
            cardImageElement.src = naipeSrc;
        } else {
            cardImageElement.src = `imagens/${carta.naipe.toLowerCase()}.png`;
        }
    }
}

function atualizarPagina() {
    location.reload();
}

// Inicialização do baralho
const baralho = criarBaralho();

// Embaralhar as cartas
embaralharCartas(baralho);

// Adiciona um event listener para o botão
const botaoSortear = document.getElementById("sortearButton");
botaoSortear.addEventListener("click", sortearCarta);