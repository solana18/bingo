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

module.exports = { determineBingoWin };