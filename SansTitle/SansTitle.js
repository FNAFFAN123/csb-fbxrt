/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SansTitle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Sans Title", "./SansTitle/costumes/Sans Title.svg", {
        x: 336.80416292757604,
        y: 272.3973191908301
      }),
      new Costume("Sans Title2", "./SansTitle/costumes/Sans Title2.svg", {
        x: 336.80414500000006,
        y: 272.39732
      }),
      new Costume("Sans Title3", "./SansTitle/costumes/Sans Title3.svg", {
        x: 336.80414500000006,
        y: 272.39732
      }),
      new Costume("Sans Title4", "./SansTitle/costumes/Sans Title4.svg", {
        x: 336.80414500000006,
        y: 272.39732
      })
    ];

    this.sounds = [
      new Sound(
        "[Dusttale AU] The Phantom",
        "./SansTitle/sounds/[Dusttale AU] The Phantom.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
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
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      this.costume = "Sans Title";
      yield* this.wait(this.random(3, 5));
      this.costume = "Sans Title2";
      yield* this.wait(0.05);
      for (let i = 0; i < 10; i++) {
        this.costume = "Sans Title3";
        yield* this.wait(0.05);
        this.costume = "Sans Title4";
        yield* this.wait(0.05);
        this.costume = "Sans Title2";
        yield* this.wait(0.05);
        this.costume = "Sans Title";
        yield* this.wait(0.05);
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.audioEffects.volume = 100;
    while (true) {
      yield* this.playSoundUntilDone("[Dusttale AU] The Phantom");
      yield;
    }
  }

  *whenIReceiveNewGame() {
    for (let i = 0; i < 100; i++) {
      this.effects.brightness += -1;
      this.audioEffects.volume += -1;
      yield;
    }
  }

  *whenIReceiveExtras() {
    this.visible = false;
    this.audioEffects.volume = 0;
  }

  *whenIReceiveMenu() {
    this.visible = true;
    this.audioEffects.volume = 100;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(2);
    this.visible = false;
  }
}
