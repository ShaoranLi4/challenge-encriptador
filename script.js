// script.js
function encriptar() {
    const inputText = document.getElementById('inputText').value;
    const encriptado = cifrarTexto(inputText.toLowerCase());
    
    document.getElementById('outputText').innerText = `Texto Encriptado: ${encriptado}`;
    
    // Agregar al historial
    agregarAlHistorial(encriptado);
  }
  
  function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    const desencriptado = descifrarTexto(inputText.toLowerCase());
    
    document.getElementById('outputText').innerText = `Texto Desencriptado: ${desencriptado}`;
    
    // Agregar al historial
    agregarAlHistorial(desencriptado);
  }
  
  function cifrarTexto(texto) {
    // Un ejemplo simple de cifrado de sustitución
    return texto.replace(/a/g, 'q').replace(/e/g, 'x').replace(/i/g, 'j').replace(/o/g, 'z').replace(/u/g, 'y');
  }
  
  function descifrarTexto(texto) {
    // Deshacer el cifrado de sustitución
    return texto.replace(/q/g, 'a').replace(/x/g, 'e').replace(/j/g, 'i').replace(/z/g, 'o').replace(/y/g, 'u');
  }
  
  function agregarAlHistorial(texto) {
    const historial = document.getElementById('historial');
    const listItem = document.createElement('li');
    listItem.innerText = texto;
    historial.appendChild(listItem);
  }
  
  function limpiar() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerText = '';
    
    // Limpiar el historial
    const historial = document.getElementById('historial');
    while (historial.firstChild) {
      historial.removeChild(historial.firstChild);
    }
  }
  
  