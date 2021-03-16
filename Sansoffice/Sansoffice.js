/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sansoffice extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Office", "./Sansoffice/costumes/Office.svg", {
        x: 240,
        y: 170.5
      }),
      new Costume("costume1", "./Sansoffice/costumes/costume1.svg", {
        x: 51.75000000000003,
        y: 100.25000000000003
      })
    ];

    this.sounds = [
      new Sound("Ambience 2", "./Sansoffice/sounds/Ambience 2.mp3"),
      new Sound(
        "The FNaF 1 ambiance noise but it's in stereo (128 kbps)",
        "./Sansoffice/sounds/The FNaF 1 ambiance noise but it's in stereo (128 kbps).wav"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "DEATH" }, this.whenIReceiveDeath)
    ];
  }

  *whenIReceiveOffice() {
    this.visible = true;
    this.effects.brightness = -50;
    for (let i = 0; i < 20; i++) {
      this.effects.brightness += 2;
      yield;
    }
    while (true) {
      this.effects.brightness = 0;
      yield* this.wait(0.05);
      this.effects.brightness = -1;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOffice2() {
    while (true) {
      this.x += this.mouse.x * -0.05;
      if (this.x > 75) {
        this.x = 75;
      }
      if (this.x < -75) {
        this.x = -75;
      }
      yield;
    }
  }

  *whenIReceiveOffice3() {
    while (true) {
      yield* this.playSoundUntilDone(
        "The FNaF 1 ambiance noise but it's in stereo (128 kbps)"
      );
      yield;
    }
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(600);
    this.broadcast("6 Am");
  }

  *whenIReceiveDeath() {
    this.visible = false;
  }
}
