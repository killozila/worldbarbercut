const checkboxElements = document.querySelectorAll('.inputBoxService input[type="checkbox"]');
const precoLocalEncontroElement = document.getElementById('precoLocalEncontro');

checkboxElements.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        let precoTotal = 0;

        checkboxElements.forEach(checkbox => {
            const label = checkbox.nextElementSibling;
            if (checkbox.checked) {
                switch (checkbox.value) {
                    case 'Corte':
                        precoTotal += 30;
                        break;
                    case 'Barba':
                        precoTotal += 30;
                        break;
                    case 'Sombrancelha':
                        precoTotal += 20;
                        break;
                    case 'Assinar':
                        precoTotal += 100;
                        break;
                    case 'Hidratacao':
                        precoTotal += 50;
                        break;
                    case 'Alisamento':
                        precoTotal += 50;
                        break;
                }
                label.classList.add('selected'); // Adiciona a classe 'selected' ao label
            } else {
                label.classList.remove('selected'); // Remove a classe 'selected' do label
            }
        });

        precoLocalEncontroElement.textContent = 'R$ ' + precoTotal;
    });
});
