module.exports = User;

function User() {
    let videoCamera = document.createElement('video');
    start(videoCamera);
    Object.assign(videoCamera.style, {
        width: 45 + "%",
        height: 45 * 0.75 + "%"
    });
    document.body.appendChild(videoCamera)
}
function start() {
    console.log('Requesting local stream');
    const options = {audio: false, video: true};
    navigator.mediaDevices
        .getUserMedia(options)
        .then(gotStream)
        .catch(function(e) {
            alert('getUserMedia() failed');
            console.log('getUserMedia() error: ', e);
        });
}

function gotStream(stream) {
    let video = document.body.querySelector("video:nth-last-child(1)");
    video.srcObject = stream;
    video.play();
}

User.prototype.update = function (data) {

}