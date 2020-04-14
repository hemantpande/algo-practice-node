# Dynamic programming

Difficult to understand, difficult to master, although, in principle, DP is simple to understand. 

**Definition**
"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

*Trivia* - The name Dynamic programming has nothing to do with it's name. Richard Bellman, who first introduced DP, said he just wanted a 'Catchy name' to keep the congress satisfied of his work. [Dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming)

**Very important**
Dynamic programming, only works on problems that exibit, 
1. Optimal substructure
  - A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
2. Overlapping subproblems
  - A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

**Example** - Fibonacci series.

A simple recursive implementation of this would be
```
   function fib(n)
       if n <= 1 return n
       return fib(n − 1) + fib(n − 2)
```

Lets say, we want to calculate Fib(5), now the call tree for Fib(5) can be broken down into - 
```
fib(5)
= fib(4) + fib(3)
= (fib(3) + fib(2)) + (fib(2) + fib(1))
= ((fib(2) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + fib(1))
= (((fib(1) + fib(0)) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + fib(1))
```

Notice, that we are calculating the values for Fib(3) for example, 2 times.

![DP1](./resources/dp_fibo_1.png)

![DP3](./resources/growth_of_recursive_fibo.png)

This is a classic example of a problem that can be solved using Dynamic programming, since it has overlapping subproblems.

The big O complexity of this solution is 2^n. Actually it is (1.62^n). Remember 1.62, ***the Golden ratio***.

How bad is 1.62^n. 

![big o comparison](./resources/graphs_big_O.png)

**What is not a good problem to solve using DP?**

Consider, merge sort. The subproblems in merge sort are not reproducable. Hence, it is not a good candidate for DP.

![DP2](./resources/dp_merge_sort.png)

**How can we improve the solution?**

We're repeating things. We can use the results of the sub-problems calculated earlier.

![improve dp](./resources/improve_recursive.png)
![improve dp](./resources/improve_recursive_2.png)

There are 2 ways of caching or storing the results of the subproblems, they are called :

1. Memoization
2. Tabulation


