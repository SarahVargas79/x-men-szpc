// ou /* */
/*
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a 
borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do 
personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em 
        cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a 
    descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

//OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

//passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
//Representação de todas as li de uma vez só
const personagens = document.querySelectorAll('.personagem');//busca por todos os seletores que tenha classe personagens

//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){//Para ver no celular não tendo usabilidade ruim, ao clicar na imagem
            window.scrollTo({top: 0, behavior: "smooth"});//Rolagem para, até o topo, behavior comportamento da rolagem, smooth(suave)
        }

        //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        removerSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');

        //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);
       
        //passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);
        
        //passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);
    
    })
})//tal do ouvinte, vai ouvir a ação quando o usuário clicar o botão, a ação que vai ser disparada. forEach para cada item da lista, ao passar pelo laço vai armazenar o personagem atual que está dentro do laço.


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');//innertext muda o texto do elemento
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value; //Está pegando o atríbuto id do personagem e salvando na váriavel idPersonagem
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;//templete string, interpolação de strings, usado para unir texto com outro texto
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

