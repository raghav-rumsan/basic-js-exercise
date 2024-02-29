console.log("Test");

//Expression
let sum = 10 + 5;

//Assigment
let x = 10;

x = 5;

console.log(x);
//boolean, null, undefined, value is zero

const isTrue = true;

console.log(isTrue);

// if (!isTrue) {
//   console.log("True");
// } else {
//   console.log("False");
// }

const userName = "";

let num1 = "1";
let num2 = 1;

const hasName = +num1 === num2;

console.log("hasName", hasName);

const user = "Test User";
if (user) {
  console.log("user", user);
} else {
  console.log("No name");
}

const studentName = "Name";

const funcName = (name) => (name ? "UserName Passed" : "UserName Not Passed");

const func3 = (number = 2) => {
  const newNum = number * 2;
  return newNum;
};

const jwtToken = "tokenJWT";

// const isLoggedIn = (token) => {
//   if (token) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isLoggedIn = (token) => Boolean(token);
const isLoggedIn = (token) => !!token;

console.log("isLoggedIn", isLoggedIn(jwtToken));

console.log("func3", func3(10));

// const t= true?"do sth":'do else'

console.log(funcName(studentName));

const func2 = function () {};

let val1 = 5;
const val2 = 10;

val1 = "name";

const person = {
  name: "John",
  age: 25,
  personAge: () => {
    return "The age of " + this.name + "is" + this.age + ".";
  },
  personAge2: function () {
    return `The age of ${this.name} is ${this.age}.`;
  },
};

console.log("person", person);

const obj2 = {
  post1Call: (value) => {
    console.log("value", value);
    return value;
  },
  post2Call: (num) => num + 1,
};

const postSlug = "post2Call";

obj2.post1Call();

obj2["post1Call"];
console.log("post1Call", obj2[postSlug](124));

const age = person.age;
const name = person.name;

const { age: personAge, name: personName } = person;

console.log("age", { age, name, personAge, personName });

console.log("age string", person.personAge2());

const outp = val1 * 2 === val2 && "Equal";
console.log("outp", outp);

const string1 = "5678";
const stringConverter = (string) => {
  if (!string) {
    confirm("String must be passed");
    // throw new Error("String must be passed");
  }

  return parseInt(string);
};
console.log("string", stringConverter("1"));
// if (userName) {
//   return true;
// } else {
//   return false;
// }

// const value = b === c;

// const func = () => {
//   if (value) {
//     console.log("Equal");
//     if (b) {
//       console.log("b is true");
//     }
//     return "";
//   } else {
//     console.log("Not Equal");
//     return "";
//   }
// };

// const func1 = () => {
//   //check value is true or false
//   if (!value) {
//     console.log("Not Equal");
//     return "";
//   }
//   console.log("Equal");
// };

// func();
// func1();

const value = true;

const tur = value ? ("Equal" ? true : false) : "Not Equal";

// switch (tur) {
//   case "Equal":
//     console.log("Equal");
//     break;
//   case "Not Equal":
//     console.log("Not Equal");
//     break;
//   default:
//     console.log("Default");
//     break;
// }

//turnary operator
console.log("tur", tur);

// const checker = {
//   test1: "This is a test",
//   test2: "This is a test2",
// };
// console.log("checker", checker.test1);
// console.log("checker2", checker["test1"]);

// const testKey = "test1";
// console.log("checker3", checker[testKey]);

// if (testKey === "test1") {
//   console.log("ch", checker.test1);
// }

const arr = [1, 2, 3, 4, 5];

console.log("arr", arr[1]);

const array = [
  {
    name: "test",
    age: 20,
    // nameAge: "the age of ... is ...",
  },
  {
    name: "test2",
    age: 22,
  },
];

const newArray = array.map((item, index) => {
  const nameAgeString = `The age of ${item.name} is ${item.age}`;
  const returnObj = {
    nameAgeString,
    ...item,
  };
  return returnObj;
});

console.log("newArray", newArray);

const object1 = { name: "Test2", address: "KTM" };
const object2 = { name: "Test", age: 30 };
const object3 = object1;

console.log("check", {
  object1,
  object2,
  object3,
  isEqual: object1 === object2,
  isObj3: object3 === object1,
});

const newObject = {
  ...object2,
  ...object1,
  newKey: [
    {
      price: "200",
    },
  ],
  newArrayNumbers: [1, 2, 3, 4, 5],
  products: [
    {
      title: "Apple",
      price: 200,
    },
    {
      title: "Banana",
      price: 100,
    },
    {
      title: "Orange",
      price: 150,
    },
    {
      title: "Grapes",
      price: 250,
    },
  ],
};

const newFunction = (name = "Test", age = 5) => {
  return {
    name,
    age,
  };
};

console.log("newFunction", newFunction("John", 20));

// const newObjectName = newObject.name;

// const {
//   name: newName,
//   age: newAge,
//   newKey,
//   newArrayNumbers,
//   products,
// } = newObject;

// const { name: newName, ...restObject } = newObject;

// const [firstProduct, secondProduct, third, fourth, fifth, ...restProduct] =
//   restObject.products;

// console.log(
//   "product",
//   firstProduct,
//   secondProduct,
//   third,
//   fourth,
//   fifth,
//   restProduct
// );

// console.log("newObject", newName, newAge, newKey);

// for(let i=0; i<=array.length;i++){
//   array[i]
// }

// for (const i in array) {

// for (const item of array) {
//   console.log("item", item);

//   // const arr = array[i];
// }

// array.push("123");
console.log("array", array[1].name);

// const arr1 = [
//   {
//     name: "John",
//     age: 20,
//   },
// ];

// const objJohn = {
//   name: "John",
//   age: 20,
// };
// const arrJohn = [
//   objJohn,
//   {
//     name: "Ram",
//     age: 25,
//   },
// ];

// let ob = { name: "Dionysia", age: 29 };
// let ob1 = { name: "Dionysia", age: 23 };

// if (ob1.name === ob.name && ob1.age === ob.age) {
//   console.log("Equal");
// }

// const obKeys = Object.keys(ob).map((key, index) => {
//   console.log("key", key, index);
//   return {
//     key,
//     value: ob[key],
//   };
// });

// console.log("obKeys", obKeys);

// console.log(ob === ob1);

// const arr2 = [1, 2, 3, 4, 5];
// const arrayVal = arr2[0];
// const sliced = arr2.slice(1, 3);
// console.log("first", {
//   arrayVal,
//   sliced,
// });

// const array3 = [...arr2, 6];
// const [arrayValDest, ...rest] = arr2;
// console.log("arrayValDest", arrayValDest, rest);

// const { } = obj1

// const { name: johnNameDest } = objJohn;
// console.log("johnNameDest", johnNameDest);
// const johnName = objJohn.name;
