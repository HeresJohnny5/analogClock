const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
	var date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	console.log("Hour " + hr + ": " + min + " minutes" + ": " + sec + " seconds.");

	let hrPosition = (hr * 360/12) + (min * (360/60)/12);
	/* (current hour * clock degrees/12 hours on the clock) + (current minute * (clock degrees/60)/60) */
	let minPosition = (min * 360/60) + (sec * (360/60)/60);
	/* (current minute * clock degrees/60 minutes in a hour) + (current seconds * (clock degrees/60)/60) */
	let secPosition = sec * 360/60;
	// current seconds * clock degrees/60 seconds in a minute

	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);