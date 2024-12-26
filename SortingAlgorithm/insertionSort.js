// Problem - Given an array of integers, sort the array.
// const arr = [-6, 20, 8, -2, 4]
// insertionSort(arr) => should return [-6, -2, 4, 8, 20]

// insertion sort idea 
// Virtually split the array into a sorted and unsorted part
// Assume that the first element is already sorted and remaining elements in the sorted part
// Select an unsorted part is smaller than the selected element, proceeeed to the next element in the unsorted part, else shift larger elements in the sorted part towards the right.
// Insert the selected element at the right index

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert
    }
}

const arr = [8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr)

function insertionSortReversed(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] < numberToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert
    }
}

const arr1 = [8, 20, -2, 4, -6]
insertionSortReversed(arr1)
console.log(arr1)

// Big O = O(n^2)