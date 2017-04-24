// BubbleSort

function bubblesort(arr) {
  var temp;
  for(var i = 1; i < arr.length; i++) {
    for(var j = 0; j < arr.length -1; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
//bubblesort([1,4,23,5,6,3,9,10]);
