// Array.prototype.filter custom function
Array.prototype.filter = function(cb) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};

console.log(['a', 'b', 'c'].filter(console.log));


// Array.prototype.map custom function
Array.prototype.map = function(cb, thisArg) {
  const arr = [];

  if (thisArg) {
    for (let i = 0; i < thisArg.length; i++) {
      arr.push(cb(thisArg[i], i, thisArg));
    }
  } else {
      for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this));
      }
    }

  return arr;
};

[1, 2, 3].map(console.log);


// Array.prototype.reduce custom function
Array.prototype.reduce = function (cb, initialVlaue) {
  let accumulator;

  if (initialVlaue === undefined && !this.length) {
    return TypeError(`Need initial value to call reduce() on an empty array.`);
  }

  if (initialVlaue === undefined) {
    accumulator = this[0];

    for (let i = 1; i < this.length; i++) {
      accumulator += this[i];
      cb(accumulator, this[i], i, this);
    } 
  } else {
    accumulator = initialVlaue;

    for (let i = 0; i < this.length; i++) {
      accumulator += this[i];
      cb(accumulator, this[i], i, this);
    }
  }
  
  return accumulator;
}

let arr = [1, 2, 3, 4];
console.log(arr.reduce((accu, curr) => {
  return curr + accu;
}));



