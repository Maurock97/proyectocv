
const botonCambiarColor = document.getElementById("cambiar-color");

botonCambiarColor.addEventListener("click", () => {

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);


  const colorAleatorio = `rgb(${r}, ${g}, ${b})`;
  
  document.body.style.backgroundColor = colorAleatorio;
});
