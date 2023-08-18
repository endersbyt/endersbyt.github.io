var images;
var index = 0;
//save image array and show first image
function setup(array) {
	images = array;
	setImage();
}
//go back to previous picture and show
function prev() {
	index--;
	//if past 0, go to end
	if (index < 0) {
		index = images.length - 1;
	}
	setImage();
}
//advance to next picture and show
function next() {
	index++;
	//if past end, go to 0
	if (index >= images.length) {
		index = 0;
	}
	setImage();
}
//set image to a specific index
//defaults to boundaries if out of bounds
function setToIndex(newIndex) {
	index = newIndex;
	//index out of bounds, set to boundary
	if (index < 0) {
		index = 0;
	}
	else if (index >= images.length) {
		index = images.length - 1;
	}
	setImage();
}
//set image to a specific image
//defaults to 0 if not found
function setToImage(path) {
	//find image index
	index = images.indexOf(path);
	//image not found
	if (index < 0) {
		index = 0;
	}
	setImage();
}
//show image at current index
function setImage() {
	//document.getElementById('Fullscreen').style.background_image = images[index];
	$('#Fullscreen').css('background-image', 'url(' + images[index] + ')');
}
//detect keypress and change picture
document.onkeydown = function (e) {
	e = e || window.event;
	switch (e.keyCode) {
	case 37: //left
		prev();
		break;
	case 39: //right
		next();
		break;
	case 65: //a
		prev();
		break;
	case 68: //d
		next();
		break;
	case 27: //d
		closeOut();
		break;
	}
};