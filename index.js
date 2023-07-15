function temaClaro(){
    let body = document.body;
    let botao = document.querySelector('.botao');
    body.classList.toggle('temaClaro');


    // se no body conter a 'classe TemaClaro', o botao vai receber o texto de 'tema escuro'.
    if (body.classList.contains("temaClaro")) {
        botao.textContent = "Tema Escuro";

       // se o body nao estiver no tema claro, o botao vai receber o texto de 'tema claro'.
      } else {
        botao.textContent = "Tema Claro";
      }
}