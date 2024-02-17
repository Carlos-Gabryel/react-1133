// Exercício 1: Arrays e Tipos
const numbers: number[] = [1, 2, 3, 4, 5];

function sumArrayElements(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArrayElements(numbers)); // Output: 15

// Exercício 2: Objetos e Interfaces
interface Student {
  name: string;
  age: number;
  course: string;
}

const student: Student = {
  name: "John Doe",
  age: 20,
  course: "Computer Science",
};

// Exercício 3: Funções e Tipos
function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(5)); // Output: 25

// Exercício 4: Callbacks e Arrays
const words: string[] = ["apple", "banana", "orange"];

function checkWordInArray(word: string): boolean {
  return words.includes(word);
}

console.log(checkWordInArray("banana")); // Output: true

// Exercício 5: Objetos e Métodos
const car = {
  model: "Tesla",
  year: 2022,
  color: "red",
  displayColor() {
    console.log(`The car color is ${this.color}`);
  },
};

car.displayColor(); // Output: The car color is red

// Exercício 6: Arrays e Callbacks
const numbersArray: number[] = [1, 2, 3, 4, 5];

function getEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers(numbersArray)); // Output: [2, 4]

// Exercício 7: Objetos e Métodos
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 256,
  displayPageCount() {
    console.log(`The book has ${this.pages} pages`);
  },
};

book.displayPageCount(); // Output: The book has 256 pages

// Exercício 8: Funções e Tipos
function convertToUpperCase(arr: string[]): string[] {
  return arr.map((str) => str.toUpperCase());
}

console.log(convertToUpperCase(["hello", "world"])); // Output: ["HELLO", "WORLD"]

// Exercício 9: Callbacks e Objetos
const students: { name: string; age: number; grade: number }[] = [
  { name: "John", age: 20, grade: 80 },
  { name: "Jane", age: 19, grade: 90 },
  { name: "Bob", age: 21, grade: 75 },
];

function calculateAverageGrade(arr: { grade: number }[]): number {
  const sum = arr.reduce((acc, curr) => acc + curr.grade, 0);
  return sum / arr.length;
}

console.log(calculateAverageGrade(students)); // Output: 81.66666666666667

// Exercício 10: Arrays e Métodos
const numbersArray2: number[] = [5, 10, 15, 20];

function sumNumbersGreaterThan10(arr: number[]): number {
  return arr.filter((num) => num > 10).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumNumbersGreaterThan10(numbersArray2)); // Output: 35

// Exercício 11: Objetos e Interfaces
interface Product {
  name: string;
  price: number;
  quantity: number;
}

const products: Product[] = [
  { name: "Apple", price: 1.5, quantity: 10 },
  { name: "Banana", price: 0.5, quantity: 20 },
  { name: "Orange", price: 1, quantity: 15 },
];

// Exercício 12: Funções e Tipos
function multiplyNumbers(num1: number, num2: number): number {
  return num1 * num2;
}

console.log(multiplyNumbers(5, 3)); // Output: 15

// Exercício 13: Callbacks e Arrays
const books: { title: string; author: string; pages: number }[] = [
  { title: "Book 1", author: "Author 1", pages: 150 },
  { title: "Book 2", author: "Author 2", pages: 300 },
  { title: "Book 3", author: "Author 3", pages: 250 },
];

function getBooksMoreThan200Pages(arr: { pages: number }[]): { title: string; author: string; pages: number }[] {
  return arr.filter((book) => book.pages > 200);
}

console.log(getBooksMoreThan200Pages(books)); // Output: [{ title: "Book 2", author: "Author 2", pages: 300 }]

// Exercício 14: Arrays e Métodos
const stringsArray: string[] = ["apple", "banana", "orange", "kiwi"];

function getStringsMoreThanThreeCharacters(arr: string[]): string[] {
  return arr.filter((str) => str.length > 3);
}

console.log(getStringsMoreThanThreeCharacters(stringsArray)); // Output: ["apple", "banana", "orange"]

// Exercício 15: Objetos e Métodos
const cellphone = {
  brand: "Samsung",
  model: "Galaxy S21",
  storage: "128GB",
  displayInfo() {
    console.log(`Model: ${this.model}, Storage: ${this.storage}`);
  },
};

cellphone.displayInfo(); // Output: Model: Galaxy S21, Storage: 128GB

// Exercício 16: Funções e Tipos
function sumOddNumbers(arr: number[]): number {
  return arr.filter((num) => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOddNumbers(numbersArray)); // Output: 9

// Exercício 17: Callbacks e Objetos
const students2: { name: string; age: number; average: number }[] = [
  { name: "John", age: 20, average: 80 },
  { name: "Jane", age: 19, average: 90 },
  { name: "Bob", age: 21, average: 75 },
];

function getStudentWithHighestAverage(arr: { average: number }[]): string {
  const highestAverage = Math.max(...arr.map((student) => student.average));
  const student = arr.find((student) => student.average === highestAverage);
  return student ? student.name : "";
}

console.log(getStudentWithHighestAverage(students2)); // Output: "Jane"

// Exercício 18: Arrays e Callbacks
const numbersArray3: number[] = [1, 2, 3, 4, 5];

function doubleNumbers(arr: number[]): number[] {
  return arr.map((num) => num * 2);
}

console.log(doubleNumbers(numbersArray3)); // Output: [2, 4, 6, 8, 10]

// Exercício 19: Objetos e Interfaces
interface Movie {
  title: string;
  director: string;
  year: number;
}

const movies: Movie[] = [
  { title: "Movie 1", director: "Director 1", year: 2000 },
  { title: "Movie 2", director: "Director 2", year: 2010 },
  { title: "Movie 3", director: "Director 3", year: 2020 },
];

// Exercício 20: Arrays e Métodos
const products2: { name: string; price: number; quantity: number }[] = [
  { name: "Product 1", price: 10, quantity: 5 },
  { name: "Product 2", price: 5, quantity: 10 },
  { name: "Product 3", price: 2, quantity: 20 },
];

function calculateTotalStockValue(arr: { price: number; quantity: number }[]): number {
  return arr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}

console.log(calculateTotalStockValue(products2)); // Output: 170

// Exercício 21: Funções e Tipos
function isPositiveNumber(num: number): boolean {
  return num > 0;
}

console.log(isPositiveNumber(5)); // Output: true

// Exercício 22: Callbacks e Arrays
const numbersArray4: number[] = [2, 4, 6, 8, 10];

function areAllNumbersEven(arr: number[]): boolean {
  return arr.every((num) => num % 2 === 0);
}

console.log(areAllNumbersEven(numbersArray4)); // Output: true

// Exercício 23: Objetos e Métodos
const person = {
  name: "John Doe",
  age: 25,
  height: 1.75,
  displayHeightInfo() {
    if (this.height > 1.7) {
      console.log("The person is tall");
    } else {
      console.log("The person is short");
    }
  },
};

person.displayHeightInfo(); // Output: The person is tall

// Exercício 24: Arrays e Callbacks
const stringsArray2: string[] = ["apple", "banana", "orange", "kiwi"];

function getStringsStartingWithA(arr: string[]): string[] {
  return arr.filter((str) => str.startsWith("A"));
}

console.log(getStringsStartingWithA(stringsArray2)); // Output: ["apple"]

// Exercício 25: Objetos e Interfaces
interface Animal {
  name: string;
  species: string;
  age: number;
}

const animals: Animal[] = [
  { name: "Dog", species: "Canine", age: 5 },
  { name: "Cat", species: "Feline", age: 3 },
  { name: "Bird", species: "Avian", age: 1 },
];

// Exercício 26: Funções e Tipos
function getSmallestNumber(arr: number[]): number {
  return Math.min(...arr);
}

console.log(getSmallestNumber(numbersArray)); // Output: 1

// Exercício 27: Callbacks e Objetos
const cars: { model: string; color: string; price: number }[] = [
  { model: "Car 1", color: "Red", price: 10000 },
  { model: "Car 2", color: "Blue", price: 15000 },
  { model: "Car 3", color: "Green", price: 20000 },
];

function getModelOfMostExpensiveCar(arr: { price: number }[]): string {
  const highestPrice = Math.max(...arr.map((car) => car.price));
  const car = arr.find((car) => car.price === highestPrice);
  return car ? car.model : "";
}

console.log(getModelOfMostExpensiveCar(cars)); // Output: "Car 3"

// Exercício 28: Arrays e Métodos
const numbersArray5: number[] = [1, 2, 3, 2, 4, 5, 1, 3];

function getUniqueNumbers(arr: number[]): number[] {
  return [...new Set(arr)];
}

console.log(getUniqueNumbers(numbersArray5)); // Output: [1, 2, 3, 4, 5]

// Exercício 29: Objetos e Métodos
const house = {
  numberOfRooms: 3,
  color: "White",
  address: "123 Main St",
  displayHouseInfo() {
    console.log(`Number of rooms: ${this.numberOfRooms}, Color: ${this.color}`);
  },
};

house.displayHouseInfo(); // Output: Number of rooms: 3, Color: White

// Exercício 30: Funções e Tipos
function sumCorrespondingElements(arr1: number[], arr2: number[]): number[] {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length");
  }

  return arr1.map((num, index) => num + arr2[index]);
}

console.log(sumCorrespondingElements([1, 2, 3], [4, 5, 6])); // Output: [5, 7, 9]