
class Mothership {
  static WIDTH = 50;
  static HEIGHT = 20;
  static PICKUP_DIAMETER = Mothership.WIDTH * 1.2;
  static CORNER_RADIUS = 8;
  static NUM_PORTHOLES = 4;
  static PORTHOLE_DIAMETER = 6;

  physics;

  constructor() {
    this.physics = new Physics();
  }

  draw() {
    push();
    drawEverywhere({
      offset: this.physics,
      drawFn: () => {
        Mothership.drawMothership({ rotation: this.physics.rotation });
        if (game.debug) {
          this.physics.draw();
          noFill();
          stroke("#fff");
          circle(0, 0, Mothership.PICKUP_DIAMETER);
        }
      },
    });
    pop();
  }

  /**
   * Draws the Mothership's shape around (0, 0). Assumes the caller has
   * already moved the transform to wherever the Mothership should appear.
   **/
  static drawMothership({ rotation }) {
    // TODO (Phase 1): Replace the placeholder with the Mothership: a rounded
    // rectangle, Mothership.WIDTH by Mothership.HEIGHT, with a row of
    // Mothership.NUM_PORTHOLES evenly spaced circular windows along the
    // middle. Draw it around (0, 0), rotated by `rotation`.

    push();
    rotate(rotation);

    // Draw the mothership's body.
    rectMode(CENTER);
    stroke(255);
    strokeWeight(1);
    fill(130, 140, 155);
    rect(
      0,
      0,
      Mothership.WIDTH,
      Mothership.HEIGHT,
      Mothership.CORNER_RADIUS
    );

    // Draw evenly spaced portholes along the middle.
    fill(100, 220, 255);
    noStroke();

    const spacing =
      Mothership.WIDTH / (Mothership.NUM_PORTHOLES + 1);

    for (let i = 1; i <= Mothership.NUM_PORTHOLES; i++) {
      const x = -Mothership.WIDTH / 2 + spacing * i;
      circle(x, 0, Mothership.PORTHOLE_DIAMETER);
    }

    pop();
  }

  move(delta) {
    this.physics.move(delta, { constrain: true });
  }
}