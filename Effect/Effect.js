/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Effect extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Effect/costumes/costume1.svg", {
        x: 242.30557250976562,
        y: 180.34376525878906
      })
    ];

    this.sounds = [new Sound("pop", "./Effect/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Cam Down" },
        this.whenIReceiveCamDown
      ),
      new Trigger(Trigger.BROADCAST, { name: "Cam On" }, this.whenIReceiveCamOn)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 75;
    while (true) {
      this.goto(0, 0);
      yield* this.glide(19, 0, -328);
      yield;
    }
  }

  *whenIReceiveNewGame() {
    this.visible = false;
  }

  *whenIReceiveCamDown() {
    this.visible = false;
    this.moveBehind();
  }

  *whenIReceiveCamOn() {
    this.visible = true;
    this.effects.ghost = 75;
    while (true) {
      this.moveAhead();
      this.goto(0, 0);
      yield* this.glide(19, 0, -328);
      yield;
    }
  }
}
