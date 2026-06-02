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

    console.error(error);

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

    /* MENU */

    if (
      typeof initializeMenu ===
      "function"
    ) {

      initializeMenu();

    }

  }
);