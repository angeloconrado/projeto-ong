/* Este código espera o documento carregar
   e então procura pelos inputs que vamos aplicar as máscaras
*/
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os inputs pelos seus IDs
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    // Máscara de CPF: XXX.XXX.XXX-XX
    if (inputCPF) {
        inputCPF.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o 1º ponto
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o 2º ponto
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço
            e.target.value = value.slice(0, 14); // Limita ao tamanho máximo
        });
    }

    // Máscara de Telefone: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (inputTelefone) {
        inputTelefone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            let len = value.length;

            if (len <= 2) {
                // (XX
                value = value.replace(/^(\d{0,2})/, '($1');
            } else if (len <= 6) {
                // (XX) XXXX
                value = value.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
            } else if (len <= 10) {
                // (XX) XXXX-XXXX (Telefone Fixo)
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                // (XX) XXXXX-XXXX (Celular com 9 dígitos)
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
            
            // Limita ao tamanho máximo de (XX) XXXXX-XXXX
            e.target.value = value.slice(0, 15);
        });
    }

    // Máscara de CEP: XXXXX-XXX
    if (inputCEP) {
        inputCEP.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço
            e.target.value = value.slice(0, 9); // Limita ao tamanho máximo
        });
    }
});