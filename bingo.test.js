const {
  determineBingoWin,
  determineGuaranteedWinningBoard
} = require('./bingo');

const calledNumbers = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];

describe('Part 1 - Determining a Winning Bingo Game', () => {
  const bingoCard = `
      22 13 17 11 0
      8 2 23 4 24
      21 9 14 16 7
      6 10 3 18 5
      1 12 20 15 19
    `;

  test('should return true if the card gets Bingo', () => {
    expect(determineBingoWin(calledNumbers, bingoCard)).toBe(true);
  });

  test('should return false if the card does not get Bingo', () => {
    const cardWithoutBingo = `
        32 33 37 31 30
        38 2 23 4 24
        39 9 14 16 7
        36 10 19 18 5
        24 12 20 15 25
      `;
    expect(determineBingoWin(calledNumbers, cardWithoutBingo)).toBe(false);
  });
});

describe('Part 2 - Determining which board to pick to guarantee a win against the giant squid', () => {
  const board1 = `
      22 13 17 11 30
      8 2 23 4 34
      21 9 14 16 37
      6 10 3 18 35
      42 32 31 35 39
    `;
  const board2 = `
      3 15 0 2 22
      9 18 13 17 5
      19 8 7 25 23
      20 11 10 24 4
      14 21 16 12 6
    `;
  const board3 = `
      14 21 17 24 4
      10 16 15 9 19
      18 8 23 26 20
      22 11 13 6 5
      2 0 12 3 7
    `;

  test('should return the index of the winning board', () => {
    expect(determineGuaranteedWinningBoard(calledNumbers, board1, board2, board3)).toBe(2);
  });

  test('should return -1 if there is no guaranteed winning board', () => {
    const boardWithoutWin = `
      32 33 37 31 30
      38 2 23 4 24
      39 9 14 16 7
      36 10 19 18 5
      24 12 20 15 25
    `;
    expect(determineGuaranteedWinningBoard(calledNumbers, board1, boardWithoutWin)).toBe(-1);
  });
});