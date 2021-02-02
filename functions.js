let person = "Maryam";

let greet = (person) => {
console.log(`Hello ${person}`);
}
greet(person);

let isOdd = (x) => {
  if (x%2 == 1){
    return (true)
  } 
  else {return (false);
}
};
console.log(isOdd(3));

let oddsSmallerThan = (y) => {
  if (y%2 == 1){
    return y = (y - 1)/2;
  }
};
console.log(oddsSmallerThan(7));

let squareOrDouble = (z) => {
  if (z%2 == 1){
    return z = z^2
  }
  else 
  { return z = z+z;
}
};
console.log(squareOrDouble(8));



module.exports = {greet,isOdd,oddsSmallerThan,squareOrDouble};