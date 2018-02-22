//1. Write a function that loops through the numbers n down to 0.
function countDown(c) {
  if (c === 0) {
    console.log(c)
    return 'count down is done'
  } else {
    console.log(c)
    return countDown(c - 1)
  }
}
countDown(5)
