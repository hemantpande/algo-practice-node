
// 1. Has 2 elements :- A base case & a function that calls itself, with a reducing set of input to recursive call.
// 2. Helper method recursion is a pattern that is used when we want to collect the results in an collection.

export function helperMethodRecursion(inputArray: number[]) {
    console.log('Input = ' + inputArray + ' Output = ' + helperMethod_recursion(inputArray))
}


function helperMethod_recursion(input:number[]){

    let result = [];

    helper(input);

    function helper(slicedArray:number[]){

        if(slicedArray.length === 0){
            return;
        }

        if(slicedArray[0] % 2 !== 0){
            result.push(slicedArray[0]);
        }

        helper(slicedArray.splice(1));
    }

    return result;
}