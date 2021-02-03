let greet = (person) => {
console.log(`Hello ${person}`);
};

greet("Maryam");



let isOdd = (x) => {
  if (x%2 == 1){
    return (true);
  }{ 
    return (false);
  }
};
console.log(isOdd(7));
console.log(isOdd(10));



let oddsSmallerThan = (y) => {
  if (y%2 == 1){
    return (y-1)/2;
  }{
    return y/2;
  };
};

console.log(oddsSmallerThan(7));
console.log(oddsSmallerThan(15));



let squareOrDouble = (z) => {
  if (z%2 == 1){
    return z = z*z
  }{
  return z = z+z;
}
};
console.log(squareOrDouble(16));
console.log(squareOrDouble(9));



module.exports = {greet,isOdd,oddsSmallerThan,squareOrDouble};