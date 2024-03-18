var audio = new Audio();
var playPauseButton = document.getElementById('playPause');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');
var volumeSlider = document.getElementById('volumeSlider');
var radios = document.querySelectorAll('#listaRadios li');
var currentRadio = 0;

audio.volume = 1; // Volumen inicial al máximo

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '&#10074;&#10074;'; // Ícono de pausa
    } else {
        audio.pause();
        playPauseButton.innerHTML = '&#9658;'; // Ícono de play
    }
}

function prevRadio() {
    currentRadio = (currentRadio - 1 + radios.length) % radios.length;
    cambiarRadio(radios[currentRadio].getAttribute('data-url'));
}

function nextRadio() {
    currentRadio = (currentRadio + 1) % radios.length;
    cambiarRadio(radios[currentRadio].getAttribute('data-url'));
}

function cambiarRadio(url) {
    audio.src = url;
    audio.play();
    playPauseButton.innerHTML = '&#10074;&#10074;'; // Cambiar a ícono de pausa al cambiar de radio
}

function setVolume() {
    audio.volume = volumeSlider.value;
}

// Reproducir automáticamente la primera radio al cargar la página
cambiarRadio(radios[0].getAttribute('data-url'));
