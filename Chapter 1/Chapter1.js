// 1.1
// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures? 

String.prototype.isUnique = function() {
    const obj = {};

    for (const char of this) {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            return false;
        }
    }

    return true;
};

console.log('Is unique:', 'abc'.isUnique());


// 1.2
// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other

String.prototype.isPermutationOf = function(arg) {
    const thisMap = getHashMap(this);
    const queue = [];

    if (!this || !arg || this.length > arg.length) {
        return false;
    }

    for (const char of arg) {
        if (thisMap[char] >= 1) {
            thisMap[char]--;
            queue.push(char);
            
            if (queue.length === this.length) {
                return true;
            }
        }
    }

    return false;


};

function isPermutationOf(s1, s2) {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

function getHashMap(str) {
    const map = {};

    for (const char of str) {
        if(!map[char]) {
            map[char] = 1;
        } else {
            map[char]++;
        }
    }

    return map;
}

console.log(`Is permutation:`, isPermutationOf('dbefgab', 'abdbefg'));
console.log(`Is permutation:`, 'dbefgab'.isPermutationOf('abdbefg'));


// 1.3
// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. 

String.prototype.URLify = function() {
    const urlSpace = '%20';
    const obj = {...this};

    // Removing extra spaces at the end of the string
    for (let i = Object.entries(obj).length - 1; i > -1; i--) {
        if (Object.values(obj)[i] === ' ') {
            delete obj[i];
        } else {
            break;
        }
    };

    // Replacing remaining spaces in between words with '%20'
    for (let j = 0; j < Object.values(obj).length; j++) {
        if (obj[j] === ' ') {
            obj[j] = urlSpace;
        }
    };
    
    return Object.values(obj).join('');
}

function url(str) {
    return str.split('').map(char => {
        if (char === ' ') return '%20';
        return char;
    }).join('');
};

console.log(`URLified:`,url('das g ma'));
console.log(`URLified:`, 'das g ma   '.URLify());

// 1.4
// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary word
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)


// 1.5
// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away. 
// EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

String.prototype.oneAway = function(arg) {
    
    
};

console.log(`One away:`, 'pale'.oneAway('ple'));     // true
console.log(`One away:`, 'pales'.oneAway('pale'));   // true
console.log(`One away:`, 'pale'.oneAway('bale'));    // true
console.log(`One away:`, 'pale'.oneAway('bake'));    // false
console.log(`One away:`, 'paler'.oneAway('bake'));    // false
console.log(`One away:`, 'paler'.oneAway('bake'));    // false


// 1.6
// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

String.prototype.compressString = function() {
    const obj = {};
    let compressed;

    for (let i = 0; i < this.length; i++) {
        const char = this.charAt(i);
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }

    compressed = String(Object.entries(obj)).split(',').join('');
    
    return compressed >= this ? this : compressed;
}

console.log(`Compressed string:`,'aabcccccaaaZZZZZZDDDD'.compressString());


// 1.7
// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

Array.prototype.rotateImage = function() {
    let rotations = 0;
    const rotatedArray = [];

    while(rotations < this[0].length) {
        const array = [];

        for (let i = this.length - 1; i >= 0; i--) {
            array.push(this[i][rotations]);
        };

        rotatedArray.push(array);
        rotations++;
    }

    return rotatedArray;
}

const arr = [[1, 1, 5, 9],
             [2, 2, 6, 0],
             [3, 3, 7, 1],
             [4, 4, 8, 2]]

console.log(arr.rotateImage());

// 1.8 
// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0. 

function ifZeroSetZero(arr) {
    let rowMin = 0;
    let colMin = 0;

    while (rowMin !== arr.length) {
        if (arr[rowMin][colMin] !== 0) {
            colMin++;
            if (colMin === arr[rowMin].length) {
                colMin = 0;
                rowMin++;
            }
        } else {
            arr[rowMin].fill(0);
            for (let i = 0; i < arr.length; i++) {
                arr[i][colMin] = 0;
            }

            break;
        }
    }
    
    return arr;
};

const matrix = [[1, 1, 1, 1],
                [1, 0, 1, 1],
                [1, 1, 1, 1]];

console.log(ifZeroSetZero(matrix));


// 1.9
// Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").

function isSubstring(s1, s2) {
    
    if (s1.length !== s2.length || !s1 || !s2) return false;

    const rotatedS1 = [...s1].reduce((a, b) => {
        return b + a;
    });

    return rotatedS1 === s2;

}

console.log(isSubstring('waterbottle', 'erbottlewat'));

