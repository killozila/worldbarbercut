const barbeirosSelect = document.getElementById('barbeiros');
const barbeirosDisponiveisElement = document.getElementById('barbeirosDisponiveis');

// Definição dos horários de trabalho dos barbeiros
const barbeiros = [
    { nome: 'João', horario: { inicio: 9, fim: 18 } },
    { nome: 'Pedro', horario: { inicio: 18, fim: 20 } },
    { nome: 'Paulo', horario: { inicio: 18, fim: 23 } }
];

barbeirosSelect.addEventListener('change', function () {
    const selectedOption = barbeirosSelect.value;

    // Limpe a lista de barbeiros disponíveis
    barbeirosDisponiveisElement.innerHTML = '';

    // Encontre o barbeiro selecionado
    const barbeiroSelecionado = barbeiros.find(barbeiro => barbeiro.nome === selectedOption);

    // Se o barbeiro for encontrado
    if (barbeiroSelecionado) {
        const inicioExpediente = barbeiroSelecionado.horario.inicio;
        const fimExpediente = barbeiroSelecionado.horario.fim;

        // Cria o elemento para mostrar os horários de trabalho
        const horarioTrabalho = document.createElement('li');
        horarioTrabalho.textContent = `Horário de trabalho de ${selectedOption}: ${inicioExpediente}h às ${fimExpediente}h`;
        barbeirosDisponiveisElement.appendChild(horarioTrabalho);

        // Obtenha a hora atual
        const agora = new Date();
        const horaAtual = agora.getHours();

        // Verifica se o barbeiro está disponível no momento
        if (horaAtual >= inicioExpediente && horaAtual <= fimExpediente) {
            const disponibilidade = document.createElement('li');
            disponibilidade.textContent = `${selectedOption} está disponível agora.`;
            barbeirosDisponiveisElement.appendChild(disponibilidade);
        } else {
            const indisponibilidade = document.createElement('li');
            indisponibilidade.textContent = `${selectedOption} não está disponível agora.`;
            barbeirosDisponiveisElement.appendChild(indisponibilidade);
        }

        // Cria o elemento para mostrar o horário de encerramento do expediente
        const horarioEncerramento = document.createElement('li');
        horarioEncerramento.textContent = `Horário de encerramento do expediente: ${fimExpediente}h`;
        barbeirosDisponiveisElement.appendChild(horarioEncerramento);
    } else {
        const itemLista = document.createElement('li');
        itemLista.textContent = 'Escolha um barbeiro válido.';
        barbeirosDisponiveisElement.appendChild(itemLista);
    }
});
