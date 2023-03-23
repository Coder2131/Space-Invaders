const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
  constructor() {
    this.position = {
      x: 200,
      y: 200,
    }

    this.velocity = {
      x: 0,
      y: 0,
    }

    const image = new Image();
    image.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dspace%2BInvaders&psig=AOvVaw2gkkKPVYEdrIm0ZJYHhNaM&ust=1679667484428000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiAzo-f8v0CFQAAAAAdAAAAABAE'

    this.image = image;
    this.width = 100;
    this.height = 100;
  }

  draw() {
    // c.fillStyle = 'red';
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const player = new Player();
player.draw();

function animate() {
  requestAnimationFrame(animate);
  player.draw();
}

animate();