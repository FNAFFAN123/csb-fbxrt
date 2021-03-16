/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Title extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("disfraz1", "./Title/costumes/disfraz1.svg", {
        x: 237.87429893190594,
        y: 180.04963985469885
      })
    ];

    this.sounds = [new Sound("pop", "./Title/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Extras" },
        this.whenIReceiveExtras
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveAhead();
  }

  *whenIReceiveNewGame() {
    this.visible = false;
  }

  *whenIReceiveExtras() {
    this.visible = false;
  }

  *whenIReceiveMenu() {
    this.visible = true;
    this.moveAhead();
  }
}
