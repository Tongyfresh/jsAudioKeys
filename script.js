const pressedKeys = new Set();


function playSound(e) {
    if (pressedKeys.has(e.key)) return;
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!audio) return; // stop the function from running
    
    pressedKeys.add(e.key);
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}


function releaseKey(e) {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!key) return;
    key.classList.remove('playing');
    pressedKeys.clear(e.key);

}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', releaseKey));
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', releaseKey);
