/*

Insertion Sort -- selects the first element in an array and pushes it to a new array
 As each new elelent is added, insert the new element in the correct order

----- Space Complexity: O(1) for extra space
----- Time Complexity
  worst - O(n^2) for comparisons and swaps
  best -- O(n) for nearly sorted

Adaptive yes, Stable, yes

Use cases, when data is nearly sorted (since it's adaptive) or when the problem size is small
because it has low memory overhead

*/


// Implementation 1

function insertionSort(array) {
  for (var index=1; index<array.length; index++) {
    var value = array[index];
    var compareIndex = index-1;
    // swap with left element while < value
    while (compareIndex > -1 && less(array[compareIndex], value) > 0) {
      array = swap(array, compareIndex, index);
      index = compareIndex;
      compareIndex--;
    }
  }
  return array;
};
//insertionSort([1,4,5,245,7, 3,3]);

// Implementation 2

var insertionSort = function(arr, comparator) {
  comparator = comparator || defaultComparator;
  // start at index 1 as a sublist of arr[0] is already sorted

  for (var index = 1; index < arr.length; index++) {
    var value = arr[index];
    var compareIndex = index-1;
    // swap with left element while < value
    while (compareIndex > -1 && comparator(arr[compareIndex], value) > 0) {
      arr = swap(arr, compareIndex, index);
      index = compareIndex;
      compareIndex--;
    }
  }
  return arr;
};

function defaultComparator(a, b) {
  if (a < b) return -1; // a comes first
  else if (a > b) return 1; // b comes first
  return 0;
}

function swap(arr, index1, index2) {
  var temp;
  var temp = arr[index1];
  var arr[index1] = arr[index2];
  var arr[index2] = temp;
  return arr;
}













