window.addEventListener("load", () => {
  var icon = document.querySelector("#header-darkmode-icon");
  icon.addEventListener("click", () => {
    darkmode(icon);
  });
});

function darkmode(icon){
  var header = document.querySelector("header");
  var brandmark = document.querySelector("#header-logo-brandmark");
  var brandmark_bm_black = brandmark.querySelector("#bm_black");
  var wordmark = document.querySelector("#header-logo-wordmark");

  if (icon.className == "fa-solid fa-moon"){
    header.style.backgroundColor = "#101010";
    brandmark_bm_black.setAttribute("fill", "white");
    wordmark.style.color = "#FFFFFF";
    icon.className = "fa-regular fa-sun";
    icon.style.color = "#FFFFFF";
  }

  else {
    header.style.backgroundColor = "#FFFFFF"
    bm_black.setAttribute("fill", "black");
    wordmark.style.color = "#000000";
    icon.className = "fa-solid fa-moon";
    icon.style.color = "#000000";
  }
}