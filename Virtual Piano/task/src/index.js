document.addEventListener("keydown", evt => {
    const listWhiteKey = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
    const listBlackKey = ['W', 'E', 'T', 'Y', 'U'];
    const listGeneral = [...listWhiteKey, ...listBlackKey];
    let code = evt.code.slice('key'.length);

    if (listGeneral.includes(code)) {
        const audio = createAudioElement('./media/', code);
        audio.play();
    } else {
        console.log(`Warning`);
    }
});

function createAudioElement(path, key, format='mp3') {
    const audio = document.createElement('AUDIO');
    audio.src = `${path}${key}.${format}`;
    return audio;
}