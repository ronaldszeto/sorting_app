const beep = new(window.AudioContext || window.webkitAudioContext)();

export function playBeep(val){
    if (beep.state === 'suspended') {
       beep.resume();
    }
    const oscillator = beep.createOscillator();
    const volume = beep.createGain();
    oscillator.frequency.value = val * 10 + (Math.floor(Math.random() * 25) + 10)
    volume.gain.value = 0.02;
    oscillator.connect(volume);
    volume.connect(beep.destination);
    oscillator.start();
    oscillator.stop(beep.currentTime + 0.02)
};
