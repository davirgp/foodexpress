let carrinho = [];

$(document).ready(function() {

    $(document).on('click', '.product-item', function() {
        let nomeProduto = $(this).find('h4').text();
        let precoTexto = $(this).find('.product-price').text();
        let precoNumero = parseFloat(precoTexto.replace('R$', '').replace(',', '.').trim());

        carrinho.push({ nome: nomeProduto, preco: precoNumero });
        atualizarTelaCarrinho();

        $('#contador-carrinho').text(carrinho.length);

        $('#carrinho-flutuante').css('transform', 'scale(1.25)');
        setTimeout(function() {
            $('#carrinho-flutuante').css('transform', 'scale(1)');
        }, 200);
    });

    $('#carrinho-flutuante').click(function() {
        atualizarTelaCarrinho();
        $('#modal-carrinho').css('display', 'flex').hide().fadeIn(200);
    });

    $('#fechar-carrinho').click(function() {
        $('#modal-carrinho').fadeOut(200);
    });

    $(document).on('click', '.btn-remover', function() {
        let index = $(this).data('index'); // Pega a posição do item no array
        carrinho.splice(index, 1);         // Remove 1 item naquela posição
        atualizarTelaCarrinho();           // Redesenha a lista e recalcula o total
    });

    function atualizarTelaCarrinho() {
        $('#contador-carrinho').text(carrinho.length);
        $('#lista-carrinho').empty();

        let total = 0;

        if (carrinho.length === 0) {
            $('#lista-carrinho').append('<p style="text-align:center; color:#8D6E63; padding: 1rem;">Seu carrinho está vazio.</p>');
        } else {
            carrinho.forEach(function(item, index) {
                total += item.preco;

                let precoFormatado = item.preco.toFixed(2).replace('.', ',');

                let li = `
                    <li class="item-carrinho">
                        <span>${item.nome}</span>
                        <div>
                            <strong>R$ ${precoFormatado}</strong>
                            <button class="btn-remover" data-index="${index}">Remover</button>
                        </div>
                    </li>
                `;
                $('#lista-carrinho').append(li);
            });
        }

        $('#valor-total').text(total.toFixed(2).replace('.', ','));
    }
});
