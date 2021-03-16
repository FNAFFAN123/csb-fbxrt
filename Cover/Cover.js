/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cover extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Sans Title", "./Cover/costumes/Sans Title.svg", {
        x: 685.5429491165395,
        y: 270.7864289375708
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 100;
    while (true) {
      this.moveAhead();
      yield;
    }
  }
}
