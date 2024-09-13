document.addEventListener('DOMContentLoaded', function () {
    const sobreTexto = document.querySelector('.sobre-texto');
    const pularTexto = document.querySelector('.pular-texto');

    window.addEventListener('scroll', function () {
        const sectionTop = sobreTexto.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            sobreTexto.classList.add('visible'); // Adiciona a classe para tornar o texto visível
            pularTexto.classList.add('visible');
            const button = document.getElementById('pular-texto');
        setTimeout(() => {
        button.classList.add('hidden');
    }, 7000);
    setTimeout(() => {
        button.classList.add('hidden2');
    }, 9000);          
    }
    });
});

function skipToNextSection() {
    const nextSection = document.querySelector('#projetos'); // Substitua pelo ID da próxima seção
    nextSection.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a próxima seção
}

$(document).ready(function(){
    $('.illustrations-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });
    $('.webdev-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });
    $('.frontend-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });
    $('.backend-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });
    $('.database-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });
});
