// Selection Sort
function selectionSort(arr) {
  arr.forEach(function(elem, index) {
    var minValue = elem;
    var minIndex = index;
    for(var i = index; i < arr.length; i++){
      if(less(arr[i], minValue) < 0) {
        minValue = arr[i];
        minIndex = i;
      }
    }
    arr = swap(arr, index, minIndex);
  });
  return arr;
}

function less(a,b) {// ordering function, boolean function  to test is value is less than
  if(a < b) { // a comes first
    return -1;
  }else if (a > b) { // b comes first
    return 1;
  }
  return 0 // if equal
}

function swap(arr, index1, index2) { // swap values in place function
  if (index1 === index2) return;
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  console.log('swapped ' + arr[index1] + ',' + arr[index2]);
  return arr;
}

//~~~ Sedgewick Algoritms, trouble with java to js imolementation
// function isSorted(arr) { // Certification
//   for(var i = 1; i < arr.length; i++) {
//     if(less(arr[i], arr[i-1]) < 0) {
//       console.log(true);
//     }
//   }
// }
// isSorted([1,7,2,3,4,5,6]);

//selectionSort([1,4,5,245,7, 3,3]);

// Implementation 2
function sort(arr) {
  var n = arr.length;
  for(var i = 0; i < n; i++) {
    var minIndex = i;
    for(var j = i+1; j < n; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(i !== minIndex){
      swap(arr, i, minIndex);
    }
  }
  return arr;
}
//sort([1,4,5,245,7, 3,3]);
