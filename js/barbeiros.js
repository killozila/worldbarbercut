document.getElementById('barbeiros').addEventListener('change', function () {
    const selectedOption = this.value;
    const cardBarbeiro = document.getElementById('cardBarbeiro');
    const containerReservar = document.querySelector('.container-reservar');
  
    if (selectedOption) {
      cardBarbeiro.classList.add('visible'); // Exibe o card quando um barbeiro é selecionado
    } else {
      cardBarbeiro.classList.remove('visible'); // Oculta o card quando nenhum barbeiro é selecionado
    }
  
    // Ajusta a margem inferior conforme a visibilidade do card
    if (cardBarbeiro.classList.contains('visible')) {
      containerReservar.classList.add('card-visible');
    } else {
      containerReservar.classList.remove('card-visible');
    }
  });
  
  // Função para enviar o agendamento
  function enviarAgendamento(event) {
    event.preventDefault(); // Impede o envio do formulário (comportamento padrão)
  
    // Aqui você pode adicionar o código para enviar o agendamento, como enviar os dados para um servidor ou exibir uma mensagem de confirmação
  
    // Exemplo de mensagem de confirmação
    alert('Agendamento enviado com sucesso!');
  }
  