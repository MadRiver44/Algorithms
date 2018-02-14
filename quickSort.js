// QuickSort -- employs a divide and conquer strategy,

/*
  It has a partitioning step, in qich you pick an element ( called a pivot)  and partition the array
  so that all smaller elements come before the pivot and all larger ones come after.
  The pivot will be in it's final position. Recursively apply this to the subarray of smaller elements
  and subarray of larger elements

  There are multi pivot implementations, external quicksort, three way radix quicksort

Space complexity
  O(n) -- extra space

  Time complexity
    O(n^2) -- for a few unique keys
    O(n log n) -- if recursion balanced

Adaptive no, Stable no

use cases, quicksort is in place and has low overhead, if a stable sort is not necessary.
it has a higher worst case time complexity than merge sort (if pivot is not in center)
 */

function quickSort(arr, lo, hi) {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = arr.length-1;

  if (lo < hi) {
    // partition the array
    var p = partition(arr, lo, hi);
    console.log('partition from, ' + lo + ' to ' + hi + '=> partition: '+ p);
    // sort subarrays
    quickSort(arr, lo, p-1);
    quickSort(arr, p+1, hi);
  }
  // for initial call, return a sorted array
  if (hi - lo === arr.length-1) return arr;
}

function partition(arr, lo, hi) {
  // choose last element as pivot
  var pivot = arr[hi];
  // keep track of index to put pivot at
  var pivotLocation = lo;
  // loop through subarray and if element <= pivot, place element before pivot
  for ( var i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      swap(arr, pivotLocation, i);
      pivotLocation++;
    }
  }
  swap(arr, pivotLocation, hi);
  return pivotLocation;
}

quickSort([1,4,3,56,9,8,7,5]);

// Lomuto partition scheme
function partition(arr, lo, hi) {
  // choose last element as pivot
  var pivot = arr[hi];
  // keep track of index to put pivot at
  var pivotLoc = lo;
  // iterate throught subarray, and if element <= pivot, place element before pivotLoc
  for (var i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      swap(arr, pivotLoc, i);
      pivotLoc++;
    }
  }
  // move pivot to proper location
  swap(arr, pivotLoc, hi);
  return pivotLoc;
}

function swap(arr, index1, index2) {
  if (index1 === index2) return;
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  console.log('swapped' + arr[index1], arr[index2], + ' in ', arr);
  return arr;
}










