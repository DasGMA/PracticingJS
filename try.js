// 1) This problem was asked by Yelp.

// Given a mapping of digits to letters (as in a phone number), and a digit string,
// return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

// For example if {"2": ["a", "b", "c"], 3: ["d", "e", "f"], …} then "23" should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


const mapping = {
    '1': ['a', 'b', 'c'],
    '2': ['d', 'e', 'f'],
    '3': ['g', 'h', 'i'],
    '4': ['j', 'k', 'l'],
    '5': ['m', 'n', 'o'],
    '6': ['p', 'q', 'r'],
    '7': ['s', 't', 'u'],
    '8': ['v', 'w', 'x'],
    '9': ['y', 'z']
}

const possibleLetters = function(mapping, number) {
    const set = new Set();
    
    for (let i = 0; i < Object.keys(mapping).length; i++) {
        for (let j = 0; j < Object.keys(mapping).length; j++) {

        if (number === parseInt(Object.keys(mapping)[i] + Object.keys(mapping)[j])) {
            for (let x = 0; x < Object.values(mapping)[i].length; x++) {
                for (let y = 0; y < Object.values(mapping)[j].length; y++) {
                    set.add(Object.values(mapping)[i][x]+Object.values(mapping)[j][y])
                }
            }

        } else if (number === parseInt(Object.keys(mapping)[i])) {
            for (let z = 0; z < Object.values(mapping)[i].length; z++) {
                set.add(Object.values(mapping)[i][z])
            }
        }
    }
}

    console.log('Possible letter combination: ', ...set);
}

possibleLetters(mapping, 23);



// 2) This problem was asked by Amazon.

// Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water,
// so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

// For example, this matrix has 4 islands.

// 1 0 0 0 0
// 0 0 1 1 0
// 0 1 1 0 0
// 0 0 0 0 0
// 1 1 0 0 1
// 1 1 0 0 1

const map = [
            [1,0,0,0,0],
            [0,0,1,1,0],
            [0,1,1,0,0],
            [0,0,0,0,0],
            [1,1,0,0,1],
            [1,1,0,0,1]
            ]

function numberOfIslands(grid) {
    if (!grid.length) return 0;

    let islands = 0;
    const row = grid.length;
    const col = grid[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == '1') {
                islands++
                helper(grid, i, j)
            }
        }
    }
    return islands;
};

function helper(grid, row, col) {
    if (row < 0 || row == grid.length || col < 0 || col == grid[0].length || grid[row][col] == '0') return;

    grid[row].splice(col, 1, '0')
    helper(grid, row - 1, col)
    helper(grid, row + 1, col)
    helper(grid, row, col - 1)
    helper(grid, row, col + 1)
}

console.log(numberOfIslands(map));