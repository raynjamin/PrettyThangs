var BouncyBox = function (ctx, filePath) {
	this.img = null;
	this.animationInterval = null;

	var x = 1;
	var slope = -1*Math.random();

	(function constructor() {
		// add image element to dom
		this.img = document.createElement('img');
		this.img.src= filePath;
		this.img.id = 'test';
		this.img.onload = function (image) {
			ctx.drawImage(image.srcElement, 0, 0);
		};

		document.body.appendChild(this.img);
		this.img.setAttribute('style', "display:none;");
	}.bind(this)());	

	this.start = function () {
		this.animationInterval = setInterval(function () { 
			clearCanvas();
			updatePosition();
		}, 1);

		this.colorInterval = setInterval(function () { 			
			randomizeColor();
		}, 1000);
	};

	var clearCanvas = function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	var updatePosition = function () {
		// calculate distance to borders
		// increment x/y based off slope,
		// maxxed to distance.
		// if distance hit, rebound off wall
	};

	var randomizeColor = function () {
		// apply randomized color filter to this.img

	};
};