import { frequencyCounterPattern } from "./arrayMatcher";
import { multipleCounterPattern_pair_with_sum_zero } from "./multiplePointers_PairWithSumZero";
import { multipleCounterPattern_unique_elements } from "./multiplePointers_uniqueElements";
import { slidingWindowPattern } from "./slidingWindow";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = `Which program you want to run? 
                    1. Find if 1 array is square of the other
                    2. Find the first pair whose sum is 0
                    3. Find the number of unique elements in an array
                    4. Find the maximum sum of N consecutive elements in an array
                    \n`;
rl.question(question, (answer) => {

    switch (answer) {
        case '1':
            frequencyCounterPattern([1, 2, 2, 3], [1, 9, 4, 4]);
            break;
        case '2':
            multipleCounterPattern_pair_with_sum_zero([-4, -3, -1, 0, 1, 2, 2, 3]);
            break;
        case '3':
            multipleCounterPattern_unique_elements([1, 1, 1, 3, 3, 4, 4, 4, 5, 6, 7, 11, 20, 20]);
            break;
        case '4':
            slidingWindowPattern([1, 2, 4, 4, 5, 6, 6, 3, 3, 3, 5, 6, 7, 8, 5, 9, 6, 7, 8, 8, 9, 7, 6, 9, 7], 3);
            break;
        default:
            break;
    }

    rl.close();
});
