// TIMING DROP-DOWN MENU

const Timing = document.querySelector('#Timing');
const TimingButton = document.querySelector('#TimingButton');

TimingButton.addEventListener('click', () => visibility());
    
    function visibility() {
        var TimeOptions = document.querySelector('.time-options');
        if (TimeOptions.style.display === 'none') {
            TimeOptions.style.display = 'block';
        } else {
            TimeOptions.style.display = 'none';
        }
    }

    function removeText() {
        const TimingText = document.querySelector('.timing-text');
        TimingText.style.display = 'none';
    } 


// SCENARY DROP-DOWN MENU

const Background = document.querySelector('#Background');
const BackgroundButton = document.querySelector('#BackgroundButton');

BackgroundButton.addEventListener('click', () => visibility2());

    
    function visibility2() {
        var ScenaryOptions = document.querySelector('.scenary-options');
        if (ScenaryOptions.style.display === 'none') {
            ScenaryOptions.style.display = 'block';
        } else {
            ScenaryOptions.style.display = 'none';
        }
    }

    function removeText2() {
        const BackgroundText = document.querySelector('.background-text');
        BackgroundText.style.display = 'none';
    } 

    function closeAllVisibility () {
        var TimeOptions = document.querySelector('.time-options');
        var ScenaryOptions = document.querySelector('.scenary-options');
        TimeOptions.style.display = 'none';
        ScenaryOptions.style.display = 'none';
    }

    function removeAllText () {
        removeText();
        removeText2();
    }


const meditate = () => {
    const track = document.querySelector('.track');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.background-video video');


    const sounds = document.querySelectorAll('.scenary button')

    const countdown = document.querySelector('.countdown');
    const timeSelection = document.querySelectorAll('.buttonTime')

    const outlineLength = outline.getTotalLength();
    // 1360.50146484375

    // Duration
    let testDuration = 60;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;


    // play
    play.addEventListener('click', () => {
        checkIfPlaying(video);
    });

    timeSelection.forEach(option => {
        option.addEventListener('click', function() {
            testDuration = this.getAttribute('data-time');
            countdown.textContent = `${Math.floor(testDuration/60)}:${Math.floor(testDuration%60)}`;

        });
    });

    function removeNavbar() {
        var Navbar = document.querySelector('.navbar');
        if (video.paused) {
            Navbar.style.display = 'block';
        } else {
            Navbar.style.display = 'none';
        }
    }

    // function for play/pause the song 
    const checkIfPlaying = video =>{
    if (video.paused) {
        video.play();
        // add song.play
        play.src = './svg/pause.svg';
    } else {
        video.pause();
        play.src = './svg/001-play.svg';
    }
}

    video.ontimeupdate = () => {
        let currentTime = video.currentTime;
        let elapsed = testDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);


        let formattedMinutes= minutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });

        let formattedSeconds= seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });

        // Circle Animation
        let progress = outlineLength - (currentTime / testDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        // Text Animation
        countdown.textContent = `${formattedMinutes}:${formattedSeconds}`;

        // Countdown reach 0
        if(currentTime >= testDuration) {
            track.src = 'audio/19547__tobi123__klangschale-weich-ff.wav';
            track.play();
            video.currentTime = 0;
            video.pause();
            
            play.src = 'svg/001-play.svg';
        }
    }



    // SCENARY

const Beachbutton = document.querySelector('#Beach');
const Campingbutton = document.querySelector('#Camping');
const Bonfirebutton = document.querySelector('#Campfire');
const Thunderstormbutton = document.querySelector('#Thunderstorm');
const Desertbutton = document.querySelector('#Desert');
const Drivebutton = document.querySelector('#Drive');
const Coffeebutton = document.querySelector('#Coffee');
const Librarybutton = document.querySelector('#Library');


Beachbutton.addEventListener('click', () => {
    video.src = 'https://oasis-media-audio.s3-us-west-2.amazonaws.com/video/Beach.mp4';
    video.play();
    play.src = 'svg/pause.svg';
    closeAllVisibility();
    removeAllText();
})

Campingbutton.addEventListener('click', () => {
    video.src = 'https://oasis-media-audio.s3-us-west-2.amazonaws.com/video/Camping.mp4';
    video.play();
    play.src = 'svg/pause.svg';
    closeAllVisibility();
    removeAllText();
})

Bonfirebutton.addEventListener('click', () => {
    video.src = 'https://oasis-media-audio.s3-us-west-2.amazonaws.com/video/Campfire.mp4';
    video.play();
    play.src = 'svg/pause.svg';
    closeAllVisibility();
    removeAllText();
})

Thunderstormbutton.addEventListener('click', () => {
    video.src = 'https://oasis-media-audio.s3-us-west-2.amazonaws.com/video/Thunderstorm.mp4';
    video.play();
    play.src = 'svg/pause.svg';
    closeAllVisibility();
    removeAllText();
})

Desertbutton.addEventListener('click', () => {
    video.src = 'https://oasis-media-audio.s3-us-west-2.amazonaws.com/video/Desert.mp4';
    video.play();
    play.src = 'svg/pause.svg';
    closeAllVisibility();
    removeAllText();
})

Drivebutton.addEventListener('click', () => {
    video.src = 'https://oasis-media-audio.s3-us-west-2.amazonaws.com/video/Drive.mp4';
    video.play();
    play.src = 'svg/pause.svg';
    closeAllVisibility();
    removeAllText();
})

Coffeebutton.addEventListener('click', () => {
    video.src = 'https://oasis-media-audio.s3-us-west-2.amazonaws.com/video/Coffee.mp4';
    video.play();
    play.src = 'svg/pause.svg';
    closeAllVisibility();
    removeAllText();
})

Librarybutton.addEventListener('click', () => {
    video.src = 'https://oasis-media-audio.s3-us-west-2.amazonaws.com/video/Library.mp4';
    video.play();
    play.src = 'svg/pause.svg';
    closeAllVisibility();
    removeAllText();
})
};

meditate();