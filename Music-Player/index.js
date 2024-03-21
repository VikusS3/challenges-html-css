const musics = [
    {
        img: 'assets/img/cover-1.jpg',
        music: 'assets/audio/forest-lullaby-110624.mp3',
        songName: 'Lost in the City Lights',
        artist: 'Cosmo Sheldrake'
    },
    {
        img: 'assets/img/cover-2.jpg',
        music: 'assets/audio/lost-in-city-lights-145038.mp3',
        songName: 'Forest Lullaby',
        artist: 'Lesfm'
    }
];

let timeCurrent = document.querySelector('.time-current');
let timeTotal = document.querySelector('.time-total');
let songSlider = document.querySelector('.song-slider');
let trackImage = document.querySelector('.trak-img');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const playBtn = document.querySelector('.button-play-stop');
const playPrev = document.querySelector('.button-prev');
const playNext = document.querySelector('.button-next');
let currentTrack = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let updateTimer;

const reset = () => {
    timeCurrent.textContent = '00:00';
    timeTotal.textContent = '00:00';
    songSlider.value = 0;
};

const loadTrack = (track_index) => {
    clearInterval(updateTimer);
    reset();

    currentTrack.src = musics[track_index].music;
    currentTrack.load();

    trackImage.setAttribute('src', musics[track_index].img);
    trackName.textContent = musics[track_index].songName;
    trackArtist.textContent = musics[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);

    currentTrack.addEventListener('ended', () => {
        nextTrack();
    });
};

const playPauseTrack = () => {
    isPlaying ? pauseTrack() : playTrack();
};

const playTrack = () => {
    currentTrack.play();
    isPlaying = true;
    playBtn.innerHTML = ' <img src="assets/Stop_and_play_fill.svg" alt="prev" />';
};

const pauseTrack = () => {
    currentTrack.pause();
    isPlaying = false;
    playBtn.innerHTML = ' <img src="assets/Play_fill.svg" alt="prev" />';
};

const nextTrack = () => {
    track_index = (track_index + 1) % musics.length;
    loadTrack(track_index);
    playTrack();
};

const prevTrack = () => {
    track_index = (track_index - 1 + musics.length) % musics.length;
    loadTrack(track_index);
    playTrack();
};

const setUpdate = () => {
    let seekPosition = 0;
    let position = currentTrack.currentTime;
    let duration = currentTrack.duration;

    if (!isNaN(duration)) {
        seekPosition = (position / duration) * 100;
        songSlider.value = seekPosition;

        songSlider.style.background = `linear-gradient(to right, #C93B76 ${songSlider.value}%, #fff ${songSlider.value}%)`;
        songSlider.style.boxShadow = `0px 0px 4px 0px #C93B76`;

        timeCurrent.textContent = `${formatTime(position)}`;
        timeTotal.textContent = `${formatTime(duration)}`;
    }
    
}

const seekSlider = () => {
    let seekTo = currentTrack.duration * (songSlider.value / 100);
    currentTrack.currentTime = seekTo;
    // Actualizar el tiempo actual mientras el usuario arrastra la barra de reproducción
    timeCurrent.textContent = `${formatTime(seekTo)}`;
};

const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`;
};


loadTrack(track_index)
