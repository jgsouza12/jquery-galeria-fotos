$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImg = $(`#link-nova-img`).val();
        
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-link">
                <a href="${enderecoNovaImg}" title='Ver a imagem em tamanho Real' target="_blank">Ver a imagem em tamanho Real</a>
            </div>
        `).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(800);
        
        $('#link-nova-img').val('');
    });
});
