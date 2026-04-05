window.addEventListener("load", () => {
  var html = document.querySelector("html");
  var theme = localStorage.getItem("theme") || "light";

  setTheme(theme);
  generateColors();
  brandmarkColors();

  html.style.visibility = "visible";

  var header_search = document.querySelector("#header-search");
  header_search.addEventListener("click", () => {
    var nav = document.querySelector("nav");
    var nav_search = document.querySelector("#nav-search");
    var nav_settings = document.querySelector("#nav-settings");
    showNavItem(nav, nav_search, nav_settings);
  });

  var header_settings = document.querySelector("#header-settings");
  header_settings.addEventListener("click", () => {
    var nav = document.querySelector("nav");
    var nav_search = document.querySelector("#nav-search");
    var nav_settings = document.querySelector("#nav-settings");
    showNavItem(nav, nav_settings, nav_search);
  });

  var nav_darklight_toggle = document.querySelector("#nav-darklight-toggle");
  nav_darklight_toggle.addEventListener("click", () => {
    theme = localStorage.getItem("theme");
    if (theme == "light") {
      setTheme("dark");
      brandmarkColors();
    }
    else {
      setTheme("light");
      brandmarkColors();
    }
  });
});

function setTheme(theme) {
  var root = document.documentElement;
  var styles = getComputedStyle(root);
  var properties = [
    "header-bg",
    "nav-bg",
    "nav-btn",
    "main-bg",
    "main-color"
  ];
  properties.forEach(property => {
    var value = styles.getPropertyValue(`--${theme}-${property}`);
    root.style.setProperty(`--${property}`, value);
  });
  localStorage.setItem("theme", theme);
}

function showNavItem(nav, show, hide) {
  if (!nav.classList.contains("nav-section-hidden") && !show.classList.contains("nav-hidden")) {
    nav.classList.add("nav-section-hidden");
  } 
  else if (!nav.classList.contains("nav-section-hidden") && show.classList.contains("nav-hidden")) {
    nav.classList.add("nav-section-hidden");
    setTimeout(() => {
      hide.classList.add("nav-hidden");
      show.classList.remove("nav-hidden");
      nav.classList.remove("nav-section-hidden");
    }, 200);
  }
  else {
    hide.classList.add("nav-hidden");
    show.classList.remove("nav-hidden");
    nav.classList.remove("nav-section-hidden");
  }
}

function generateColors() {
  var root = document.documentElement;
  var styles = getComputedStyle(root);
  
  var colors = [
    styles.getPropertyValue("--randomA"), 
    styles.getPropertyValue("--randomB"), 
    styles.getPropertyValue("--randomC"), 
    styles.getPropertyValue("--randomD"), 
  ];

  /* https://stackoverflow.com/a/46545530 */
  colors = colors
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  root.style.setProperty("--randomA", colors[0]);
  root.style.setProperty("--randomB", colors[1]);
  root.style.setProperty("--randomC", colors[2]);
  root.style.setProperty("--randomD", colors[3]);
}

function brandmarkColors() {
  var styles = getComputedStyle(document.documentElement);
  var brandmarks = document.querySelectorAll(".logo-brandmark");

  brandmarks.forEach(brandmark => {
    var svg = brandmark.contentDocument;  

    var elements = {
      "#ball1": "--randomA",
      "#ball2": "--randomB",
      "#ball3": "--randomC",
      "#pit": "--main-color"
    }

    Object.entries(elements).forEach(([id, color]) => {
      var element = svg.querySelector(id);
      element.setAttribute("fill", styles.getPropertyValue(color));
    });
  });

}
