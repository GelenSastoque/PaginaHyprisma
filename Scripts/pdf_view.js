document.getElementById('botonpdf1').addEventListener('click', function() {
  mostrarElemento('pdf1');
  ocultarElemento('pdf2');
  ocultarElemento('pdf3');
});

document.getElementById('botonpdf2').addEventListener('click', function() {
  mostrarElemento('pdf2');
  ocultarElemento('pdf1');
  ocultarElemento('pdf3');
});

document.getElementById('botonpdf3').addEventListener('click', function() {
  mostrarElemento('pdf3');
  ocultarElemento('pdf1');
  ocultarElemento('pdf2');
});

function mostrarElemento(id) {
  document.getElementById(id).style.display = 'block';
}

function ocultarElemento(id) {
  document.getElementById(id).style.display = 'none';
}


