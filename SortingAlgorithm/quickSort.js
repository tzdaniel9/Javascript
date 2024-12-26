// Problem - Given an array of integers, sort the array.
// const arr = [-6, 20, 8, -2, 4]
// insertionSort(arr) => should return [-6, -2, 4, 8, 20]

// quick sort idea 
// identify the pivot element in the array 
// pick first element as pivot\pick last element as pivot(our approach)
// pick a random element as pivot
// pick median as pivot

// Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array
// repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition
// repeatedly concatenate the left array pivot and right array till one sorted array remains

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr))

function quickSortReverse(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSortReverse(left), pivot, ...quickSortReverse(right)]
}

const arr1 = [8, 20, -2, 4, -6]
console.log(quickSortReverse(arr1))

// Worst case - O(n^2)
// Avg case = O(logn)