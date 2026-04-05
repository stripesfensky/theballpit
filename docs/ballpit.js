window.addEventListener("load", () => {
  var html = document.querySelector("html");

  generateColors();
  brandmarkColors();

  html.style.visibility = "visible";
});

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
