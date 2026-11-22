function removeDuplicates(arr) {
    let unique = [];

    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }

    return unique;
}

const numbers = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicates(numbers));