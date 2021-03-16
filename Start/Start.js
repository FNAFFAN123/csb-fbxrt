/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("disfraz1", "./Start/costumes/disfraz1.svg", {
        x: 226.83971741317177,
        y: 28.931708949973086
      }),
      new Costume("disfraz2", "./Start/costumes/disfraz2.svg", {
        x: 226.83971741317177,
        y: 28.931710824973095
      })
    ];

    this.sounds = [
      new Sound("move selection", "./Start/sounds/move selection.wav"),
      new Sound("select", "./Start/sounds/select.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Extras" },
        this.whenIReceiveExtras
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.startSound("select");
    this.broadcast("New Game");
    yield* this.wait(0.05);
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
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

  *whenIReceiveExtras() {
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
}
