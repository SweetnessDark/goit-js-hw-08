import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const VIDEO_CURRENT_TIME = "videoplayer-current-time";

player.on('play', function() {
    console.log("played the video!")
})

const onPlay = function(data) {
    console.log(data.seconds);
    const currentTime = data.seconds

    localStorage.setItem(VIDEO_CURRENT_TIME, currentTime)
};

player.on('play', onPlay);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

let localCurrentVideo = localStorage.getItem(VIDEO_CURRENT_TIME);
console.log(localCurrentVideo);

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
            
            default:
                // some other error occurred
                break;
            }
});
        
player.on('timeupdate', throttle(onPlay, 1000));   
