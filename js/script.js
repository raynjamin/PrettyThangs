var canvas = document.getElementById('main');
var logo = document.getElementById('dvdLogo');
var ctx = canvas.getContext('2d');

// var position = { x: canvas.width/2, y: canvas.height/2 };
// var size = { width: 50, height: 50 };
// var rect = new Rectangle(ctx, position, size, '#00ff00', Rectangle.orientation.CENTER);

var logo = new BouncyBox(ctx, 'img/DVD_logo.jpg');