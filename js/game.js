"use strict";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.enemies = [];
    this.isGameOver = false;
  }
  startLoop() {
    this.player = new Player(this.canvas, 100);

    const loop = () => {
      if (Math.random() > 0.97) {
        const y = Math.random() * this.canvas.height;
        this.enemies.push(new Enemy(this.canvas, y));
      }

      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }
    };

    window.requestAnimationFrame(loop);
  }