function tocaSom(selectorAudio) {
  const elemento = document.querySelector(selectorAudio);


  if (elemento && elemento.localName === "audio") {
          elemento.play();
    
  } else{
     //alert('Elemento não encontrado')
     console.log("Elemento não encontrado or invalid selector");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  /*ações de teclado */
  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }

    tecla.onkeyup = function () {
      tecla.classList.remove("ativa");
    };
  };
}
