// Two Pointer

// The "two-pointer" technique is a common approach used in algorithms and programming to efficiently solve problems involving arrays or linked lists. The basic idea is to use two pointers that traverse the data structure in a way that helps simplify the problem or optimize the solution.

// Example: Finding a Pair with a Given Sum
// Suppose you have a sorted array of numbers, and you want to find if there's a pair of numbers in the array that adds up to a given sum.

function findPairWithSum(arr, targetSum) {
  let leftPointer = 0; // Start from the beginning of the array
  let rightPointer = arr.length - 1; // Start from the end of the array

  while (leftPointer < rightPointer) {
    const currentSum = arr[leftPointer] + arr[rightPointer];

    if (currentSum === targetSum) {
      // Pair found
      return [arr[leftPointer], arr[rightPointer]];
    } else if (currentSum < targetSum) {
      // Move the left pointer to increase the sum
      leftPointer++;
    } else {
      // Move the right pointer to decrease the sum
      rightPointer--;
    }
  }

  // Pair not found
  return null;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum = 10;

const result = findPairWithSum(sortedArray, targetSum);

if (result) {
  console.log(`Pair found: ${result[0]}, ${result[1]}`);
} else {
  console.log("No pair found with the given sum.");
}

// Sorting and different sorting algorithms
// Problem  -  Given an array of integers, sort the array
let arr = [-6, 20, 8, -2, 4];

// should return [-6,-2,4,8,20]

//Bubble sort Idea  -
//  Compare adjacent elements in the array and swap the positions if they are not in the ascending order.
//  Repeat the instruction as we step through each element in the array.
//  Once we step through the whole array with no swaps, then the array is sorted.

let swapped = false;
do {
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i], arr[i + 1]);
    if (arr[i] > arr[i + 1]) {
      swapped = true;
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    } else {
      swapped = false;
    }
  }
} while (swapped);
console.log(arr);  // [ -6, -2, 4, 8, 20 ] sorted 
