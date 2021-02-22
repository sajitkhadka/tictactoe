import { Player } from "./Player";
import { minMax } from "../game/GameLogic";

const allAvailable = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 0 },
  { x: 2, y: 1 },
  { x: 2, y: 2 },
];

export class Computer extends Player {
  constructor() {
    super(1);
    this.position1 = [];
  }
  listen(listenType, next) {
    if (listenType === "think") this.thinkCallBack = next;
  }
  think() {
    // let allOccupied = [...this.position, ...this.position1];
    // let allRemainingPositions = allAvailable.filter(
    //   (_position) =>
    //     !allOccupied.some(
    //       (occupied) => occupied.x === _position.x && occupied.y === _position.y
    //     )
    // );
    let finilizedPosition = minMax(this.position, this.position1, 2);

    this.thinkCallBack(finilizedPosition);
  }

  startThinking() {
    console.log("set active computer");
    // super.setActive(active);
    // if (active) {
    console.log("computer is playing now");
    setTimeout(() => {
      this.think();
    }, 1000);
    // }
  }

  watch(position) {
    // console.log(this.position1);
    this.position1 = [...this.position1, position];
  }
}
