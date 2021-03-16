/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Extras extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("disfraz1", "./Extras/costumes/disfraz1.svg", {
        x: 225.74401052083329,
        y: -19.068287300026896
      }),
      new Costume("disfraz2", "./Extras/costumes/disfraz2.svg", {
        x: 225.74401052083329,
        y: -19.068285425026886
      })
    ];

    this.sounds = [
      new Sound("select", "./Extras/sounds/select.wav"),
      new Sound("move selection", "./Extras/sounds/move selection.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.moveAhead();
        this.costume = "disfraz2";
      } else {
        this.moveBehind();
        this.costume = "disfraz1";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        yield* this.startSound("move selection");
        while (!!this.touching("mouse")) {
          yield;
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.startSound("select");
    this.broadcast("Extras");
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMenu() {
    while (true) {
      if (this.touching("mouse")) {
        yield* this.startSound("move selection");
        while (!!this.touching("mouse")) {
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveMenu2() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.moveAhead();
        this.costume = "disfraz2";
      } else {
        this.moveBehind();
        this.costume = "disfraz1";
      }
      yield;
    }
  }

  *whenIReceiveNewGame() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
