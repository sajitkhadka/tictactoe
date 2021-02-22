let winConditions = [
  (positions) => {
    return positions
      .reduce((group, item) => {
        let groupItem = group.find((_items) =>
          _items.some((_item) => _item.x === item.x)
        );
        if (groupItem) {
          groupItem.push(item);
        } else {
          group.push([item]);
        }
        return group;
      }, [])
      .find((g) => g.length >= 3);
  },
  (positions) => {
    return positions
      .reduce((group, item) => {
        let groupItem = group.find((_items) =>
          _items.some((_item) => _item.y === item.y)
        );
        if (groupItem) {
          groupItem.push(item);
        } else {
          group.push([item]);
        }
        return group;
      }, [])
      .find((g) => g.length >= 3);
  },
  (positions) => {
    let winConditions = positions.filter((item) => item.x === item.y);
    if (winConditions.length >= 3) return winConditions;
  },
  (positions) => {
    let winConditions = positions.filter((item) => item.x + item.y === 2);
    if (winConditions.length >= 3) return winConditions;
  },
];
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
export class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  setPlayer1(player) {
    this.player1 = player;
  }
  setPlayer2(player) {
    this.player2 = player;
  }

  start() {
    this.player1.isActive = true;
    this.player2.isActive = false;
    // if (this.player1.type === 1) {
    //   this.player1.setActive(true);
    // }
    // this.player2.setActive(false);
    // this.activePlayer = this.player1;
  }

  getActivePlayer() {
    console.log("palyer 1 is active", this.player1.isActive);
    console.log("palyer 2 is active", this.player2.isActive);
    if (this.player1.isActive) {
      return { icon: "x", player: this.player1 };
    } else if (this.player2.isActive) {
      return { icon: "o", player: this.player2 };
    }
  }
  getIdlePlayer() {
    if (!this.player1.isActive) {
      return this.player1;
    } else if (!this.player2.isActive) {
      return this.player2;
    }
  }

  remaining(player1occupied, player2occupied) {
    let allOccupied = [...player1occupied, ...player2occupied];
    return allAvailable.filter(
      (_position) =>
        !allOccupied.some(
          (occupied) => occupied.x === _position.x && occupied.y === _position.y
        )
    );
  }

  toggleActivePlayer() {
    this.player1.isActive = !this.player1.isActive;
    this.player2.isActive = !this.player2.isActive;

    let activePlayer = this.getActivePlayer();
    // activePlayer.player.setActive(true);
    if (activePlayer.player.type === 1) {
      activePlayer.player.startThinking();
    }

    console.log("palyer 1 is active", this.player1.isActive);
    console.log("palyer 2 is active", this.player2.isActive);
    // if (this.player1.isActive) {
    //   this.activePlayer = this.player1;
    //   return;
    // }
    // this.activePlayer = this.player2;
  }
  process() {
    console.log("process");
    let winPosition = this.checkIfwin(this.getActivePlayer().player.position);
    if (winPosition) {
      return {
        win: true,
        winner: this.getActivePlayer(),
        winPosition: winPosition,
      };
    } else if (
      this.remaining(this.player1.position, this.player2.position).length <= 0
    ) {
      return {
        win: true,
        winner: null,
        winPosition: [],
      };
    } else {
      this.toggleActivePlayer();
      return { win: false, winner: null, winPosition: [] };
    }
  }

  checkIfwin(positions) {
    if (positions.length < 3) {
      return false;
    } else {
      for (let condition of winConditions) {
        let _condition = condition(positions);
        // console.log(_condition);
        if (_condition) {
          return _condition;
        }
      }
      return false;
    }
  }
}
