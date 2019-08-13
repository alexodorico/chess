export const JOIN_GAME_REQUEST = "JOIN_GAME_REQUEST";
export function joinGameRequest(username) {
  return {
    type: JOIN_GAME_REQUEST,
    username
  };
}

export const JOIN_GAME_SUCCESS = "JOIN_GAME_SUCCESS";
export function joinGameSuccess(id, color) {
  return {
    type: JOIN_GAME_SUCCESS,
    id,
    color
  };
}
export const JOIN_GAME_FAILURE = "JOIN_GAME_FAILURE";
export function joinGameFailure() {
  return {
    type: JOIN_GAME_FAILURE
  };
}

export const START_GAME = "START_GAME";
export function startGame(players) {
  return {
    type: START_GAME,
    players
  };
}

export const MOVE_PIECE = "MOVE_PIECE";
export function movePiece(coordinates, piece, color) {
  return {
    type: MOVE_PIECE,
    coordinates,
    piece,
    color
  };
}

export const END_GAME = "END_GAME";
export function endGame(winner) {
  return {
    type: END_GAME
  };
}

export function joinGame(username) {
  return function(dispatch) {
    dispatch(joinGameRequest(username));

    return fetch("http://localhost:3000/joingame")
      .then(response => response.json(), error => console.log(error))
      .then(json => dispatch(joinGameSuccess(json)));
  };
}
