$(document).ready(function(){
    // Inicia o slick carousel
    $('#carrosel').slick({
        autoplay: true
    });

    // Função do menu hambúrguer
    $('.menu').click(function() {
        $('nav').slideToggle();
    });

    // Máscara para o campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Esse dado é obrigatório'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    // Função para preenchimento automático do campo "Veículo de Interesse" e rolagem suave
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
