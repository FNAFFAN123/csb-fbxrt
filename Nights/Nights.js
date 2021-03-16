/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nights extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("disfraz1", "./Nights/costumes/disfraz1.svg", {
        x: 85.85478632008392,
        y: 49.52078141928496
      })
    ];

    this.sounds = [new Sound("Start Day", "./Nights/sounds/Start Day.mp3")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Night 1" },
        this.whenIReceiveNight1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveNight1() {
    this.visible = true;
    yield* this.startSound("Start Day");
    yield* this.wait(4);
    this.visible = false;
    yield* this.wait(2);
    this.broadcast("Office");
  }
}
