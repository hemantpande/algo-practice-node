
// Problem statement - given to arrays, find if the second array has squares of elements in first array
// [1,2,2,3] [4,1,4,9]  // true
// [1,4,3,5] [1,16,14,9] //false

// Brute force implementation

export function frequencyCounterPattern(array1: number[], array2: number[]) {

    console.log('Brute force - ' + bruteForce(array1, array2));

    console.log('Better approach - ' + betterApproach(array1, array2));
}

function bruteForce(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    }

    for (let element of array1) {
        let index = array2.indexOf(element * element);
        if (index == -1) {
            return false;
        }
        array2.splice(index, 1);
    }

    return true;
}

// Linear time implementation
function betterApproach(array1: number[], array2: number[]) {
    let array1Frequency = getElementFrequencies(array1); // O(n)
    let array2Frequency = getElementFrequencies(array2); // O(n)

    for (let [key, value] of array1Frequency.entries()) {
        if (!(array2Frequency.get(key * key) && array2Frequency.get(key * key) == value)) {
            return false;
        }
    }

    return true;
}

function getElementFrequencies(array: number[]) {
    let frequencyMap = new Map();
    for (const element of array) {
        let count = frequencyMap.get(element);
        if (count) {
            frequencyMap.set(element, ++count);
        }
        else {
            frequencyMap.set(element, 1);
        }
    }
    return frequencyMap;
}
