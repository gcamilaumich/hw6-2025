var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log("")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Played Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 +"%";
	console.log("Volume is at: " + video.volume * 100 + "%");});

document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Paused Video");
	});

document.getElementById("slower").addEventListener("click", function() {
	console.log("Slowed down to:"+ video.playbackRate.toFixed(5));
	video.playbackRate *= 0.9;
});

document.getElementById("faster").addEventListener("click", function() {
	console.log("Sped up to:" + video.playbackRate.toFixed(5));
	video.playbackRate /= 0.9;
});

document.getElementById("mute").addEventListener("click", function() {
	// Think python for this//
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Unmuted Video");
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Muted Video");
	}
	});

	document.querySelector("#skip").addEventListener("click", function () {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
			console.log("Restarted video");
		}
		else {
			video.currentTime += 10; 
			console.log ("Skipped ahead:" + video.currentTime);
			}
		});

		document.querySelector("#slider").addEventListener("input", function () {
			video.volume = this.value / 100;
			document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
			console.log("Volume is at" + video.volume * 100 + "%")
		});

		document.querySelector("#vintage").addEventListener("click", function () {
			video.classList.add("oldSchool");
			console.log("Applied oldSchool style");
		});

		document.querySelector("#orig").addEventListener("click", function () {
			video.classList.remove("oldSchool");
			console.log("Removed oldSchool style");
		});








