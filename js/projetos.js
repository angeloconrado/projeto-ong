/* ------------------------------- */
/* 3. Carregamento Dinâmico (Projetos) */
/* ------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    
    const container = document.querySelector('.cards-container');

    if (container) {
        
        fetch('data/projetos.json')
            .then(response => response.json())
            .then(projetos => {
                
                projetos.forEach(projeto => {
                    
                    const cardHTML = `
                        <article>
                            <h3>${projeto.titulo}</h3>
                            <img src="${projeto.imagem}" alt="${projeto.alt}" style="max-width: 100%; height: auto;">
                            <p>${projeto.descricao}</p>
                        </article>
                    `;
                    
                    container.innerHTML += cardHTML;
                });
            })
            .catch(error => {
                console.error('Erro ao carregar os projetos:', error);
                container.innerHTML = "<p>Não foi possível carregar os projetos no momento.</p>";
            });
    }

    /* ------------------------------- */
    /* 4. Lógica do Modal de Doação    */
    /* ------------------------------- */

    const modal = document.getElementById('modalDoacao');
    const btnAbrir = document.getElementById('btnAbrirModalDoacao');
    const btnFechar = document.getElementById('btnFecharModal');

    if (btnAbrir && modal && btnFechar) {

        function abrirModal() {
            modal.classList.add('visivel');
            modal.setAttribute('aria-hidden', 'false');
            btnFechar.focus();
        }

        function fecharModal() {
            modal.classList.remove('visivel');
            modal.setAttribute('aria-hidden', 'true');
            btnAbrir.focus();
        }

        btnAbrir.addEventListener('click', abrirModal);

        btnFechar.addEventListener('click', fecharModal);

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                fecharModal();
            }
        });
        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('visivel')) {
                fecharModal();
            }
        });
    }

});