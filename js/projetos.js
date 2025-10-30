/* ------------------------------- */
/* 3. Carregamento Dinâmico (Projetos) */
/* ------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Encontra o contêiner onde os cards serão inseridos
    const container = document.querySelector('.cards-container');

    // 2. Verifica se o contêiner existe nesta página
    if (container) {
        
        // 3. Busca os dados no arquivo JSON
        fetch('data/projetos.json')
            .then(response => response.json()) // Converte a resposta para JSON
            .then(projetos => {
                
                // 4. Para cada projeto no JSON, cria um card
                projetos.forEach(projeto => {
                    
                    // 5. Cria o HTML do card (usando Template Literals)
                    const cardHTML = `
                        <article>
                            <h3>${projeto.titulo}</h3>
                            <img src="${projeto.imagem}" alt="${projeto.alt}" style="max-width: 100%; height: auto;">
                            <p>${projeto.descricao}</p>
                        </article>
                    `;
                    
                    // 6. Insere o HTML do card dentro do contêiner
                    container.innerHTML += cardHTML;
                });
            })
            .catch(error => {
                // 7. Em caso de erro (ex: arquivo não encontrado)
                console.error('Erro ao carregar os projetos:', error);
                container.innerHTML = "<p>Não foi possível carregar os projetos no momento.</p>";
            });
    }
/* ------------------------------- */
    /* 4. Lógica do Modal de Doação    */
    /* ------------------------------- */

    // 1. Seleciona os elementos do modal
    const modal = document.getElementById('modalDoacao');
    const btnAbrir = document.getElementById('btnAbrirModalDoacao');
    const btnFechar = document.getElementById('btnFecharModal');

    // 2. Verifica se os botões existem nesta página
    if (btnAbrir && modal && btnFechar) {

        // 3. Ao clicar em "Quero Doar Agora"
        btnAbrir.addEventListener('click', function() {
            modal.classList.add('visivel');
        });

        // 4. Ao clicar no "X" para fechar
        btnFechar.addEventListener('click', function() {
            modal.classList.remove('visivel');
        });

        // 5. (Opcional) Fechar o modal se clicar fora da caixa
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.classList.remove('visivel');
            }
        });
    }});