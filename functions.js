let person = "Maryam";

let GreetPerson = (person) => {
console.log(`Hello ${person}`);
}
GreetPerson(person);



let OddNumber = (x) => {
  if (x%2 == 1){
    return console.log(`OddNumber (${x}) -> true`);
  } 
  else {return console.log(`OddNumber (${x}) -> false`);
}
};
OddNumber(3);



let OddsSmallerThan = (y) => {
  if (y%2 == 1){
    a = (y - 1)/2;
    return console.log(`OddsSmallerThan (${y}) -> ${a}`);
  }
};
OddsSmallerThan(7);



let SqauredOrDoubled = (z) => {
  if (z%2 == 1){
    b = z^2
    return console.log(`Sqaured (${z}) -> ${b}`);
  }
  else 
  b = z+z;
  { return console.log(`Doubled (${z}) -> ${b}`);
}
};
SqauredOrDoubled(8);



module.exports = {GreetPerson,OddNumber,OddsSmallerThan,SqauredOrDoubled};