const inputNumero = document.getElementById('phone-number');
const inputNome = document.getElementById('nome');
const inputData = document.getElementById('data');
const inputHora = document.getElementById('hora');

inputNumero.addEventListener('input', () => {
    let inputLength = inputNumero.value.length;
    let currentValue = inputNumero.value;

    // Remove caracteres não numéricos
    currentValue = currentValue.replace(/\D/g, '');

    // Verifica o tamanho atual do número
    if (inputLength <= 2) {
        // Formato: (99)
        inputNumero.value = `(${currentValue}`;
    } else if (inputLength <= 7) {
        // Formato: (99) 9
        inputNumero.value = `(${currentValue.substring(0, 2)}) ${currentValue.substring(2)}`;
    } else if (inputLength <= 11) {
        // Formato: (99) 9 9999
        inputNumero.value = `(${currentValue.substring(0, 2)}) ${currentValue.substring(2, 3)} ${currentValue.substring(3, 7)}`;
    } else {
        // Limita o tamanho do número para "(99) 9 9999-9999"
        inputNumero.value = `(${currentValue.substring(0, 2)}) ${currentValue.substring(2, 3)} ${currentValue.substring(3, 7)}-${currentValue.substring(7, 11)}`;
    }
});

inputNome.addEventListener('input', () => {
    const nome = inputNome.value;

    // Verifica se o valor contém apenas letras e espaços
    const regexNome = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!regexNome.test(nome)) {
        // Remove os números do valor atual do campo
        inputNome.value = nome.replace(/\d/g, '');
    }

    // Capitaliza a primeira letra de cada palavra
    const palavras = inputNome.value.split(' ');
    const nomeFormatado = palavras.map(palavra => {
        if (palavra.length > 0) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
        } else {
            return '';
        }
    }).join(' ');

    // Atualiza o valor do campo de entrada
    inputNome.value = nomeFormatado;
});

inputData.addEventListener('input', () => {
    const data = inputData.value;

    // Verifica se o valor contém apenas números e barra "/"
    const regexData = /^\d{0,2}\/\d{0,2}\/\d{0,4}$/;
    if (!regexData.test(data)) {
        // Remove caracteres inválidos do valor atual do campo
        inputData.value = data.replace(/[^\d\/]/g, '');
    }

    // Preenche o ano automaticamente com 2023 após inserir o mês
    if (data.length === 2 || data.length === 5) {
        inputData.value += '/';
    } else if (data.length === 10) {
        const [day, month, year] = inputData.value.split('/');
        const currentYear = new Date().getFullYear().toString();
        const inputYear = year.length === 2 ? '20' + year : year;

        if (parseInt(inputYear) < 2023) {
            inputData.value = `${day}/${month}/2023`;
        } else {
            inputData.value = `${day}/${month}/${inputYear}`;
        }
    }
});

inputHora.addEventListener('input', () => {
    const hora = inputHora.value;

    // Remove caracteres não numéricos
    const currentValue = hora.replace(/\D/g, '');

    // Formatação da hora
    if (currentValue.length <= 2) {
        // Formato: HH
        inputHora.value = currentValue;
    } else {
        // Formato: HH:mm
        const hour = currentValue.substring(0, 2);
        const minutes = currentValue.substring(2, 4);

        inputHora.value = `${hour}:${minutes}`;
    }
});

function validarHora(hora) {
    // Verifica se a hora é válida (no formato HH:mm)
    const regexHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return regexHora.test(hora);
}

function enviarAgendamento(event) {
    event.preventDefault();

    const hora = inputHora.value;

    if (validarHora(hora)) {
        // Hora válida, prosseguir com o envio do formulário
        document.forms['contact'].submit();
    } else {
        // Hora inválida, exibir mensagem de erro ou fazer alguma ação apropriada
        alert('Por favor, insira uma hora válida no formato HH:mm');
    }
}

function mostrarValoresSelecionados() {
    // Restante do código para mostrar os valores selecionados...
}

const resultFinalButton = document.querySelector('.result-final button');
resultFinalButton.addEventListener('click', (event) => {
    event.preventDefault();
    mostrarValoresSelecionados();
});
