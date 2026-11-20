let carrinho = [];

$(document).ready(function() {

    $(document).on('click', '.product-item', function() {
        let nomeProduto = $(this).find('h4').text();
        let precoTexto = $(this).find('.product-price').text();
        let precoNumero = parseFloat(precoTexto.replace('R$', '').replace(',', '.').trim());

        carrinho.push({ nome: nomeProduto, preco: precoNumero });
        atualizarTelaCarrinho();

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

    //CEP
    function setStatusCep(texto, erro){
        $('#cep-status').text(texto).toggleClass('erro', erro);
    }

    function buscarCep(cep) {
        setStatusCep('Buscando endereço...', false);

        $.getJSON('https://viacep.com.br/ws/' + cep + '/json/')
            .done(function(dados) {
                if (dados.erro) {
                    setStatusCep('CEP não encontrado.', true);
                    $('#ped-cep').addClass('invalido');
                    return;
                }
                $('#ped-rua').val(dados.logradouro);
                $('#ped-bairro').val(dados.bairro);
                $('#ped-cidade').val(dados.localidade + ' - ' + dados.uf);
                $('#ped-rua, #ped-bairro, #ped-cidade').removeClass('invalido');
                setStatusCep('Endereço preenchido!', false);
                $('#ped-numero').focus();
            })
            .fail(function() {
                setStatusCep('Erro ao buscar CEP. Preencha manualmente.', true);
            });
    }
    
    $('#ped-cep').on('input', function() {
        let digitos = $(this).val().replace(/\D/g, '').slice(0, 8);
        if (digitos.length > 5) {
            digitos = digitos.slice(0, 5) + '-' + digitos.slice(5);
        }
        $(this).val(digitos);

        if(digitos.length === 9) {
            buscarCep(digitos.replace('-', ''));
        } else {
            setStatusCep('CEP inválido.', false);
        }
    });

    $('#form-pedido').on('input', 'input', function() {
        $this.removeClass('invalido');
    });

    $('#form-pedido').on('submit', function(e) {
        e.preventDefault();
        $('#msg-erro').hide();

        const campos = [
            { id: '#ped-nome', rotulo: 'Nome' },
            { id: '#ped-telefone', rotulo: 'Telefone' },
            { id: '#ped-cep', rotulo: 'CEP' },
            { id: '#ped-rua', rotulo: 'Rua' },
            { id: '#ped-bairro', rotulo: 'Bairro' },
            { id: '#ped-cidade', rotulo: 'Cidade' },
            { id: '#ped-numero', rotulo: 'Número' }
        ];

        let faltando = [];
        campos.forEach(function(c) {
            let vazio = $(c.id).val().trim() === '';
            $(c.id).toggleClass('invalido', vazio);
            if (vazio) faltando.push(c.rotulo);
        });

        let erros = [];

        if (carrinho.length === 0) {
            erros.push('O carrinho está vazio.');
        }
        if (faltando.length > 0) {
            erros.push('Preencha os campos obrigatórios: ' + faltando.join(', ') + '.');
        }

        let cep = $('#ped-cep').val().replace(/\D/g, '');
        if (cep.length !== 8) {
            erros.push('CEP inválido.');
            $('#ped-cep').addClass('invalido');
        }

        let tel = $('#ped-telefone').val().replace(/\D/g, '');
        if (tel.length < 10 || tel.length > 11) {
            erros.push('Telefone inválido. Use o formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.');
            $('#ped-telefone').addClass('invalido');
        }

        if (erros.length > 0) {
            $('#msg-erro').html(erros.join('<br>')).show();
            $('#msg-erro')[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        let total = carrinho.reduce(function(soma, item) {return soma + item.preco; }, 0);
        alert('Pedido realizado com sucesso!\nTotal: R$ ' + total.toFixed(2).replace('.', ','));

        carrinho = [];
        atualizarTelaCarrinho();
        this.reset();
        setStatusCep('', false);
        $('#modal-carrinho').fadeOut(200);
    });
});