//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  var num = 1
  var sum = base
  while (num < expo) {
    sum *= base
    console.log(' THE SUM IS: ' + sum)
    num++
  }
  return sum
}
//exponent(2, 5);

/* -------  OR ------------ */
function exp(base, expo) {
  var val = base
  while (expo > 1) {
    val *= base
    expo--
  }
  return val
}

function expoRecursion(base, exp) {
  if (exp == 1) {
    return base
  } else {
    //console.log("the exponent is : " + exp);
  }
  console.log(expoRecursion(base, exp - 1))
  return base * expoRecursion(base, exp - 1)
}
//expoRecursion(2,5);

function expoRecursion(base, exp) {
  debugger
  if (exp == 1) {
    console.log('the exp value is ' + exp + ' , base is returned')
    return base
  } else {
    console.log('line 278 the function evaluates ')
    return base * expoRecursion(base, exp - 1)
  }
}
expoRecursion(2, 3)
