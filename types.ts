let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

let strArr1: string[];
let numArr1: number[];
let boolArr1: boolean[];

let strArr2: Array<string>;
let numArr2: Array<number>;
let boolArr2: Array<boolean>;

// Tuple
let strNumTuple: [string, number];

myString = 'Hello World';
myNum = 22;
myBool = true;
myVar = 'Hello';
strArr1 = ['Hello', 'World'];
numArr1 = [1, 2, 3];
boolArr1 = [true, false];

strNumTuple = ['Hello', 5];

// Void

let myNullVoid: void = null || undefined;
let myUndefinedVoid: void = undefined || null;
let myNull: null = undefined || null;
let myUndefined: undefined = undefined || null;

console.log(myString);
