import xI from "../img/x.png";
import oI from "../img/o.png";

export default class UI {
  constructor() {
    this.elements = {
      board: ".board",
      newGame: ".btn-new",
      computer: ".btn-computer",
    };
    this.html = {
      x: `<div class="x"><img src =${xI} width="100" height="100"></div>`,
      o: `<div class="o"><img src =${oI} width="100" height="100"></div>`,
    };
    this.activePanel = 0;

    this.side1text = document.querySelector("#name-0");
    this.side2text = document.querySelector("#name-1");
    this.panel1 = document.querySelector(".player-0-panel"); //.classList.remove("winner");
    this.panel2 = document.querySelector(".player-1-panel"); //.classList.remove("winner");

    //document.querySelector(".player-0-panel").classList.add("active");
    //document.querySelector(".player-1-panel").classList.remove("active");
  }

  render(position, type) {
    if (
      !document.querySelector("#box-" + position.x + position.y).hasChildNodes()
    ) {
      document
        .querySelector("#box-" + position.x + position.y)
        .insertAdjacentHTML("beforeend", this.html[type]);
    }
  }

  init() {
    this.panel1.classList.add("active");
    this.panel2.classList.remove("active");
    this.activePanel = 0;
    this.side1text.textContent = "Player 1";
    this.side2text.textContent = "Player 2";
    this.panel1.classList.remove("winner");
    this.panel2.classList.remove("winner");

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        var parentNode = document.getElementById("box-" + i + j);
        while (parentNode.firstChild) {
          parentNode.removeChild(parentNode.firstChild);
          parentNode.classList.remove("win-row");
        }
      }
    }
  }

  toggleActivePanel() {
    if (this.activePanel === 0) {
      this.activePanel = 1;
      this.panel2.classList.add("active");
      this.panel1.classList.remove("active");
    } else if (this.activePanel === 1) {
      this.activePanel = 0;
      this.panel2.classList.remove("active");
      this.panel1.classList.add("active");
    }
  }

  setPlayerText(side, text) {
    switch (side) {
      case 0:
        this.side1text.textContent = text;
        return;
      case 1:
        this.side2text.textContent = text;
        return;
      default:
        return;
    }
  }

  setWinnerStatus(side, positions) {
    if (side && positions) {
      this.setPlayerText(side, "WINNER");
      document
        .querySelector(".player-" + side + "-panel")
        .classList.add("winner");
      positions.forEach((position) => {
        document
          .querySelector("#box-" + position.x + position.y)
          .classList.add("win-row");
      });
    } else {
      this.setPlayerText(0, "DRAW");
      this.setPlayerText(1, "DRAW");
      document.querySelector(".player-" + 0 + "-panel").classList.add("winner");
      document.querySelector(".player-" + 1 + "-panel").classList.add("winner");
    }
  }

  setActivePanel(side, action) {
    let panel;
    switch (side) {
      case 1:
        panel = this.panel1;
        break;
      case 2:
        panel = this.panel2;
        break;
    }
    if (action) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  }
}
