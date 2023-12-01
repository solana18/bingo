const fs = require('fs');
const path = require('path');
const { determineBingoWin, determineGuaranteedWinningBoard } = require('./bingo');

// Read input from external text file
const inputFile = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const inputLines = inputFile.split('\n');
const calledNumbers = inputLines[0].trim().split(',').map(num => parseInt(num.trim()));

// Part 1 - Determining a Winning Bingo Game
const bingoCard = inputLines.slice(1).join('\n');
const hasBingo = determineBingoWin(calledNumbers, bingoCard);
console.log(hasBingo === true ? 'Part 1 - Bingo!' : 'Part 1 - No Bingo!');

// Part 2 - Determining which board to pick to guarantee a win against the giant squid
const bingoBoards = inputLines.slice(1).join('\n').split('---');
const winningBoardIndex = determineGuaranteedWinningBoard(calledNumbers, ...bingoBoards);
console.log(winningBoardIndex === -1 ? 'Part 2 - No Bingo!' : `Part 2 - Pick board ${winningBoardIndex} for a guaranteed win against the giant squid.`);
