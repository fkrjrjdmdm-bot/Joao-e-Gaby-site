const inicio = new Date("2025-11-17T00:00:00");

function atualizarTempo() {

    const agora = new Date();

    let diferenca = agora - inicio;

    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    let horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    let minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    let segundos = Math.floor(
        (diferenca / 1000) % 60
    );


    document.getElementById("tempo").innerHTML =
    `${dias} dias ❤️ ${horas} horas ❤️ ${minutos} minutos ❤️ ${segundos} segundos`;
}


setInterval(atualizarTempo, 1000);

atualizarTempo();


function tocarMusica(){

    const musica = document.getElementById("musica");

    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }

}