// 1. Given a sorted array [-3,-2,-1,0,2,4], find the first pair whose sum is 0.
// 2. Start 2 pointers, left and right, one at the beginning and one at the end.
// 3. If arr[left] + arr[right] < 0, increment left.
// 4. If arr[left] + arr[right] > 0, increment right.
// 5. The idea is simple, if the sum goes high on positive side, decrement right pointer, if sum goes on negative side, increment left counter, to sort of converge at the middle.


export function multipleCounterPattern_pair_with_sum_zero(inputArray: number[]) {
    console.log('Input = ' + inputArray + ' Output = ' + findFirstPair(inputArray))
}

function findFirstPair(input: number[]) {
    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        let sum = input[left] + input[right];
        if (sum == 0) {
            return [input[left], input[right]];
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}