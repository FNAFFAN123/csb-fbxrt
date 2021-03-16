/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fondo1", "./Stage/costumes/fondo1.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];

    this.vars.miVariable = 0;
    this.vars.cameraMoniter = 0;
    this.vars.camera = 0;
    this.vars.power = -100;

    this.watchers.power = new Watcher({
      label: "Power",
      style: "normal",
      visible: true,
      value: () => this.vars.power,
      x: 245,
      y: 175
    });
  }

  *whenbackdropswitchesto() {
    this.costume = "5E546326-4918-4A4A-9E1E-F43FD573F475";
  }

  *whenGreenFlagClicked() {
    this.costume = "fondo1";
  }

  *whenKeySpacePressed() {
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
  }
}
