/* ==========================================
   MENU MOBILE
========================================== */

function initializeMenu() {

  const toggle =
    document.getElementById(
      "menuToggle"
    );

  const nav =
    document.getElementById(
      "mainNav"
    );

  if (!toggle || !nav) {

    console.warn(
      "Menu ainda não carregado."
    );

    return;

  }

  toggle.addEventListener(
    "click",
    () => {

      nav.classList.toggle(
        "active"
      );

      const expanded =
        toggle.getAttribute(
          "aria-expanded"
        ) === "true";

      toggle.setAttribute(
        "aria-expanded",
        !expanded
      );

    }
  );

}