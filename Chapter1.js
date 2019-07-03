String.prototype.isUnique = function() {
    const obj = {};

    for (let i = 0; i < this.length; i++) {
        const char = this.charAt(i);

        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++

            if (obj[char] > 1) {
                return false;
            }

        }
    }
    
    return true
}

console.log('aabc'.isUnique());

