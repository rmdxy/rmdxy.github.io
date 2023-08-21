window.onload = function () {
    var images = document.getElementsByTagName('img'),
    totalImages = images.length,
    imagesLoaded = 0,
    img;

    function checkForLoaded() {

        if(imagesLoaded === totalImages) {

            function change() {
                var loadingDiv = document.getElementById('loadingDiv');
                loadingDiv.style.visibility = "hidden";

                loadingDiv.style.opacity = "0";

            }
            setTimeout(change, 50);
        }
    }


    for (var i = 0; i < totalImages; i++) {
        img = new Image();

        img.onload = function () {
            imagesLoaded++;
            checkForLoaded();
        }
        img.src = images[i].src;
    }
}

function functionFoodTruck() {
  document.getElementById("foodtruck-thumbnail)").className = "visible";
}

function functionHypnagogia() {
    document.getElementById("hypnagogia-thumbnail").className = "visible";
}

function functionGoogle() {
    document.getElementById("google-thumbnail").className = "visible";
}

function functionTripView() {
    document.getElementById("tripview-thumbnail").className = "visible";
}

function functionBoldr() {
    document.getElementById("boldr-thumbnail").className = "visible";
}

function functionVisuals() {
    document.getElementById('visuals-thumbnail').className = "visible";
}
function functionAbout() {
    document.getElementById("about-thumbnail").className = "visible";
}

function functionOut(id) {
    document.getElementById(id).className = "hidden";
}

function about() {
    document.getElementById('me-text').style.transition = "all 1s ease-in-out";
    document.getElementById('me-text').innerHTML = "raymondli200@gmail.com";

}

function out() {
    document.getElementById('me-text').style.transition = "all 1s ease-in-out";
    document.getElementById('me-text').innerHTML = "Raymond Li";

}