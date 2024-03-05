// Função para enviar o agendamento para o WhatsApp
function enviarAgendamento(event) {
    event.preventDefault();

    // Número de telefone do WhatsApp para envio
    const numeroWhatsApp = "5551998391057";

    // Captura dos valores dos campos do formulário
    const nome = document.querySelector("#nome").value;
    const numero = document.querySelector("#phone-number").value;
    const data = document.querySelector("#data").value;
    const hora = document.querySelector("#hora").value;
    const localEncontro = document.querySelector("#barbeiros").value;

    // Captura dos itens selecionados nos checkboxes
    const checkboxes = document.querySelectorAll(".inputBoxService input[type='checkbox']");
    const selectedItems = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    // Detalhes adicionais do agendamento
    const detalhes = document.querySelector("#detalhes").value;

    // Construção da mensagem a ser enviada via WhatsApp
    let mensagem = `Olá! Gostaria de agendar um momento na barbearia:\n`;
    mensagem += `Nome: ${nome}\n`;
    mensagem += `Número de telefone: ${numero}\n`;
    mensagem += `Data: ${data}\n`;
    mensagem += `Hora: ${hora}\n`;
    mensagem += `Serviço: ${selectedItems.join(', ')}\n`;
    mensagem += `Barbeiro: ${localEncontro}\n`;
    mensagem += `Detalhes adicionais: ${detalhes}`;

    // Codificação da mensagem para envio via WhatsApp
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Montagem do link do WhatsApp com a mensagem
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    // Redirecionamento para o link do WhatsApp
    window.open(linkWhatsApp, '_blank');
}

// Adiciona um ouvinte de evento ao formulário para chamar a função enviarAgendamento quando o formulário for submetido
document.querySelector("form[name='contact']").addEventListener("submit", enviarAgendamento);
