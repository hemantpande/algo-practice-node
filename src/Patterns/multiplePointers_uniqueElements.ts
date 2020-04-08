// 1. Given an array [1,1,1,2,2,3,3,3,5,6,7,7,10], find the number of unique elements in it.
// 2. Start 2 pointers, root = array[0] and scout = array[1].
// 3. Add root to result as a first element.
// 4. Compare root and scout. If they are same increment scout.
// 5. If they are different, add root to result.
// 6. Do this till scout runs through entire array
// Note- One variation, for above implementation space complexity is O(n). To avoid that, same array can be manipulated. In that case, the position of root after running the algo, will give the unique elements.

export function multipleCounterPattern_unique_elements(inputArray:number[]){
    console.log('Input = ' + inputArray + ' Output = ' + findUniqueElements(inputArray));
}

function findUniqueElements(input:number[]){
    let result = [];
    let root = 0;
    result.push(input[root]);

    for (let scout = 1; scout < input.length; scout++) {
        if(input[root] != input[scout]){
            root++;
            result.push(input[scout]);
            input[root] = input[scout];
        }
    }

    console.log(result);
    console.log(input);
    return input.splice(0, root + 1);
}