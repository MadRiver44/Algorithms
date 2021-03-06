// MergeSort Implementation

/*
MergeSort employs a divide and conquer strategy, merge two sorted subarrays into one sorted array

Recursive top down approach:
  Recursively break down array into two subarrays and sort them recursively.
  Subarrays are broken down until they have  only one element (implying they are sorted)

Iterative bottom up approach:
  Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists


Space complexity
O(n) exptra space for iterative solution

Time complexity
O(n log n) for best and worst

Adaptive no, Stable yes, the only stable O(n log n) sorting algo

Use cases, if stability is a requirement and exptra space is no concern,
merge sort is great because it's simple to implement.
*/
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
//mergeSortRecursive([1,4,5,245,7, 3,3,6,31]);

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

function mergeSortIterative(arr) {
  // create an array of subarrays with each element
  var splitArr = arr.map(function(element) {
    return [element];
  });
  // while there is more than one subarray
  while (splitArr.length > 1) {
    var result = [];
    // merge adjacent;
    for (var i = 0; i < splitArr.length; i+=2) {
      // for pairs merge
      if (splitArr[i + 1]) result.push(merge(splitArr[i], splitArr[i+1]));
      // for last odd element, just add to results
      else result.push(splitArr[i]);
    }
    // overwrite old splitArr
    splitArr = result;
  }
  return splitArr[0];
}






