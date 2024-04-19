const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let valor = this.textContent;
    if (pantalla.textContent === "Error!") {
      pantalla.textContent = "0";
    }
    if (valor === "=") {
      let contenido = pantalla.textContent;
      try {
        let resultado = eval(contenido);
        pantalla.textContent = resultado;
      } catch (error) {
        pantalla.textContent = "Error!";
      }
    } else if (valor !== "←") {
      if (pantalla.textContent === "0") {
        pantalla.textContent = valor;
      } else {
        pantalla.textContent += valor;
      }
    }
  });
});

document.getElementById("c").addEventListener("click", function () {
  pantalla.textContent = "0";
});

document.getElementById("borrar").addEventListener("click", function () {
  if (pantalla.textContent !== "Error!") {
    let contenido = pantalla.textContent;
    pantalla.textContent = contenido.substring(0, contenido.length - 1);
    if (pantalla.textContent === "") {
      pantalla.textContent = "0";
    }
  }
});
