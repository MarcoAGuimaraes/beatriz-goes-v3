/* ==========================================================
   CONFIGURAÇÃO GLOBAL DO WHATSAPP
   Projeto Beatriz Góes
========================================================== */

const WHATSAPP = {

    numero: "5511921187806",

    mensagens: {

        atendimento:
            "#BeatrizGoes-Atendimento virtual",

        formulario:
            "Olá Beatriz! Acabei de enviar o formulário através do site."

    }

};


/* ==========================================================
   GERA LINK
========================================================== */

function gerarLinkWhatsApp(mensagem){

    return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensagem)}`;

}