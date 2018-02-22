//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

var recursiveMultiplier = function(arr, num) {
  if (arr.length === 0) {
    return arr
  } else {
    var last = arr.pop()
    recursiveMultiplier(arr, num)
    arr.push(last * num)
  }
  return arr
}
//recursiveMultiplier([2,3,4,5], 3);
