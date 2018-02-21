/*

Binary Search - a divide and conquer algorithm

---- Time Complexity : O(logN)


*/

const binarySearch = function(arr, searchItem) {
 let lo = 0;
 let hi = arr.length - 1;
 while (lo <= hi) {
   let mid = lo + Math.floor((hi - lo) /2);
   console.log(mid);
   if (arr[mid] === searchItem) {
     return mid;
   }
   if (searchItem < arr[mid]) {
     hi = mid -1;
   }else {
     lo = mid +1;
   }
 }
 return -1;
};

/* ------   Switch/ Case for imporoved performance and better readability -------- */
const binarySearch = function(arr, searchItem, lo = 0, hi = arr.length -1) {
  let mid = lo + Math.floor((hi - lo) /2);
  switch(true){
    case (arr[mid] === searchItem):
      return mid;
    case (hi === lo):
      return false;
    case (arr[mid] < searchItem):
      return binarySearch(arr, searchItem, lo = mid + 1, hi);
    case (arr[mid] > searchItem):
      return binarySearch(arr, searchItem, lo, hi = mid -1);
    }
  };
binarySearch([4,5,6,7,8,9,10,11,12,13],11);

// test if array length = 0, if so, return 0
// find the midpoint of the array
// if arr[midpoint] === searchItem, return index
// else if searchItem is less than array[midpoint] of array,
    // new array = array[0] to array[midpoint]
// if searchItem greater than array[midpoint] of array
    // new array = arr[midpoint] to arr[arr.length -1]
// keep looping until searchItem === arr[midpoint]
/*

