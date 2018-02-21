// IMPLEMENT FIBONACCI SEQUENCE UP TO N

const fibonacci = function(num) {
  if (num <= 1) {
    return num
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
}
