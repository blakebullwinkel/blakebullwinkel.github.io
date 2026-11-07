(() => {
  const root = document.documentElement;
  let theme = "dark";

  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      theme = savedTheme;
    } else if (savedTheme !== null) {
      console.warn("Ignoring an unrecognized saved theme.");
    }
  } catch (error) {
    if (!(error instanceof DOMException) || error.name !== "SecurityError") {
      throw error;
    }
    console.warn("Theme storage is unavailable; using dark mode.", error);
  }

  root.dataset.theme = theme;

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".theme-toggle");
    if (!(toggle instanceof HTMLButtonElement)) {
      throw new Error("Missing theme toggle button.");
    }

    const updateLabel = () => {
      const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
      toggle.setAttribute("aria-label", label);
      toggle.title = label;
    };

    updateLabel();
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      root.dataset.theme = theme;
      updateLabel();

      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        if (!(error instanceof DOMException) ||
            !["SecurityError", "QuotaExceededError"].includes(error.name)) {
          throw error;
        }
        console.warn("Could not save the theme; this choice only applies to the current page.", error);
      }
    });
  });
})();
