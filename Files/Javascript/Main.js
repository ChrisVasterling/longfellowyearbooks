var db, tg, isfullscreen = false
function toggleFullScreen(){
	tg = document.getElementById("toggle");
	db = document.getElementById("slideshow");
	sc = document.getElementById("scontrols");
	if(isfullscreen == false){
	if(db.requestFullScreen){
	    db.requestFullScreen();
	} else if(db.webkitRequestFullscreen){
	    db.webkitRequestFullscreen();
	} else if(db.mozRequestFullScreen){
	    db.mozRequestFullScreen();
	} else if(db.msRequestFullscreen){
	    db.msRequestFullscreen();
	}
	isfullscreen = true;
	tg.innerHTML = "Exit";
	db.style.width = "100%";
	db.style.height = "100%";
	db.style.margin = "0px";
	db.style.borderRadius = "0px";
	sc.style.borderRadius = "0px";
} else {
	if(document.cancelFullScreen){
	    document.cancelFullScreen();
	} else if(document.exitFullScreen){
	    document.exitFullScreen();
	} else if(document.mozCancelFullScreen){
	    document.mozCancelFullScreen();
	} else if(document.webkitCancelFullScreen){
	    document.webkitCancelFullScreen();
	} else if(document.msExitFullscreen){
	    document.msExitFullscreen();
	}
		isfullscreen = false;
	tg.innerHTML = "Fullscreen"
	db.style.width = "calc(100% - 400px)";
	db.style.height = "500px";
	db.style.marginLeft = "auto";
	db.style.marginRight = "auto";
	db.style.marginBottom = "40px";
	db.style.borderRadius = "10px";
	sc.style.borderTopLeftRadius = "10px";
	sc.style.borderBottomLeftRadius = "10px";
}
}
function simg1sidplay() {
	var ss  = document.getElementById("slideshow");
	ss.style.backgroundImage = 'url(Files/Images/Slideshow/1_opt.jpg)';
}
function simg2sidplay() {
	var ss  = document.getElementById("slideshow");
	ss.style.backgroundImage = 'url(Files/Images/Slideshow/2_opt.jpg)';
}
function simg3sidplay() {
	var ss  = document.getElementById("slideshow");
	ss.style.backgroundImage = 'url(Files/Images/Slideshow/3_opt.jpg)';
}
function simg4sidplay() {
	var ss  = document.getElementById("slideshow");
	ss.style.backgroundImage = 'url(Files/Images/Slideshow/4_opt.jpg)';
}
function simg5sidplay() {
	var ss  = document.getElementById("slideshow");
	ss.style.backgroundImage = 'url(Files/Images/Slideshow/5_opt.jpg)';
}
var slideshow = setInterval(slideshow, 2500 /*5000?*/);
var img = 0;
var imgselect = 0;
function slideshow() {
	if ( img >= 0 ) {
		img = img + 1
		imgselect = imgselect + 1
		var ss  = document.getElementById("slideshow");
		ss.style.backgroundImage = 'url(Files/Images/Slideshow/' + imgselect + '_opt.jpg)';
		if ( imgselect == 5 || imgselect >= 5 ) {
			imgselect = 0
			img = 0
		} else {
			/**/
		}
	} else {
		/**/
	}
}