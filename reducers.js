import {
  JOIN_GAME_REQUEST,
  JOIN_GAME_SUCCESS,
  JOIN_GAME_FAILURE,
  START_GAME,
  MOVE_PIECE,
  END_GAME
} from "./actions";

const initialState = {
  loggedIn: false,
  username: undefined,
  joinedGame: false,
  waitingForPlayer: false,
  gameStarted: false,
  gameId: undefined,
  players: {
    white: undefined,
    black: undefined
  },
  turn: undefined,
  board: undefined,
  check: false,
  checkmate: false,
  gameEnded: false,
  winner: false
};

function chessApp(state = initialState, action) {
  switch (action.type) {
    case JOIN_GAME_REQUEST:
      return;
    case JOIN_GAME_SUCCESS:
      return;
    case JOIN_GAME_FAILURE:
      return;
    case START_GAME:
      return Object.assign({}, state, {
        waitingForPlayer: false,
        gameStatered: true
      });
    case MOVE_PIECE:
      return;
    case END_GAME:
      return Object.assign({}, state, {
        gameEnded: true,
        winner: action.winner
      });
    default:
      return state;
  }
}

export default chessApp;
