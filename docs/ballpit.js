window.addEventListener("load", () => {
  var theme = localStorage.getItem("theme") || "dark";
  var html = document.querySelector("html");
  var body = document.querySelector("body");
  var header = document.querySelector("header");
  var wordmark = document.querySelector("#header-logo-wordmark");
  var darkmode_icon = document.querySelector("#header-darkmode-icon");
  var brandmark = document.querySelector("#header-logo-brandmark");
  var brandmark_svg = brandmark.contentDocument;
  var brandmark_svg_pit = brandmark_svg.querySelector("#pit");

  if (theme == "dark") {
    darkmode(body, header, wordmark, darkmode_icon, brandmark_svg_pit);
  }
  else {
    lightmode(body, header, wordmark, darkmode_icon, brandmark_svg_pit);
  }

  brandmark_colors(brandmark_svg);
  html.style.visibility = "visible";

  darkmode_icon.addEventListener("click", () => {
    theme = localStorage.getItem("theme") || "light";
    darkmode_toggle(theme, body, header, wordmark, darkmode_icon, brandmark_svg_pit);
  });
});

function brandmark_colors(brandmark_svg){
  var brandmark_svg_ball1 = brandmark_svg.querySelector("#ball1");
  var brandmark_svg_ball2 = brandmark_svg.querySelector("#ball2");
  var brandmark_svg_ball3 = brandmark_svg.querySelector("#ball3");
  var styles = getComputedStyle(document.documentElement);

  var colors = [
    styles.getPropertyValue("--red"),
    styles.getPropertyValue("--orange"),
    styles.getPropertyValue("--green"),
    styles.getPropertyValue("--purple"),
  ]
  
  /* https://stackoverflow.com/a/46545530 */
  var brandmark_colors = colors
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  brandmark_svg_ball1.setAttribute("fill", brandmark_colors[0]);
  brandmark_svg_ball2.setAttribute("fill", brandmark_colors[1]);
  brandmark_svg_ball3.setAttribute("fill", brandmark_colors[2]);
}

function darkmode_toggle(theme, body, header, wordmark, darkmode_icon, brandmark_svg_pit){
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
    darkmode(body, header, wordmark, darkmode_icon, brandmark_svg_pit);
  }
  else {
    localStorage.setItem("theme", "light");
    lightmode(body, header, wordmark, darkmode_icon, brandmark_svg_pit);
  }
}

function darkmode(body, header, wordmark, darkmode_icon, brandmark_svg_pit){
  body.style.backgroundColor = "#222222";
  header.style.backgroundColor = "#101010";
  header.style.color = "#FFFFFF";
  darkmode_icon.className = "fa-solid fa-sun";
  brandmark_svg_pit.setAttribute("fill", "#FFFFFF");
}

function lightmode(body, header, wordmark, darkmode_icon, brandmark_svg_pit){
  body.style.backgroundColor = "#FFFFFF";
  header.style.backgroundColor = "#FAFAFA";
  header.style.color = "#000000";
  darkmode_icon.className = "fa-regular fa-moon";
  brandmark_svg_pit.setAttribute("fill", "#000000");
}