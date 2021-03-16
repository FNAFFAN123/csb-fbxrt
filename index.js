import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import SansTitle from "./SansTitle/SansTitle.js";
import Extras from "./Extras/Extras.js";
import Title from "./Title/Title.js";
import Start from "./Start/Start.js";
import Time from "./Time/Time.js";
import Nights from "./Nights/Nights.js";
import Effect from "./Effect/Effect.js";
import Newspaper from "./Newspaper/Newspaper.js";
import Cover from "./Cover/Cover.js";
import Extrasmenutitle from "./Extrasmenutitle/Extrasmenutitle.js";
import Sansoffice from "./Sansoffice/Sansoffice.js";
import Sprite18 from "./Sprite18/Sprite18.js";
import Bca8a4f3E33a413195f50e1d5f9fffb7 from "./Bca8a4f3E33a413195f50e1d5f9fffb7/Bca8a4f3E33a413195f50e1d5f9fffb7.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  SansTitle: new SansTitle({
    x: 73.76470588235294,
    y: 36.76470588235294,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 9
  }),
  Extras: new Extras({
    x: -41,
    y: -49,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 1
  }),
  Title: new Title({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  Start: new Start({
    x: -41,
    y: -40,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 2
  }),
  Time: new Time({
    x: 177,
    y: 158,
    direction: 90,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 5
  }),
  Nights: new Nights({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Effect: new Effect({
    x: 0,
    y: -83.67452631578946,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Newspaper: new Newspaper({
    x: 33.29411764705884,
    y: 14.35294117647058,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  Cover: new Cover({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 67.31416602344069,
    visible: true,
    layerOrder: 14
  }),
  Extrasmenutitle: new Extrasmenutitle({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sansoffice: new Sansoffice({
    x: -18.000000000000025,
    y: -29.411764705882383,
    direction: 90,
    costumeNumber: 1,
    size: 130,
    visible: false,
    layerOrder: 11
  }),
  Sprite18: new Sprite18({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 10,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Bca8a4f3E33a413195f50e1d5f9fffb7: new Bca8a4f3E33a413195f50e1d5f9fffb7({
    x: 3,
    y: -172,
    direction: -90,
    costumeNumber: 1,
    size: 240,
    visible: false,
    layerOrder: 6
  }),
  Sprite1: new Sprite1({
    x: -168.7058823529412,
    y: -1.411764705882348,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
