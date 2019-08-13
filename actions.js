const JOIN_GAME_REQUEST = "JOIN_GAME_REQUEST";
function joinGameRequest(username) {
  return {
    type: JOIN_GAME_REQUEST,
    username
  };
}

const JOIN_GAME_SUCCESS = "JOIN_GAME_SUCCESS";
function joinGameSuccess(id) {
  return {
    type: JOIN_GAME_SUCCESS,
    id
  };
}
const JOIN_GAME_FAILURE = "JOIN_GAME_FAILURE";
function joinGameFailure() {
  return {
    type: JOIN_GAME_FAILURE
  };
}

const START_GAME = "START_GAME";
function startGame(players) {
  return {
    type: START_GAME,
    players
  };
}

const MOVE_PIECE = "MOVE_PIECE";
function movePiece(coordinates, piece, color) {
  return {
    type: MOVE_PIECE,
    coordinates,
    piece,
    color
  };
}

const END_GAME = "END_GAME";
function endGame(winner) {
  return {
    type: END_GAME
  };
}
