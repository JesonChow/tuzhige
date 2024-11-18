var body = document.getElementsByTagName("body")[0];
//var $cta = document.querySelector(".cta");

var initDraw = function initDraw() {
  body.classList.add("is-active");
};

var initReading = function initReading(e) {
  var $t = e.target;
  body.classList.toggle("is-reading");

  if (body.classList.contains("is-reading")) {
    $t.innerHTML = "Show Images";
  } else {
    $t.innerHTML = "Read More";
  }
};

//$cta.addEventListener("click", initReading);

window.onload = initDraw;