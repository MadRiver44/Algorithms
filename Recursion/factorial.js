// IMPLEMENNT A FACTOTIAL RECURSIVELY

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

factorial(5)
