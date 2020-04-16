

// Write a function called **stairs** which accepts n number of stairs. 
// Imagine that a person is standing at the bottom of the stairs 
// and wants to reach the top and the person can climb 
// either 1 stair or 2 stairs at a time. 
// Your function should return the number of ways 
// the person can reach the top by only climbing 1 or 2 stairs at a time.


export function stairs(n){
    if(n == 1)
      return 1;
    
    if(n == 2)
      return 2;
    
    var tabulation = [1,2];
    
    for(var i = 2; i < n; i++){
      tabulation[i] = tabulation[i - 1] + tabulation[i - 2]; 
    }
    
    return tabulation[n-1];
  }