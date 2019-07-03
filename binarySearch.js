function binarySearch(arr, target) {
    
    let min = 0;
    let max = arr.length - 1;

    for (let i = 0; i < arr.length; i++){

        const mid = min + Math.floor((max - min) / 2);

            if (arr[mid] === target) return mid;
            if (arr[mid] < target) min = mid + 1;
            if (arr[mid] > target) max = mid - 1;
    }
}


let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let v = 1;
console.log(binarySearch(a, v))