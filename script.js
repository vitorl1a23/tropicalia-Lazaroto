document.addEventListener('DOMContentLoaded', function(){

    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    
    botaoDeAcessibilidade.addEventListener('click',function(){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    })
    
    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanted')==='true';
    botaoDeAcessibilidade.setAttribute('aria-expanted',!botaoSelecionado);
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    
    const alternaContraste = document.getElementById('alterna-contraste');
    
    let tamanhoAtualFonte = 1;
    184106
    aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
    
    diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
    
    alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste');
    })
    });184106

    ScroolReveal().reveal ('#inicio',{delay: 500});
    ScroolReveal().reveal ('#galeria',{delay: 500});
    ScroolReveal().reveal ('#tropicalia',{delay: 500});
    ScroolReveal().reveal ('#contato',{delay: 500});