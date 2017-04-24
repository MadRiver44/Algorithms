// MergeSort Implementation
function mergeSortRecursive(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }
  // divide and conqurer!!!
  var leftArr =  arr.slice(0, arr.length/2);
  var rightArr = arr.slice(arr.length/2);
  var leftSorted = mergeSortRecursive(leftArr);
  var rightSorted = mergeSortRecursive(rightArr);
  // merge subarrays
  return merge(leftSorted, rightSorted);
}
mergeSortRecursive([1,4,5,245,7, 3,3,6,31]);

function merge(left, right) {
  var result = [];
  var indexLeft = 0;
  var indexRight = 0;
  // while result is not fully populated
  while(result.length < (left.length + right.length)) {
    // if all elements in left have been added, then add remaining right elements
    if (indexLeft === left.length) {
      result = result.concat(right.slice(indexRight));
    }
    // if all elements in right have been added, then add remaining left elements
    else if (indexRight === right.length) {
      result = result.concat(left.slice(indexLeft));
    }
    // compare elements in subarrays and add lower of the two to result
    else if (left[indexLeft] <= right[indexRight]) {
      result.push(left[indexLeft++]);
    } else {
      result.push(right[indexRight++]);
    }
  }
  return result;
}
