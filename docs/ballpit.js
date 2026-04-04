window.addEventListener("load", () => {
  var html = document.querySelector("html");

  generateColors();
  brandmarkColors();

  html.style.visibility = "visible";
});

function generateColors() {
  var root = document.documentElement;
  var colors = ["#E13D3D", "#FEC24D", "#50BB85", "#8F79EC"];

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

function brandmarkColors(){
  var styles = getComputedStyle(document.documentElement);
  var brandmark = document.querySelector("#header-logo-brandmark");
  var brandmark_svg = brandmark.contentDocument;  
  var brandmark_svg_ball1 = brandmark_svg.querySelector("#ball1");
  var brandmark_svg_ball2 = brandmark_svg.querySelector("#ball2");
  var brandmark_svg_ball3 = brandmark_svg.querySelector("#ball3");
  var brandmark_svg_pit = brandmark_svg.querySelector("#pit");

  brandmark_svg_ball1.setAttribute("fill", styles.getPropertyValue("--randomA"));
  brandmark_svg_ball2.setAttribute("fill", styles.getPropertyValue("--randomB"));
  brandmark_svg_ball3.setAttribute("fill", styles.getPropertyValue("--randomC"));
  brandmark_svg_pit.setAttribute("fill", styles.getPropertyValue("--dark"));
}
