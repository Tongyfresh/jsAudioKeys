window.addEventListener('keydown', function(e) {
    console.log(audio)
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const audio = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!audio) return; // stop the function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
});
