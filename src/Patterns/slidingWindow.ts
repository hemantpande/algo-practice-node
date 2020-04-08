// 1. Given any array and a value N, we have to find the subarray and the maximum sum of N consecutive elements in that array.
// 2. Brute force would be to loop through all the elements and find the sum of next N integers. But this is a problem if array is very large.
// 3. Better approach is, starting at 0 index, find the sum of N elements, and set a temporary max sum.
// 4. Next we run through the array again and keep subtracting an element and add the next element.
// 5. Effectively we are moving the window forward.
// 6 If we find a sum greater than temp max sum, we update it.

// [1,2,4,5,6,4,3,5,5,6], 3
// [1, 2, 4, 4, 5, 6, 6, 3, 3, 3, 5, 6, 7, 8, 5, 9, 6, 7, 8, 8, 9, 7, 6, 9, 7], 3

export function slidingWindowPattern(input: number[], n: number) {

    let max = 0;
    for (let i = 0; i < n; i++) {
        max += input[i];
    }

    console.log('max', max);

    for (let i = 0; i < input.length - n; i++) {
        let currentSum = max - input[i] + input[i + n];
        
        if(currentSum > max)
            max = currentSum;

        console.log('currentSum', currentSum);
        console.log('max', max);
    }
}