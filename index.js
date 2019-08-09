const board = (_ => {
  const board = [];
  let i = 0;
  let j = 0;

  while (i < 8) {
    const row = [];

    while (j < 8) {
      row.push(undefined);
      j++;
    }

    board.push(row);
    j = 0;
    i++;
  }

  return board;
})();

const pieceCoordinates = {
  pawn: generatePawns(),
  rook: [[0, 0], [7, 0]],
  knight: [[1, 0], [6, 0]],
  bishop: [[2, 0], [5, 0]],
  king: [[4, 0]],
  queen: [[3, 0]]
};

function generatePawns() {
  let i = 0;
  const pawnPositions = [];

  while (i < 8) {
    pawnPositions.push([i, 1]);
    i++;
  }

  return pawnPositions;
}

function createPlayerData(pieces, color, opponent = false) {
  return Object.keys(pieces).map(type => {
    return pieces[type].map(coordinates => {
      let [pX, pY] = coordinates;

      if (opponent) {
        [pX, pY] = alterOpponentCoordinates(pX, pY, type);
      }

      return {
        type,
        coords: [pX, pY],
        color
      };
    });
  });
}

function alterOpponentCoordinates(pX, pY, type) {
  if (type === "queen") {
    pX += 1;
  } else if (type === "king") {
    pX -= 1;
  }

  pX = 7 - pX;
  pY = 7 - pY;

  return [pX, pY];
}

function populateBoard(players, board) {
  players.forEach(playerData => {
    playerData.forEach(type => {
      type.forEach(piece => {
        placePieceOnBoard(piece, board);
      });
    });
  });

  return true;
}

function placePieceOnBoard(piece, board) {
  const [pX, pY] = piece.coords;

  return (board[pY][pX] = piece);
}

(_ => {
  const playerData = createPlayerData(pieceCoordinates, "white");
  const opponentData = createPlayerData(pieceCoordinates, "black", true);
  populateBoard([playerData, opponentData], board);
})();

function findDiff(c, r) {
  return Math.abs(c - r);
}

function isValidPawnMove(c, r) {}

function isValidRookMove(c, r) {
  const diffX = findDiff(c[x] - r[x]);
  const diffY = findDiff(c[y] - r[y]);

  if (diffX > 0 && diffY > 0) {
    return false;
  } else if (diffX === 0 || diffY === 0) {
    return true;
  } else {
    return false;
  }
}

function isValidKnightMove(c, r) {
  const diffX = findDiff(c[x] - r[x]);
  const diffY = findDiff(c[y] - r[y]);

  if (Math.abs(diffX - diffY) === 1) {
    return true;
  } else {
    return false;
  }
}

function isValidBishopMove(c, r) {
  const diffX = findDiff(c[x] - r[x]);
  const diffY = findDiff(c[y] - r[y]);

  if (diffX === diffY) {
    return true;
  } else {
    return false;
  }
}

function isValidQueenMove(c, r) {
  const diffX = findDiff(c[x] - r[x]);
  const diffY = findDiff(c[y] - r[y]);

  if (Math.abs(diffX - diffY) !== 1) {
    return true;
  } else {
    return false;
  }
}

function isValidKingMove(c, r) {
  const diffX = findDiff(c[x] - r[x]);
  const diffY = findDiff(c[y] - r[y]);

  if (diffX <= 1 && diffY <= 1) {
    return true;
  } else {
    return false;
  }
}
