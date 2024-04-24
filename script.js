let Speech = new SpeechSynthesisUtterance();

let voices =[];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    };

document.querySelector("button").addEventListener("click", () => {
    Speech.text =document.querySelector("textarea").value;
    window.speechSynthesis.speak(Speech);
})