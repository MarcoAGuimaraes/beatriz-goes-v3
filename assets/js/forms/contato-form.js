/* ==========================================
   FORMULÁRIO BEATRIZ GOES
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* EMAILJS */

  emailjs.init("ln3paXVg4VoRXCS0U");

  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitButton = form.querySelector("button");

    submitButton.disabled = true;

    submitButton.textContent = "Enviando...";

    emailjs
      .sendForm(
        "service_9k04ynr",

        "template_m8mfabx",

        this,
      )

      .then(() => {
        const abrirWhatsapp = confirm(
          "Cadastro enviado com sucesso!\n\nDeseja conversar agora pelo WhatsApp?",
        );

        form.reset();

        submitButton.disabled = false;

        submitButton.textContent = "Quero fazer parte";

        if (abrirWhatsapp) {
          window.location.href = gerarLinkWhatsApp(
            WHATSAPP.mensagens.formulario,
          );
        }
      })

      .catch((error) => {
        console.error(error);

        alert("Erro ao enviar. Tente novamente.");

        submitButton.disabled = false;

        submitButton.textContent = "Quero fazer parte";
      });
  });
});
