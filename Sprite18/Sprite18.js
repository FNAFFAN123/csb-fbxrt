/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite18/costumes/costume1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("costume2", "./Sprite18/costumes/costume2.svg", {
        x: 240,
        y: 167
      }),
      new Costume("costume3", "./Sprite18/costumes/costume3.svg", {
        x: 240,
        y: 132
      }),
      new Costume("costume4", "./Sprite18/costumes/costume4.svg", {
        x: 240,
        y: 82
      }),
      new Costume("costume5", "./Sprite18/costumes/costume5.svg", {
        x: 240,
        y: 23
      }),
      new Costume("costume6", "./Sprite18/costumes/costume6.svg", {
        x: 240,
        y: -25
      }),
      new Costume("costume7", "./Sprite18/costumes/costume7.svg", {
        x: 240,
        y: -77
      }),
      new Costume("costume8", "./Sprite18/costumes/costume8.svg", {
        x: 240,
        y: -120
      }),
      new Costume("costume9", "./Sprite18/costumes/costume9.svg", {
        x: 240,
        y: -141
      }),
      new Costume("costume10", "./Sprite18/costumes/costume10.svg", {
        x: 240,
        y: -167
      }),
      new Costume("costume11", "./Sprite18/costumes/costume11.svg", {
        x: 240,
        y: -141
      }),
      new Costume("costume12", "./Sprite18/costumes/costume12.svg", {
        x: 240,
        y: -120
      }),
      new Costume("costume13", "./Sprite18/costumes/costume13.svg", {
        x: 240,
        y: -77
      }),
      new Costume("costume14", "./Sprite18/costumes/costume14.svg", {
        x: 240,
        y: -25
      }),
      new Costume("costume15", "./Sprite18/costumes/costume15.svg", {
        x: 240,
        y: 23
      }),
      new Costume("costume16", "./Sprite18/costumes/costume16.svg", {
        x: 240,
        y: 82
      }),
      new Costume("costume17", "./Sprite18/costumes/costume17.svg", {
        x: 240,
        y: 132
      }),
      new Costume("costume18", "./Sprite18/costumes/costume18.svg", {
        x: 240,
        y: 167
      }),
      new Costume("costume19", "./Sprite18/costumes/costume19.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite18/sounds/pop.wav"),
      new Sound(
        "STEREO_CASSETTE__90097704",
        "./Sprite18/sounds/STEREO_CASSETTE__90097704.wav"
      ),
      new Sound(
        "STEREO_CASSETTE__90097701",
        "./Sprite18/sounds/STEREO_CASSETTE__90097701.wav"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Cam Up" },
        this.whenIReceiveCamUp
      ),
      new Trigger(Trigger.BROADCAST, { name: "Title" }, this.whenIReceiveTitle),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Cam Down" },
        this.whenIReceiveCamDown
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCamUp() {
    this.audioEffects.volume = 100;
    this.moveAhead();
    this.moveBehind(1);
    this.goto(0, 0);
    yield* this.startSound("STEREO_CASSETTE__90097701");
    this.costume = "costume10";
    this.visible = true;
    yield* this.wait(0.05);
    for (let i = 0; i < 9; i++) {
      this.costumeNumber += 1;
      yield;
    }
    this.visible = false;
    this.broadcast("Cam On");
  }

  *whenIReceiveTitle() {
    this.visible = false;
    this.audioEffects.volume = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveCamDown() {
    this.goto(0, 0);
    yield* this.startSound("STEREO_CASSETTE__90097704");
    this.costume = "costume1";
    this.visible = true;
    yield* this.wait(0.05);
    for (let i = 0; i < 9; i++) {
      this.costumeNumber += 1;
      yield;
    }
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.power = -100;
    while (true) {
      yield* this.wait(5);
      this.stage.vars.power += 1;
      yield;
    }
  }
}
