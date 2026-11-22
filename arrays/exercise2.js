function findLargest(arr) {
    let largest = arr[0];

    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

const numbers = [12, 45, 7, 89, 23];
console.log(findLargest(numbers));