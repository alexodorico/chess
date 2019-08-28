export const JOIN_GAME_REQUEST = "JOIN_GAME_REQUEST";
export const JOIN_GAME_SUCCESS = "JOIN_GAME_SUCCESS";
export const JOIN_GAME_FAILURE = "JOIN_GAME_FAILURE";
export const MOVE_PIECE = "MOVE_PIECE";
export const LEAVE_GAME = "LEAVE_GAME";
export const LOGIN = "LOGIN";

export function joinGameRequest() {
  return {
    type: JOIN_GAME_REQUEST
  }
}

export function joinGameSuccess() {
  return {
    type: JOIN_GAME_SUCCESS
  }
}

export function joinGameFailure() {
  return {
    type: JOIN_GAME_FAILURE
  }
}

export function movePiece(payload) {
  return {
    type: MOVE_PIECE,
    payload
  }
}

export function leaveGame() {
  return {
    type: LEAVE_GAME
  }
}

export function login() {
  return {
    type: LOGIN
  }
}
