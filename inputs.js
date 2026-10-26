
/** Organizer class for user input and applying it against the magpie. */
class Inputs {
  /** Forward thrust, in pixels per second, per second. */
  static THRUST = 360;

  /** Reverse thrust is weaker than forward thrust. */
  static REVERSE_THRUST = 180;

  /** Turning speed, in radians per second. */
  static TURN_RATE = 2.4;

  magpie;

  constructor(magpie) {
    this.magpie = magpie;
  }

  handleKeyDown(delta) {
    // Turn left with A.
    if (keyIsDown(65)) {
      this.magpie.physics.rotate(-Inputs.TURN_RATE, delta);
    }

    // Turn right with D.
    if (keyIsDown(68)) {
      this.magpie.physics.rotate(Inputs.TURN_RATE, delta);
    }

    // Move forward with W.
    if (keyIsDown(87)) {
      this.magpie.physics.thrust(Inputs.THRUST, delta);
    }

    // Move backward with S.
    if (keyIsDown(83)) {
      this.magpie.physics.thrust(-Inputs.REVERSE_THRUST, delta);
    }

    // Turn the tractor beam on while Space is held.
    if (keyIsDown(32)) {
      this.magpie.enableBeam(true);
    } else {
      this.magpie.enableBeam(false);
    }
  }
}

/**
 * Keys whose browser default is to scroll the page
 * (or a parent page) in case this is inside an iframe.
 */
const SCROLL_KEYS = [" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

/**
 * Handles one-shot key presses.
 * Toggles debug mode with ~ or backtick.
 */
function keyPressed() {
  if (game && (key === "~" || key === "`")) {
    game.debug = !game.debug;
  }

  if (SCROLL_KEYS.includes(key)) {
    return false;
  }
}
