function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(getSum(1, 4));

let mySum = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(mySum(1, 2));

function getName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

console.log(getName('German', 'Ochea'));

function myFunctionVoid(): void {
  // return noting
}
