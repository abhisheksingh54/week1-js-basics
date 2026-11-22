// Sum of array elements

function arraySum(arr){
    let sum = 0;
    for(let ele of arr){
        sum += ele
    }

    return sum;
}

const arr = [10, 20, 30, 40, 50];
console.log(arraySum(arr))
