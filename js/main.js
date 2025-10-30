/* ------------------------------- */
/* 1. Funções de Máscara (Entrega I) */
/* ------------------------------- */

/* Aguarda o documento carregar */
document.addEventListener('DOMContentLoaded', function() {
    
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    /* Máscara de CPF: XXX.XXX.XXX-XX */
    if (inputCPF) {
        inputCPF.addEventListener('input', function(e) {
            
            // 1. Limpa tudo que não é dígito E limita a 11 dígitos
            let value = e.target.value.replace(/\D/g, '').slice(0, 11);
            
            // 2. Aplica a formatação progressivamente
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // 123.456...
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // 123.456.789...
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // 123.456.789-00
            
            // 3. Atualiza o valor no campo
            e.target.value = value;
        });
    }

    /* Máscara de Telefone: (XX) XXXXX-XXXX */
    if (inputTelefone) {
        inputTelefone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            let len = value.length;

            if (len <= 2) {
                value = value.replace(/^(\d{0,2})/, '($1');
            } else if (len <= 6) {
                value = value.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
            } else if (len <= 10) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
            
            e.target.value = value.slice(0, 15);
        });
    }

    /* Máscara de CEP: XXXXX-XXX */
    if (inputCEP) {
        inputCEP.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value.slice(0, 9);
        });
    }


    /* ------------------------------- */
    /* 2. Menu Responsivo (Entrega III)*/
    /* ------------------------------- */
    
    // Seleciona os elementos do menu
    const menuToggleButton = document.querySelector('.menu-toggle-label');
    const nav = document.querySelector('header nav');

    // 1. Adiciona um 'escutador de evento' (click) no botão
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', function() {
            
            // 2. Adiciona ou remove a classe 'menu-ativo' na navegação
            nav.classList.toggle('menu-ativo');
            
            // 3. Adiciona uma classe no botão (para mudar o ícone para 'X' no futuro)
            menuToggleButton.classList.toggle('menu-ativo');
        });
    }

/* ------------------------------- */
    /* 3. Botão Voltar ao Topo         */
    /* ------------------------------- */
    
    const btnTopo = document.getElementById('btnVoltarAoTopo');

    if (btnTopo) {
        // 1. Mostrar/Esconder o botão ao rolar a página
        window.addEventListener('scroll', function() {
            // Se rolar mais que 300px...
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                btnTopo.classList.add('visivel');
            } else {
                btnTopo.classList.remove('visivel');
            }
        });

        // 2. Ação de clique (Voltar ao topo)
        btnTopo.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link (#)
            
            // Rola suavemente para o topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }});