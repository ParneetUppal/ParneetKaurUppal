// Updated Nerdy JavaScript for Parneet's Portfolio

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Add nerdy effect to the menu when toggled
  if (menu.classList.contains("open")) {
    console.log("🟢 Menu Opened: Welcome to the Nerd Zone!");
  } else {
    console.log("🔴 Menu Closed: Back to Coding...");
  }
}

// Function to handle theme switching for a nerdy experience
function switchTheme(theme) {
  const root = document.documentElement;

  const themes = {
    dark: {
      "--bg-color": "#1e1e2e",
      "--text-color": "#e0e0e0",
      "--accent-color": "#ffa500",
    },
    light: {
      "--bg-color": "#f9f9f9",
      "--text-color": "#1e1e2e",
      "--accent-color": "#ff4500",
    },
  };

  const selectedTheme = themes[theme];
  if (selectedTheme) {
    for (const [key, value] of Object.entries(selectedTheme)) {
      root.style.setProperty(key, value);
    }
    console.log(`🔁 Theme switched to: ${theme.toUpperCase()}`);
  } else {
    console.error("❌ Theme not found");
  }
}

// Initialize theme toggle buttons
document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll(".theme-toggle");

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme;
      switchTheme(theme);
    });
  });
});
