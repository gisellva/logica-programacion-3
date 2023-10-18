//logica  para calcular el factorial 
function calcularFactorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * calcularFactorial(n - 1);
    }
}
//manipualacion del dom 
document.addEventListener("DOMContentLoaded", function() {
    const numeroInput = document.getElementById("number");
    const calcularButton = document.getElementById("calcularButton");
    const resultado = document.querySelector(".result");
  
    calcularButton.addEventListener("click", function() {
      const numero = parseInt(numeroInput.value);
  // condicional para agregarle funcionalidad al boton 
      if (isNaN(numero)) {
        //uso de la libreria sweet alert 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'no es un numero',
            footer: 'debes ingresar un numero'
          })
      } else {
        const factorial = calcularFactorial(numero);
        resultado.textContent = `El factorial de ${numero} es ${factorial}`;
      }
    });
  });

  
  
  
  
  
  
  