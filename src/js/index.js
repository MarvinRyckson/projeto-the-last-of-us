const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativaBotaoSelecionado();

        selecionarBotao(botao);

        escondeImagemAtiva();
         
        adicionaImagemSelecionada(indice);

})})

function adicionaImagemSelecionada(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function escondeImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

