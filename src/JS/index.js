/*
Quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul na seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que estar selecionado.

Objetivo 1 - Quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo:

passo 1 - pegar os personagens no JS para verificar quando o usuário passar o mouse em cima;
passo 2 - adicionar a classe selecionado no personagem que o usuário passar o curso do mouse;
passo 3 - verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele.

Objetivo 2 - quando passar o mouse em cima do personagem na listagem trocar a imagem, o nome e a descrição do personagem grande:

passo 1 - pegar o elemento do personagem grande e adicionar as informações nele;
passo 2 - alterar a imagem do personagem grande;
passo 3 - alterar o nome do personagem grande;
passo 4 - alterar a descrição do personagem grande.

*/

// passo 1 - pegar os personagens no JS para verificar quando o usuário passar o mouse em cima

const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o curso do mouse;

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        ////passo 3
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
// Obejito 2
        //pass01 
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        //passo2
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        //passo 3
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        
        //passo 4
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

