const beep = new(window.AudioContext || window.webkitAudioContext)();

export function playBeep(val){
    // turns it back on if user clicked off
    if (beep.state === 'suspended') {  
       beep.resume();
    }

    const oscillator = beep.createOscillator();
    const volume = beep.createGain();

    // randomly picks frequency 
    oscillator.frequency.value = val * 12 + (Math.floor(Math.random() * 27) + 10)
    volume.gain.value = 0.02;
    oscillator.connect(volume);
    volume.connect(beep.destination);
    oscillator.start();
    oscillator.stop(beep.currentTime + 0.02)
};
