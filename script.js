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

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from submitting by default
            let valid = true;
    
            // Validate Name
            if (nameInput.value.trim() === '') {
                showError('nameError', 'Please enter your name.');
                valid = false;
            } else {
                hideError('nameError');
            }
    
            // Validate Email
            if (!isValidEmail(emailInput.value)) {
                showError('emailError', 'Please enter a valid email.');
                valid = false;
            } else {
                hideError('emailError');
            }
    
            // Validate Subject
            if (subjectInput.value.trim() === '') {
                showError('subjectError', 'Please enter a subject.');
                valid = false;
            } else {
                hideError('subjectError');
            }
    
            // Validate Message
            if (messageInput.value.trim() === '') {
                showError('messageError', 'Please enter your message.');
                valid = false;
            } else {
                hideError('messageError');
            }
    
            // If all validations pass, proceed with form submission (e.g., AJAX call)
            if (valid) {
                alert('Form submitted successfully!');
                form.reset();
            }
        });
    
        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    
        function hideError(elementId) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    
        function isValidEmail(email) {
            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });
    
});
