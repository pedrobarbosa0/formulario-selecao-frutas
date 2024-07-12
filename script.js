window.onload = function() {
    const outraCheckbox = document.getElementById('outraCheckbox');
    const outraTexto = document.getElementById('outraTexto');
    const botaoSubmeter = document.getElementById('botaoSubmeter');
    const frutasSelecionadas = document.getElementById('frutasSelecionadas');

    outraCheckbox.addEventListener('change', () => {
        if (outraCheckbox.checked) {
            outraTexto.style.display = 'inline';
        } else {
            outraTexto.style.display = 'none';
        }
    });

    botaoSubmeter.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('input[name="fruta"]:checked');
        const outraTextoValor = outraTexto.value.trim();
        let valido = true;
        let valoresSelecionados = [];

        if (checkboxes.length < 2) {
            valido = false;
            alert('Por favor, selecione pelo menos duas opções.');
        } else if (outraCheckbox.checked && (outraTextoValor.length <= 2)) {
            valido = false;
            alert('Por favor, preencha o campo "Outra" com uma fruta que possua mais de 2 caracteres.');
        }

        if (valido) {
            checkboxes.forEach(checkbox => {
                if (checkbox.value === 'Outra') {
                    valoresSelecionados.push(outraTextoValor);
                } else {
                    valoresSelecionados.push(checkbox.value);
                }
            });
            frutasSelecionadas.style.display = 'block';
            frutasSelecionadas.textContent = `Frutas selecionadas: ${valoresSelecionados.join(', ')}`;
        } else {
            frutasSelecionadas.style.display = 'none';
        }
    });
};