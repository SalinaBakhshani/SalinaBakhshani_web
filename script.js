
const languageSwitch =
  document.getElementById("languageSwitch");

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");

// Language switcher

function setLanguage(language) {

  document.documentElement.lang = language;

  document.documentElement.dir =
    language === "fa" ? "rtl" : "ltr";

  document.body.classList.toggle(
    "fa",
    language === "fa"
  );

  document.querySelectorAll(
    "[data-en][data-fa]"
  ).forEach((element) => {

    element.innerHTML =
      element.dataset[language];

  });

  languageSwitch.textContent =
    language === "en" ? "FA" : "EN";

  localStorage.setItem(
    "salina-site-language",
    language
  );
}

// Change language on click

languageSwitch.addEventListener("click", () => {

  const nextLanguage =
    document.documentElement.lang === "en"
      ? "fa"
      : "en";

  setLanguage(nextLanguage);

});

// Mobile menu

menuToggle.addEventListener("click", () => {

  const isOpen =
    mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});

// Close menu after navigation

mainNav.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});

// Current year

document.getElementById("year").textContent =
  new Date().getFullYear();

// Restore saved language

const savedLanguage =
  localStorage.getItem("salina-site-language") || "en";

setLanguage(savedLanguage);
