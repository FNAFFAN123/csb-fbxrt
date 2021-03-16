/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Extrasmenutitle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("disfraz1", "./Extrasmenutitle/costumes/disfraz1.svg", {
        x: 232.761425,
        y: 129.97194624999997
      })
    ];

    this.sounds = [
      new Sound("Extras Menu", "./Extrasmenutitle/sounds/Extras Menu.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Extras" },
        this.whenIReceiveExtras
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "x" }, this.whenKeyXPressed)
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.audioEffects.volume = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveExtras() {
    this.visible = true;
    this.audioEffects.volume = 100;
    while (true) {
      yield* this.playSoundUntilDone("Extras Menu");
      yield;
    }
  }

  *whenKeyXPressed() {
    this.audioEffects.volume = 0;
    this.broadcast("Menu");
    this.visible = false;
  }
}
