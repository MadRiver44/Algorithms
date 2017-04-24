// QuickSort

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
