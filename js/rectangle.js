var Rectangle = function (ctx, position, size, color, origin) {
	this.position = position;
	this.color = color;
	this.size = size;

	this.draw = function () {
		ctx.fillStyle = color;

		if (origin === Rectangle.orientation.CENTER) {
			var offsetW = this.position.x - size.width/2;
			var offsetH = this.position.y - size.height/2;
			ctx.fillRect(offsetW, offsetH, size.width, size.height);	
		} else {
			ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
		}
	};

	this.draw();
};

Rectangle.orientation = { CENTER:1, UPPER_LEFT:2 };