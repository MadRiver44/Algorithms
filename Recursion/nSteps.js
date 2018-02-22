// N steps. A child is running up N steps. The child can hop either 1 step, 2 steps, or 3 steps. How many possible ways can the child go up the stairs?

function countWays(n) {
  if (n < 0) {
    return 0
  } else if (n === 0) {
    return 1
  } else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3)
  }
}
//countWays(5);
