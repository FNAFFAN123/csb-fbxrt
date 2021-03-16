/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bca8a4f3E33a413195f50e1d5f9fffb7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "BCA8A4F3-E33A-4131-95F5-0E1D5F9FFFB7",
        "./Bca8a4f3E33a413195f50e1d5f9fffb7/costumes/BCA8A4F3-E33A-4131-95F5-0E1D5F9FFFB7.jpg",
        { x: 300, y: 168 }
      )
    ];

    this.sounds = [
      new Sound(
        "ScreamX3",
        "./Bca8a4f3E33a413195f50e1d5f9fffb7/sounds/ScreamX3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.x = 3;
    this.y = -172;
    yield* this.wait(500);
    yield* this.broadcastAndWait("DEATH");
    this.visible = true;
    yield* this.glide(1, 3, 50);
    this.size = 500;
    yield* this.startSound("ScreamX3");
    yield* this.wait(1);
    /* TODO: Implement stop all */ null;
  }
}
