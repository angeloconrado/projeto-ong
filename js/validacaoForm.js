/* ------------------------------- */
/* 4. Validação Formulário (JS)    */
/* ------------------------------- */

document.addEventListener('DOMContentLoaded', function() {

    // --- SELEÇÃO DOS ELEMENTOS ---
    const form = document.querySelector('form');
    const inputCEP = document.getElementById('cep');
    const inputCPF = document.getElementById('cpf');
    const inputEndereco = document.getElementById('endereco');
    const inputCidade = document.getElementById('cidade');
    const inputEstado = document.getElementById('estado');

    // --- 4.1 INTEGRAÇÃO VIA CEP ---
    if (inputCEP) {
        inputCEP.addEventListener('blur', function() {
            const cep = inputCEP.value.replace(/\D/g, '');
            if (cep.length === 8) {
                const url = `https://viacep.com.br/ws/${cep}/json/`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        if (!data.erro) {
                            inputEndereco.value = data.logouro;
                            inputCidade.value = data.localidade;
                            inputEstado.value = data.uf;
                        } else {
                            alert('CEP não encontrado. Por favor, verifique.');
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao buscar o CEP:', error);
                    });
            }
        });
    }

    // --- 4.2 FUNÇÃO DE VALIDAÇÃO DE CPF ---
    // (Esta é uma função padrão de mercado para validar CPF)
    function validaCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g,'');
        if(cpf == '') return false;
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
                return false;
        // Valida 1o digito
        let add = 0;
        for (let i=0; i < 9; i ++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
            let rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                return false;
        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i ++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }

    // --- 4.3 VALIDAÇÃO NO SUBMIT ---
    if (form) {
        form.addEventListener('submit', function(event) {
            // 1. Previne o envio padrão do formulário
            event.preventDefault();

            // 2. Verifica se o CPF é válido
            const cpfValido = validaCPF(inputCPF.value);

            if (!cpfValido) {
                alert('O CPF digitado é inválido. Por favor, corrija.');
                inputCPF.focus(); // Foca no campo CPF
                return; // Para a execução
            }

            // 3. (Opcional) Poderíamos adicionar outras validações aqui
            // (Ex: verificar se todos os campos 'required' estão preenchidos)
            // Mas o HTML5 'required' já faz um bom trabalho inicial.
            
            // 4. Se tudo estiver OK:
            alert('Cadastro realizado com sucesso!');
            
            // 5. (Opcional) Limpa o formulário após o sucesso
            // form.reset();
        });
    }

});