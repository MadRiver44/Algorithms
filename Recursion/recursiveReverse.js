//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
var recursiveReverse = function(arr) {
  var reversedArr = []
  var addItems = function(orderedArr) {
    if (orderedArr.length > 0) {
      reversedArr.push(orderedArr.pop())
      addItems(orderedArr)
    }
    return
  }
  addItems(arr)
  return reversedArr
}

//recursiveReverse([2,3,4,5,6,7]);
