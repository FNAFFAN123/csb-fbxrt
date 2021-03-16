/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Newspaper extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Newspaper", "./Newspaper/costumes/Newspaper.svg", {
        x: 240,
        y: 180.49981922560002
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 100;
  }

  *whenIReceiveNewGame() {
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += -1;
      yield;
    }
  }

  *whenthisspriteclicked() {
    for (let i = 0; i < 100; i++) {
      this.effects.brightness += -1;
      yield* this.wait(0);
      this.effects.brightness += -1;
      yield;
    }
    this.visible = false;
    this.broadcast("Night 1");
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
