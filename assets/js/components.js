/* ==========================================
   COMPONENT LOADER
========================================== */

async function loadComponent(
  containerId,
  filePath
) {

  try {

    const response =
      await fetch(filePath);

    const html =
      await response.text();

    document
      .getElementById(containerId)
      .innerHTML = html;

  } catch (error) {

    console.error(
      "Erro ao carregar componente:",
      filePath,
      error
    );

  }

}


/* ==========================================
   CONFIGURA COMPONENTES
========================================== */

function configurarComponentes() {

  /* -------------------------------
     BOTÃO WHATSAPP FLUTUANTE
  -------------------------------- */

  const whatsappFloat =
    document.getElementById(
      "whatsapp-float"
    );

  if (
    whatsappFloat &&
    typeof gerarLinkWhatsApp ===
      "function"
  ) {

    whatsappFloat.href =
      gerarLinkWhatsApp(
        WHATSAPP.mensagens.atendimento
      );

  }

  /* -------------------------------
     WHATSAPP DO FOOTER
  -------------------------------- */

  const footerWhatsapp =
    document.getElementById(
      "footer-whatsapp"
    );

  if (
    footerWhatsapp &&
    typeof gerarLinkWhatsApp ===
      "function"
  ) {

    footerWhatsapp.href =
      gerarLinkWhatsApp(
        WHATSAPP.mensagens.atendimento
      );

  }

}


/* ==========================================
   INICIALIZAÇÃO
========================================== */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    await loadComponent(
      "header-container",
      "./components/header.html"
    );

    await loadComponent(
      "footer-container",
      "./components/footer.html"
    );

    await loadComponent(
      "whatsapp-container",
      "./components/whatsapp.html"
    );

    /* CONFIGURA COMPONENTES */

    configurarComponentes();

    /* MENU */

    if (
      typeof initializeMenu ===
      "function"
    ) {

      initializeMenu();

    }

  }
);