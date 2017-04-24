// Insertion Sort
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
