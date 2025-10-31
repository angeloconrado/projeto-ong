/* ------------------------------- */
/* 1. Funções de Máscara (Entrega I) */
/* ------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    /* Máscara de CPF: XXX.XXX.XXX-XX */
    if (inputCPF) {
        inputCPF.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '').slice(0, 11);
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
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
    
    const menuToggleButton = document.querySelector('.menu-toggle-label');
    const nav = document.querySelector('header nav');

    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', function() {
            nav.classList.toggle('menu-ativo');
            menuToggleButton.classList.toggle('menu-ativo');
        });
    }

    /* ------------------------------- */
    /* 3. Botão Voltar ao Topo         */
    /* ------------------------------- */
    
    const btnTopo = document.getElementById('btnVoltarAoTopo');

    if (btnTopo) {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                btnTopo.classList.add('visivel');
            } else {
                btnTopo.classList.remove('visivel');
            }
        });

        btnTopo.addEventListener('click', function(event) {
            event.preventDefault();
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    /* ------------------------------- */
    /* 4. Interruptor Modo Escuro      */
    /* ------------------------------- */

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
        }

        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

});