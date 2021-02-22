import { Game } from "./game/Game";
import { Human } from "./objects/Human";
import { Computer } from "./objects/Computer";
import "./style.css";
import UI from "./ui/UIController";

let ui = new UI();
let player1,
  player2,
  gamePlaying = true;
let game = null;

var initiateComponents = function () {
  gamePlaying = true;
  ui.init();
  player1 = new Human();
  player2 = new Computer();
  // player1.setActive(true);

  game = new Game(player1, player2);
  // game.activePlayer = player1;

  // player1.listen("think", (position) => {
  //   next(position);
  // });
  // player2.listen("think", (position) => {
  //   next(position);
  // });
  // player2.startThinking();
  game.start();
};

var setUpEvents = function () {
  document
    .querySelector(ui.elements.newGame)
    .addEventListener("click", function () {
      initiateComponents();
    });

  document
    .querySelector(ui.elements.board)
    .addEventListener("click", function (event) {
      let targetId = event.target.id;
      let targets = targetId.split("-")[1];
      var element1 = parseFloat(targets.charAt(0));
      var element2 = parseFloat(targets.charAt(1));
      next({ x: element1, y: element2 });
    });
  // on computer button click set second player as computer
  document
    .querySelector(ui.elements.computer)
    .addEventListener("click", function () {
      game.player1 = new Computer();
      game.player1.listen("think", (position) => {
        next(position);
      });
      game.player2 = new Computer();
      game.player2.listen("think", (position) => {
        next(position);
      });
      game.activePlayer = game.player1;
      game.player1.startThinking();
    });
};

function next(position) {
  if (gamePlaying) {
    // let itemId = event.target.id;
    let activePlayer = game.getActivePlayer();
    let idlePlayer = game.getIdlePlayer();
    console.log("activeplayer", activePlayer);
    console.log("idleplayer", idlePlayer);
    activePlayer.player.addPosition(position);
    ui.render(position, activePlayer.icon);

    if (idlePlayer.type === 1) {
      idlePlayer.watch(position);
    }

    let { win, winner, winPosition } = game.process();
    if (win) {
      if (winner) {
        ui.setWinnerStatus(winner.player.type, winPosition);
      } else {
        ui.setWinnerStatus(null, null);
      }
      gamePlaying = false;
    } else {
      ui.toggleActivePanel();
    }
  }
}

initiateComponents();
setUpEvents();

// init();
