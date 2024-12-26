// Problem - Given two finite non-empty set, find the cartesian product

// In Mathematics, specifaclly set theory, the cartesian product of two sets A and B, denoted A * B, is the set of all ordered pairs (a, b) where a is in A and b is in B
// const A = [1, 2]
// const B = [3, 4]
// A * B = [[1,3], [1,4], [2,3], [2,4]]

// Cartesian product idea
// Traverse each array and pair each element in the first array with each element in the second array

function cartesianProduct(arr1, arr2) {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }

    return result
}

const arr1 = [1, 2]
const arr2 = [3, 4, 5]
console.log(cartesianProduct(arr1, arr2))

// Big O = O(mn)