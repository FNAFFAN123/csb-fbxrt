/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Time extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Time/costumes/costume1.svg", {
        x: 144,
        y: 63
      }),
      new Costume("costume2", "./Time/costumes/costume2.svg", { x: 95, y: 63 }),
      new Costume("costume3", "./Time/costumes/costume3.svg", { x: 95, y: 63 }),
      new Costume("costume4", "./Time/costumes/costume4.svg", { x: 95, y: 63 }),
      new Costume("costume5", "./Time/costumes/costume5.svg", { x: 95, y: 63 }),
      new Costume("costume6", "./Time/costumes/costume6.svg", { x: 95, y: 63 })
    ];

    this.sounds = [
      new Sound("pop", "./Time/sounds/pop.wav"),
      new Sound("Camera Change", "./Time/sounds/Camera Change.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.BROADCAST, { name: "6 Am" }, this.whenIReceive6Am),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.audioEffects.volume = 0;
  }

  *whenIReceiveOffice() {
    this.audioEffects.volume = 100;
    this.goto(177, 158);
    this.costume = "costume1";
    this.visible = true;
    for (let i = 0; i < 5; i++) {
      yield* this.wait(86);
      this.costumeNumber += 1;
      yield* this.startSound("Camera Change");
      yield;
    }
    this.costume = "costume6";
    yield* this.wait(60);
    this.broadcast("6 Am");
  }

  *whenIReceiveGameOver() {
    this.visible = false;
    this.audioEffects.volume = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceive6Am() {
    this.visible = false;
    this.audioEffects.volume = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.audioEffects.volume = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
