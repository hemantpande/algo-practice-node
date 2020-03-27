Algorithm notes:-

#### Frequency counter pattern
1. Two arrays [1,2,2,5] and [1,4,25,4] find if the second array is exact square of first.
2. Count the frequency of each element in both the arrays
3. Then match the frequency
4. Same is applicable to strings, find if 2 strings are same, 'querty' and 'uyterq'

#### Multiple counter pattern
1. Given a sorted array [-3,-2,-1,0,2,4], find the first pair whose sum is 0.
2. Start 2 pointers, left and right, one at the beginning and one at the end.
3. If arr[left] + arr[right] < 0, increment left.
4. If arr[left] + arr[right] > 0, increment right.
5. The idea is simple, if the sum goes high on positive side, decrement right pointer, if sum goes on negative side, increment left counter, to sort of converge at the middle.

###### Another example,
1. Given an array [1,1,1,2,2,3,3,3,5,6,7,7,10], find the number of unique elements in it.
2. Start 2 pointers, root = array[0] and scout = array[1].
3. Add root to result as a first element.
4. Compare root and scout. If they are same increment scout.
5. If they are different, add root to result.
6. Do this till scout runs through entire array
Note- One variation, for above implementation space complexity is O(n). To avoid that, same array can be manipulated. In that case, the position of root after running the algo, will give the unique elements.

#### Sliding window pattern
1. Given any array and a value N, we have to find the subarray and the maximum sum of N consecutive elements in that array.
2. Brute force would be to loop through all the elements and find the sum of next N integers. But this is a problem if array is very large.
3. Better approach is, starting at 0 index, find the sum of N elements, and set a temporary max sum.
4. Next we run through the array again and keep substracting an element and add the next element.
5. Effectively we are moving the window forward.
6 If we find a sum greater than temp max sum, we update it.

#### Recursion
 
