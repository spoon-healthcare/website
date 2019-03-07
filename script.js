const FirstDrop = document.getElementsByClassName("drop-1");
const SecondDrop = document.getElementsByClassName("drop-2");

new simpleParallax(FirstDrop, {
	delay: 0.8,
	scale: 1.5,
	orientation: "down",
	overflow: true
});

new simpleParallax(SecondDrop, {
	delay: 1,
	scale: 1.2,
	orientation: "up",
	overflow: true
});
