function fibs(n){
    let result = []
    let left = 0
    let right = 1
    let total = 0

    for (let i = 0; i < n; i++){

        left = right
        right = total
        total = left + right

        result.push(right)
    }
    return result
}

// console.log(fibs(8))

function fibsRecursive(n, left = 0, right = 1, total = 0, result = []){
    if(n <= 0) return result

    result.push(total)

    return fibsRecursive(n - 1, left = right, right = total, total = left + right, result)
}

// console.log(fibsRecursive(8))

function mergeSort(arr){
    if(arr.length <= 1){ 
        return arr;
    }

    const middle = Math.round(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeftHalf = mergeSort(leftHalf)
    const sortedRightHalf = mergeSort(rightHalf)

    return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftArr, rightArr){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    while(leftIndex < leftArr.length){
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < rightArr.length){
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1 ,4]))