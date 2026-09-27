const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sprite_nofile = new Image;
sprite_nofile.src = "icon.png";

const x = canvas.width / 2;
const y = canvas.height / 2;

let clone = []

let arrowright = false;
let arrowleft = false;
let arrowup = false;
let arrowdown = false;

document.addEventListener('keydown', (event) => {
	if (event.key === "ArrowLeft") {
		arrowleft = true;
	};
	if (event.key === "ArrowRight") {
		arrowright = true;
	};
	if (event.key === "ArrowDown") {
		arrowdown = true;
	};
	if (event.key === "ArrowUp") {
		arrowup = true;
	};
});
document.addEventListener('keyup', (event) => {
	if (event.key === "ArrowLeft") {
		arrowleft = false;
	};
	if (event.key === "ArrowRight") {
		arrowright = false;
	};
	if (event.key === "ArrowDown") {
		arrowdown = false;
	};
	if (event.key === "ArrowUp") {
		arrowup = false;
	};
});

class player {
	constructor(x, y, r, width, height, layer) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.width = width;
		this.height = height;
		this.layer = layer;
	};
	
	update() {
		if (arrowleft === true) {
			this.x = Math.round((this.x - 3) * 10) / 10;
		};
		if (arrowright === true) {
			this.x = Math.round((this.x + 3) * 10) / 10;
		};
		if (arrowdown === true) {
			this.y = Math.round((this.y + 3) * 10) / 10;
		};
		if (arrowup === true) {
			this.y = Math.round((this.y - 3) * 10) / 10;
		};
	};
	
	draw() {
		ctx.save();
		
		ctx.translate(this.x, this.y);
		ctx.rotate(this.r * Math.PI / 180);
		ctx.drawImage(sprite_nofile, -this.width / 2, -this.height / 2, this.width, this.height);
		
		ctx.restore();
	};
};

function loop() {
	//console.log("sss");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	clone.sort((a, b) => a.layer - b.layer);
	clone = clone.filter(clones => !clones.destroy);
	clone.forEach(clones => {
		clones.draw();
		clones.update();
	});
	requestAnimationFrame(loop);
};

sprite_nofile.onload = function() {
	clone.push(new player(x, y + 100, 0, 50, 50, 10));
	loop();
};
