const listWhiteKey = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
const listBlackKey = ['W', 'E', 'T', 'Y', 'U'];
const listGeneral = [...listWhiteKey, ...listBlackKey];

let audioElement = null;

document.addEventListener("keydown", evt => {
    let code = evt.code.slice('key'.length);

    if (listGeneral.includes(code)) {
        audioElement = createAudioElement('./media/', code);
        audioElement.play();
    } else {
        console.log(`Warning`);
    }
});

function createAudioElement(path, key, format = 'mp3') {
    const audio = document.createElement('AUDIO');
    audio.src = `${path}${key}.${format}`;
    audio.type = `audio/${format}`;

    return audio;
}