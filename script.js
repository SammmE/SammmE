function playVideo() {
    // render video and remove old text
    document.getElementById("app").innerHTML = `
    <center>
        <video id="vid">
            <source src="/neverGonnaGiveYouUp.mp4">
        </video>
        <h1>No controls!</h1>
    </center>
    `;

    // get video
    var vid = document.getElementById("vid");

    // play it
    vid.play();
}
