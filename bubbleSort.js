/*

BubbleSort: compares adjacent elements and 'bubbles up' the largest element to the left

----- Space Complexity: O(1), extra space
----- Time Complexity: O(n^2)

Adaptive yes, can make it stable by breaking out of the main loop early if array is already sorted
Stable no, why? it  onl swaos adjacent ones and puts them out of order automatically

*/

/* ------bubbleSort with wall implementation optimized with wall to skip last pass ------*/

var bubbleSort = function(arr) {
  // while wall > 0
  var wall = arr.length // first sorted element
  // iterate up to wall
  while (wall >= 0) {
    // if next value < current, swap
    for (var i = 0; i < wall; i++) {
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1) // swap adds space complexity
      }
    }
    wall--
  }
  return arr
}

function bubblesort(arr) {
  /* use a temp variable for swapping values loop and compare each adjacent value to each other,
  then swap if condition is true */
  var temp
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}
//bubblesort([1,4,23,5,6,3,9,10]);

/* ---------- ES6 -------------------------- */
const bubbleSort = arr => {
  let temp
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
      //console.log(arr);
    }
  }
  return arr
}

bubbleSort([5, 3, 2, 6, 78, 65, 8])

// remember the pass for j only goes to 3 because j < arr.length (5) -1 = 4

function swap(arr, index1, index2) {
  var temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
  return arr
}

function less(a, b) {
  if (a < b) return -1
  else if (a > b) return 1
  return 0
}
