function determineBingoWin(calledNumbers, bingoCard) {
    const calledSet = new Set(calledNumbers);
    const rows = bingoCard.split('\n').map(row => row.trim().split(' '));

    // Check rows
    for (let i = 0; i < 5; i++) {
        if (rows[i].every(num => calledSet.has(parseInt(num)))) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 5; i++) {
        if (rows.every(row => calledSet.has(parseInt(row[i])))) {
            return true;
        }
    }

    return false;
}

function determineGuaranteedWinningBoard(calledNumbers, ...bingoBoards) {
    for (let i = 0; i < bingoBoards.length; i++) {
        const rows = bingoBoards[i];
        if (determineBingoWin(calledNumbers, rows))
            return i + 1; // Return the board index (1-based)
    }

    return -1; // No guaranteed win
}

module.exports = { determineBingoWin, determineGuaranteedWinningBoard };