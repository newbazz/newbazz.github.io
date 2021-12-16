### Running Time of Quick Sort

The time taken by quick sort to sort an array either in ascending or descending order generally depends upon the input array and partition strategy.

Following are three cases which we come across while sorting an array with quick sort algorithm:

  - Best Case
  - Worst Case
  - Average Case

### Best Case Time Complexity Analysis

Best case time complexity comes when the no. of levels of recursion is minimum.As the partition divides it into two sub-arrays, if there is a symmetry then both takes same time(both have same no. of elements). Taking the pivot to be the middle element of the sorted array(at each step of recursion), after partition one of the subarray has n/2-1 elemenets while the other has n/2. The divide continues till a single element is left in the array. So, n/(2^i)=1, i=logn(base 2). The depth comes out to be logn. This partition goes on for n elements of the array, hence the best time complexity comes out to be T(n)=nlogn.
### Worst Case Time Complexity Analysis

Think of an already sorted array as an input, then the position of pivot does not changes on partition. So, we only have one partition to sort(only left). As this continues the no. of levels of recursion will be O(n)(at each step one element is sorted). This partition goes on for n elements of the array, hence the average time complexity comes out to be T(n)=nlogn.
### Average Case Time Complexity Analysis

The average-case running time is also O(nlogn), because the average-case running time cannot be better than the best-case running time. First, let's imagine that we don't always get evenly balanced partitions, but that we always get at worst a 3-to-1 split. That is, imagine that each time we partition, one side gets 3n/4 elements and the other side gets n/4. (To keep the math clean, let's not worry about the pivot.) T(n) = T(n/4) + T(3n/4) T(n)-> time for n elements. On solving this equation we get T(n) = O(nlogn) The left child of each node represents a subproblem size 1/4 as large, and the right child represents a subproblem size 3/4 as large. so, the maximum depth 'i' will go to n/((4/3)^i) = 1 => i = log(n)(base (4/3)). We see that log(n)(base 2) and log(n)(base(4/3)) differ by a factor of log(4/3)(base 2), which is a constant. So the average case is taken to be O(nlogn) as well.
### Space Complexity Analysis

So, the space complexity for one level of recursion will be O(logn) if median of medians is used for pivot selection and O(1) otherwise. But the no of function calls can go upto O(n) in worst case. So, the call stack memory used can goes upto O(n) because of function call. The space used by median of medians in current step is not needed for further steps. So, overall space complexity of Quicksort is O(n) due to function calls in call stack.

