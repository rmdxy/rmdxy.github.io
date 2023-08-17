window.onload = function () {
    var images = document.getElementsByTagName('img'),
    totalImages = images.length,
    imagesLoaded = 0,
    img;

    function checkForLoaded() {
        if(imagesLoaded === totalImages) {
            document.getElementById('body').style.overflowY = "auto";
            function change() {
                var loadingDiv = document.getElementById('loadingDiv');
                loadingDiv.style.opacity = "0";
                loadingDiv.style.visibility = "hidden";
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