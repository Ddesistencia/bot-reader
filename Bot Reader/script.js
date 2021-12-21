const utterance = new SpeechSynthesisUtterance();

utterance.lang = "en-US"; // This sentence set the language who will be speeaked //
utterance.rate = 1.25; // This sentence set the speed of reading //
utterance.volume = 0.5; // This sentence set the volume of the voice //

function speak(){
  speechSynthesis.speak(utterance);
}

function stop(){
  speechSynthesis.cancel();
}

function setText(event) {
	utterance.text = event.target.innerText;
}
