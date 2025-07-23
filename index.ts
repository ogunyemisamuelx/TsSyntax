// console.log("hi");

// const MyName: string = "Mije";
// let myCar: string = "Mecedes Benz";

// const GenderisFemale: boolean = true;
// const isPaymentCompleted: boolean = false;

//Number
// const age: number = 55;
// const height: number = 180;

//Undefined

// const url: undefined = undefined;
// const checkingResponse: undefined = undefined;

///Working with Non-primitive Datatypes

// Empty array
// const arr: [] = [];

///An array of string

// const arrOfString: string[] = ["Red", "blue", "yellow", "purple", "pink"];
///arrOfNumber
// const arrOfNumbers: Number[] = [1, 2, 3, 4, 5, 6];

//arrOfBoolean
// const arrOfBoolean: boolean[] = [true, false];

// An arrOf Undefined

// const arrOfUndefined: undefined[] = [undefined, undefined];

//Empty object
// const all: {} = {};

//Nested Objects

// const Person: {
//   name: string;
//   gender: string;
//   haspaidFees: boolean;
//   isUndefined: undefined;
// } = {
//   name: "Mije",
//   gender: "Male",
//   haspaidFees: true,
//   isUndefined: undefined,
// };

// const helo: {}[] = [{ nME: "Jken" }];
// const hello: {}[] = [{ nME: "Jke" }];

// const persontwo = {
//   name: "Mije",
//   gender: "Male",
//   haspaidFees: true,
//   isUndefined: undefined,
//   Hobbies: [{ name: "ss" }],
// };
// console.clear();

// const x = ["*", "%", "#", "+"];
// const xx = "Than*k%Yo#u+Lo%r#d";
// const xr = xx.split("");

// console.log(
//   xr
//     .filter((el) => {
//       return !x.includes(el);
//     })
//     .join("")
// );

//OS Ts >>>> IQ/Quiz
// {
//   let setCounter = () => {
//     let count = 10;
//     const timer = setInterval(() => {
//       console.log(count);
//       if (count === 0) {
//         console.log("Time up!");
//         clearInterval(timer);
//         const clearing = setInterval(() => {
//           clearInterval(clearing);
//           console.clear();
//         }, 5000);
//       }
//       count--;
//     }, 1000);
//   };
//   setCounter();
// }
//Comment and like and follow for more

console.clear();
{
  // let firName = "myself";
  // console.log(firName);
  // let f = JSON.parse("5");
  // console.log(typeof f);
}

// {
//   let x: number = 173; // 371

//   const reverseNumber = (n: number): number => {
//     return parseInt(n.toString().split("").reverse().join(""));
//   };

//   const reverseNumber1 = (n: number): number => {
//     let str: string = n.toString();
//     let x: string = "";
//     for (let i of str) {
//       x = i + x;
//     }

//     return parseInt(x);
//   };

// console.log(reverseNumber1(45));

// const sumUp = (n: number): number => {
//   let stopRun: number = n;
//   let x: number = 0;

//   while (stopRun > 0) {
//     x = x + stopRun;
//     stopRun--;
//   }

//   return x;
// };

// const sumUp1 = (n: number): number => {
//   let x: number = 0;

//   for (let i = 0; i <= n; i++) {
//     x = x + i;
//   }

//   return x;
// };

// const sumUp2 = (n: number): number => {
//   let x: Array<number> = [];

//   for (let i = 0; i <= n; i++) {
//     x.push(i);
//   }

//   return x.reduce((a: number, b: number): number => {
//     return a + b;
//   }, 0);
// };

// const sumUp3 = (n: number): number => {
//   return (n * (n + 1)) / 2;
// };

// let startReading: number = performance.now();
// console.log(sumUp(5));
// let endReading: number = performance.now();
// console.log(endReading - startReading);
console.clear();
// console.time("timer: ");
// console.log(sumUp(100000000000));
// console.timeEnd("timer: ");

// console.time("timer1: ");
// console.log(sumUp1(100000000000));
// console.timeEnd("timer1: ");

// console.time("timer2: ");
// console.log(sumUp2(1000000000));
// console.timeEnd("timer2: ");

// console.time("timer3: ");
// console.log(sumUp3(100000000000));
// console.timeEnd("timer3: ");

// const printMax = (n: number): void => {
//   for (let i = 1; i <= Math.max(10, n); i++) {
//     console.log(i);
//   }
// };

// printMax(9);

// console.log(Math.max(3, 8));
// }

//OS Ts >>>> IQ/Quiz
{
  // const printMin = (n: number): void => {
  //   for (let i = 1; i <= Math.min(10, n); i++) {
  //     console.log(i);
  //   }
  // };
  // printMin(9);
  //(A) 1 2 3 4 5 6 7 8 9
  //(B) 1
  //(C) 1 2 3 4 5 6 7 8 9 10
  //(D) 10
}
//Comment like and follow for more
console.clear();

// {
// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//   year: CarYear;
//   type: CarType;
//   model: CarModel;
// };

// const carYear: CarYear = 2001;
// const carType: CarType = "Toyota";
// const carModel: CarModel = "Corolla";
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel,
// };

// console.log(car);
// }

{
  // let firstName: string = "mello";
  // console.log(firstName);
  // let firstName:string = "mello"
  // firstName = 22
  // const json = JSON.parse("55");
  // console.log(typeof json);
  // let u: any = true;
  // u = "string";
  // Math.round(u);
  // let w: unknown = 1;
  // w = "string";
  // w = {
  //   run: () => {
  //     console.log("i am therefore");
  //   },
  // } as { run: () => void };
  // if (typeof w === "object" && w !== null) {
  //   (w as { run: Function }).run();
  // }
  // let x: never = true;
  // console.log(x);
  // let x: undefined = undefined;
  // let y: null = null;
  // console.log(x, y);
  // let myVar: null;
  // const names: string[] = [];
  // names.push("hey");
  // names.push("how are you");
  // console.log(names);
  // const names: string[] = ["just jakky"];
  // names.push("haha");
  // console.log(names);
  // const num = [1, 2, 3];
  // num.push(4);
  // console.log(num);
  // let Head: number = num[3];
  // console.log(Head);
  // let OutTuple: [number, boolean, string];
  // OutTuple = [5, false, "Coding God was here"];
  // OutTuple.push("Something new and wrong");
  // console.log(OutTuple);
  // const graph: [x: number, y: number] = [55.2, 41.3];
  // console.log(graph);
  // const graph: [number, number] = [55.2, 41.3];
  // let [x, y] = graph;
  // console.log(graph);
  // const car: { type: string; price: number } = {
  //   type: "corolla",
  //   price: 200,
  // };
  // console.log(car);
  // const car = {
  //   type: "hello",
  // };
  // car.type = "d";
  // console.log(car);
  // const car: { type: string; milleage?: number } = {
  //   type: "toy",
  // };
  // car.milleage = 200;
  // console.log(car);
  // const x: { [index: string]: number } = {};
  // x.jack = 23;
  // x.mark = "hay"
  // console.log(x);
  // enum x {
  //   north = 1,
  //   east,
  //   south,
  //   west,
  // }
  // let y = x.north;
  // console.log(y);
  // enum StatusCode {
  //   NotFound = 404,
  //   Success = 200,
  //   Accepted = 202,
  //   BadRequest = 400,
  // }
  // console.log(StatusCode.NotFound);
  // console.log(StatusCode.NotFound);
  // let y: any = true;
  // y = "s";
  // y.runAnonexistmethod();
  // console.log(Math.round(y));
  // Math.round(y);
  // y.rub
  // console.log(y);
  // let x:unknown = 1
  //  x = "string"
  //  x = {
  //   xr:() => {
  //     console.log("thereFore i am")
  //   }
  //  }as {xr: () => void}
  //  if(typeof x === 'object' && x !== null) {
  //   (x as {xr:Function}).xr()
  //  }
  // const Names: string[] = [];
  // Names.push("new");
  // console.log(Names);
  // const names:readonly string[] = ["dylan"];
  // names.push("saves");
  // console.log(names);
  // const numbers = [1, 2, 3, 4];
  // numbers.push(5);
  // console.log(numbers);
  // let head: number = numbers[0];
  // console.log(head);
  // let x: unknown = 1;
  // x = "string";
  // x = {
  //   xr: () => {
  //     console.log("Therefore i am ");
  //   },
  // } as { xr: () => void };
  // if (typeof x === "object" && x !== null) {
  //   (x as { xr: Function }).xr();
  // }
  // let x: [boolean, number, string];
  // x = [true, 2, "Coding God IS here"];
  // console.log(x);
  // let x: [boolean, number, string];
  // x = [true, 2, "Coding God has always been here"];
  // let y: any = x;
  // x.push("Somehting new and wrong");
  // console.log(y);
  // const graph: [number, number] = [22.3, 22.3];
  // const [x, y] = graph;
  // console.log(graph);
  // const x: {box:string,rest:number} = {
  //   box: "string",
  //   rest:2
  // }
  // console.log(x)
  // const x = {
  //   type1: "string",
  // };
  // x.type1 = "dhdh";
  // console.log(x);
  // const x: { type: string; milleage?: number } = {
  //   type: "string",
  // };
  // x.milleage = 2;
  // console.log(x);
  // const x: { [index: string]: number } = {};
  // x.new = 3;
  // x.e = "s"
  // console.log(x);
  // enum x {
  //   north = 1,
  //   south,
  //   west,
  //   east,
  // }
  // let y = x.north;
  // console.log(y);
  // enum x {
  //   NotFound = 404,
  //   Success = 200,
  //   Accepted = 202,
  //   BadRequest = 400,
  // }
  // console.log(x.Accepted);
  // console.log(x.NotFound);
  // enum x {
  //   North = "north",
  //   East = "east",
  //   South = "south",
  //   West = "west",
  // }
  // console.log(x.East);
  // console.log(x.North);
  // type x = string;
  // type y = number;
  // type xy = {
  //   xx: x;
  //   yy: y;
  // };
  // const xxr: x = "xreme";
  // const yyr: y = 2;
  // const a: xy = {
  //   xx: xxr,
  //   yy: yyr,
  // };
  // console.log(a);
  // interface Rectangle {
  //   x: string;
  //   y: string;
  // }
  // const u: Rectangle = {
  //   x: "width",
  //   y: "height",
  // };
  // console.log(u);
  // interface reCtangleShape {
  //   width: number;
  //   height: number;
  // }
  // interface x extends reCtangleShape {
  //   color: string;
  // }
  // const y: x = {
  //   width: 20,
  //   height: 10,
  //   color: "blue",
  // };
  // console.log(y);
  // const x = (e: string | number) => {
  //   console.log(`my status code is ${e}`);
  // };
  // x(404);
  // x("404");
  // const x = (e: string | number) => {
  //   console.log(`my status code runs on ${e}`.toUpperCase());
  // };
  // x("404");
  // x(404);
  // function t(): number {
  //   return new Date().getTime();
  // }
  // console.log(t());
  // function x(): void {
  //   console.log("hello!");
  // }
  // x();
  // function add(a: number, b: number, c?: number) {
  //   return a + b + (c || 0);
  // }
  // console.log(add(2, 5));
  // const x = (val: number, exp: number = 10) => {
  //   return val ** exp;
  // };
  // console.log(x(10));
  // let x: unknown = 1;
  // x = "string";
  // x = {
  //   xr: () => {
  //     console.log("Therefore i am");
  //   },
  // } as { xr: () => void };
  // if (typeof x === "object" && x !== null) {
  //   (x as { xr: Function }).xr();
  // }
  // let x: unknown = "hello";
  // console.log((x as unknown as number).length);
  // Next > Secial Types
  // let v: any = true;
  // v = "string";
  // Math.round(v);
  // console.log(v);
  // const numbers = [1, 2, 3];
  // numbers.push(4);
  // numbers.push("2")
  // let head: number = numbers[0];
  // console.log(head);
  // let x: [number, boolean, string];
  // x = [1, true, "friendly"];
  // console.log(x);
  // const graph: [x: number, y: number] = [55.2, 41.3];
  // console.log(graph);
  // const car: { type: string; model: string; year: number } = {
  //   type: "Toyato",
  //   model: "COrrola",
  //   year: 2009,
  // };
  // console.log(car);
  // let x: unknown = 1;
  // x = "string";
  // x = {
  //   xr: () => {
  //     console.log("Therefore i am");
  //   },
  // } as { xr: () => void };
  // if (typeof x === "object" && x !== null) {
  //   (x as { xr: Function }).xr();
  // }
  // const car = {
  //   type: "Toyota",
  // };
  // car.type = "Ford";
  // car.type = 2
  // console.log(car);
  // const car: { type: string; mileage?: number } = {
  //   type: "Toyota",
  // };
  // car.mileage = 2000;
  // console.log(car);
  // const nameAgeMap: { [index: string]: number } = {};
  // nameAgeMap.jack = 25;
  // // nameAgeMap.mark = "fifty"
  // console.log(nameAgeMap);
  // let x: unknown = 1;
  // x = "string";
  // x = {
  //   xr: () => {
  //     console.log("Therefore i am");
  //   },
  // } as { xr: () => void };
  // if (typeof x === "object" && x !== null) {
  //   (x as { xr: Function }).xr();
  // }
  // enum Cr {
  //   North = "north",
  //   East = "east",
  //   South = "south",
  //   West = "west",
  // }
  // console.log(Cr.East);
  // enum StatusCodes {
  //   NotFound = 404,
  //   Succes = 200,
  //   Accepted = 202,
  //   BadRequest = 400,
  // }
  // console.log(StatusCodes.Succes);
  // x = "North"
  // enum myEnum {
  //   myFirstConst = "First",
  //   mySecondConst = "Second",
  // }
  // console.log(myEnum.myFirstConst);
  // type CarYear = number;
  // type CarType = string;
  // type CarModel = string;
  // type Car = {
  //   year: CarYear;
  //   type: CarType;
  //   model: CarModel;
  // };
  // const carYear: CarYear = 2001;
  // const carType: CarType = "toyota";
  // const carModel: CarModel = "Corolla";
  // const car: Car = {
  //   year: carYear,
  //   type: carType,
  //   model: carModel,
  // };
  // console.log(car);
  // interface Rectangle {
  //   height: number;
  //   width: number;
  // }
  // const rectangle: Rectangle = {
  //   height: 20,
  //   width: 10,
  // };
  // interface Rectangle {
  //   height: number;
  //   width: number;
  // }
  // interface ColorRectangle extends Rectangle {
  //   color: string;
  // }
  // const coloredRectangle: ColorRectangle = {
  //   height: 20,
  //   width: 10,
  //   color: "red",
  // };
  // console.log(coloredRectangle);
  // function prinstatuscode(code: string | number) {
  //   console.log(`My status code is ${code}`);
  // }
  // prinstatuscode(404);
  // prinstatuscode("404");
  // function getTime(): number {
  //   return new Date().getTime();
  // }
  // function printHello(): void {
  //   console.log("hello");
  // }
  // printHello();
  // function multily(a: number, b: number) {
  //   return a * b;
  // }
  // console.log(multily(2, 2));
  // function add(a: number, b: number, c?: number) {
  //   return a + b + (1 || c);
  // }
  // console.log(add(2, 4));
  // function pow(value: number, exponent: number = 10) {
  //   return value ** exponent;
  // }
  // console.log(pow(10));
  // function divide({
  //   dividend,
  //   divisor,
  // }: {
  //   dividend: number;
  //   divisor: number;
  // }) {
  //   return dividend / divisor;
  // }
  // console.log(divide({ dividend: 10, divisor: 2 }));
  // function add(a: number, b: number, ...rest: number[]) {
  //   return a + b + rest.reduce((p, c) => p + c, 5);
  // }
  // console.log(add(2, 3));
  // type Negate = (value: number) => number;
  // const negateFunction: Negate = (value) => value * -1;
  // console.log(negateFunction(2));
  // function myFunc(): string {
  //   return "Lerning is fun";
  // }
  // console.log(myFunc());
  // let x: unknown = "hello";
  // console.log((x as string).length);
  // class Person {
  //   name: any;
  // }
  // const person = new Person();
  // person.name = "Jane";
  // console.log(person);
  // class Person {
  //   public name: any;
  //   public constructor(name: any) {
  //     this.name = name;
  //   }
  //   public getName(): string {
  //     return this.name;
  //   }
  // }
  // const person = new Person("jane");
  // console.log(person.getName());
  // class Person {
  //   public constructor(private name: string) {}
  //   public getName(): string {
  //     return this.name;
  //   }
  // }
  // const person = new Person("jane");
  // console.log(person.getName());
  // class Person {
  //   private readonly name: string;
  //   public constructor(name: string) {
  //     this.name = name;
  //   }
  //   public getName(): string {
  //     return this.name;
  //   }
  // }
  // const person = new Person("jane");
  // console.log(person.getName());
  // interface Shape {
  //   getAre: () => number;
  // }
  // class Rectangle implements Shape {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly height: number
  //   ) {}
  //   public getAre(): number {
  //     return this.width * this.height;
  //   }
  // }
  // const x = new Rectangle(10, 20);
  // console.log(x.getAre());
  // interface Shape {
  //   getArea: () => number;
  // }
  // class Rectangle implements Shape {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly height: number
  //   ) {}
  //   public getArea(): number {
  //     return this.width * this.height;
  //   }
  // }
  // class Square extends Rectangle {
  //   public constructor(width: number) {
  //     super(width, width);
  //   }
  // }
  // const x = new Square(20);
  // console.log(x.getArea());
  // interface Shape {
  //   getArea: () => number;
  // }
  // class RecTangle implements Shape {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly heigth: number
  //   ) {}
  //   public getArea(): number {
  //     return this.width * this.heigth;
  //   }
  //   public toString(): string {
  //     return `Rectangle[width=${this.width}]`;
  //   }
  // }
  // class Sqaure extends RecTangle {
  //   public constructor(width: number) {
  //     super(width, width);
  //   }
  //   public override toString(): string {
  //     return `Sqaure[width=${this.width}]`;
  //   }
  // }
  // const x = new Sqaure(40);
  // console.log(x.toString());
  // abstract class Polygon {
  //   public abstract getArea(): number;
  //   public toString(): string {
  //     return `Polygon[area=${this.getArea()}]`;
  //   }
  // }
  // class Rectangle extends Polygon {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly height: number
  //   ) {
  //     super();
  //   }
  //   public getArea(): number {
  //     return this.width * this.height;
  //   }
  // }
  // const x = new Rectangle(10, 20);
  // console.log(x.getArea());
  // function createPair<S, T>(v1: S, v2: T): [S, T] {
  //   return [v1, v2];
  // }
  // console.log(createPair<string, number>("hello,", 42));
  // class NameValue<T> {
  //   private _value: T | undefined;
  //   constructor(private name: string) {}
  //   public setValue(value: T) {
  //     this._value = value;
  //   }
  //   public getValue(): T | undefined {
  //     return this._value;
  //   }
  //   public toString(): string {
  //     return `${this.name}:${this._value}`;
  //   }
  // }
  // let value = new NameValue<number>("myNumber");
  // value.setValue(10);
  // console.log(value.toString());
  // type Wrapped<T> = { value: T };
  // const wrappedValue: Wrapped<number> = { value: 10 };
  // console.log(wrappedValue);
  // class NameValue<T = string> {
  //   private _value: T | undefined;
  //   constructor(private name: string) {}
  //   public setValue(value: T) {
  //     this._value = value;
  //   }
  //   public getValue(): T | undefined {
  //     return this._value;
  //   }
  //   public toString(): string {
  //     return `${this.name}: ${this._value}`;
  //   }
  // }
  // let value = new NameValue("myNumber");
  // value.setValue("myValue");
  // console.log(value.toString());
  // function createLoggedPairs<
  //   S extends string | number,
  //   T extends string | number
  // >(v1: S, v2: T): [S, T] {
  //   console.log(`creating pair: v1='${v1}', v2='${v2}'  `);
  //   return [v1, v2];
  // }
  // console.log(createLoggedPairs(20, 3));
  // interface Point {
  //   x: number;
  //   y: number;
  // }
  // let pointPart: Partial<Point> = {};
  // pointPart.x = 10;
  // console.log(pointPart);
  // interface Car {
  //   make: string;
  //   model: string;
  //   mileage?: number;
  // }
  // let myCar: Required<Car> = {
  //   make: "Ford",
  //   model: "Focus",
  //   mileage: 120000,
  // };
  // console.log(myCar);
  // const nameAgeMap: Record<string, number> = {
  //   Alice: 21,
  //   Bob: 25,
  // };
  // console.log(nameAgeMap);
  // interface Person {
  //   name: string;
  //   age: number;
  //   location?: string;
  // }
  // const bob: Omit<Person, "age" | "location"> = {
  //   name: "Bob",
  // };
  // console.log(bob);
  // interface Person {
  //   name: string;
  //   age: number;
  //   location?: string;
  // }
  // const bob: Pick<Person, "name"> = {
  //   name: "bob",
  // };
  // console.log(bob);
  // type Primitive = string | number | boolean;
  // const value: Exclude<Primitive, string> = true;
  // console.log(typeof value);
  // type PointGenerator = () => { x: number; y: number };
  // const point: ReturnType<PointGenerator> = {
  //   x: 10,
  //   y: 20,
  // };
  // console.log(point);
  // type PoinPrinter = (p: { x: number; y: number }) => void;
  // const point: Parameters<PoinPrinter>[0] = {
  //   x: 10,
  //   y: 20,
  // };
  // console.log(point);
  // interface Person {
  //   name:string,
  //   age:number
  // }
  // const person: Readonly<Person> = {
  //   name: "Dylan",
  //   age:35
  // }
  // person.age = 2
  // interface Person {
  //   age: number;
  //   firstName: string;
  //   lastName: string;
  // }
  // interface Person {
  //   name: string;
  //   age: number;
  // }
  // function printPersonProperty(person: Person, property: keyof Person) {
  //   console.log(`Printing person property ${property}: "${person[property]}"`);
  // }
  // let person = {
  //   name: "samuel",
  //   age: 20,
  // };
  // printPersonProperty(person, "name");
  // printPersonProperty(person, "age");
  // type StringMap = { [key: string]: unknown };
  // function createStringPair(
  //   property: keyof StringMap,
  //   value: string
  // ): StringMap {
  //   return { [property]: value };
  // }
  // console.log(createStringPair("Name", "samuel"));
  // let value: string | undefined | null = null;
  // console.log(typeof value);
  // value = "hello";
  // console.log(typeof value);
  //  s
  // value = undefined;
  // console.log(typeof value);
  // interface House {
  //   sqft: number;
  //   yard?: {
  //     sqft: number;
  //   };
  // }
  // function printYardSize(house: House) {
  //   const yardSize = house.yard?.sqft;
  //   if (yardSize === undefined) {
  //     console.log("No yard");
  //   } else {
  //     console.log(`Yard is ${yardSize} sqft`);
  //   }
  // }
  // let home: House = {
  //   sqft: 500,
  // };
  // printYardSize(home);
  // function printMileade(mileage: number | null | undefined) {
  //   console.log(`Mileage: ${mileage ?? "Not available"}`);
  // }
  // printMileade(null);
  // printMileade(3);
  // function getValue(): string | undefined {
  //   return "hello";
  // }
  // let value = getValue();
  // console.log(`value length:` + value);
  // let array: number[] = [1, 2, 3];
  // let value = array[0];
  // console.log(value);
  // {
  //   // Prevent the array from being changed:
  //   const Names:_____ string[] = ["Job"]
  //   //ES js >>> Quiz
  //   //(A) private
  //   //(B) public
  //   //(C) readonly
  //   //(D) null
  //   //like comment and follow ➕ for more
  // }
  //   {
  //   //Es Js >>>> Quiz
  //   const graph: [x: number, y: number] = [34.3, 45.3];
  //   const [x, y] = graph;
  //   console.log(x,y);
  //   //(A) [34.3,45.3]
  //   //(A) [x:34.3,y:45.3]
  //   //(C) 34.3,45.3
  //   //(D) Error
  //   // like comment and follow ➕ for more
  // }
  // type Color = "red" | "green" | "blue"
  // type HexColor<T extends Color> = `#${string}`
  // let mycolor:HexColor<"blue"> = "#0000FF"
  // console.log(mycolor)
  // let firstName: string = "dylan";
  // firstName = 33
  // let fr = "dylan";
  // fr = 33
  // let x: unknown = 1;
  // x = "string";
  // x = {
  //   xr: () => {
  //     console.log(`Therefore i am`);
  //   },
  // } as { xr: () => void };
  // if (typeof x === "object" && x != null) {
  //   (x as { xr: Function }).xr();
  // }
  //   {
  //   //Fill in the empty box
  //   //ES Js >>>> Quzi
  //   const car: {x:____,y:____,z:___} = {
  //     x: "CyberTruck",
  //     y: "20Rx",
  //     z:2024
  //   }
  //   //(A) number string boolean
  //   //(B) string number number
  //   //(C) string string number
  //   //(D) string undefined number
  //   //(E Syntax error
  //   // like comment and follow ➕ for more
  // }
  // const numbers = [1, 2, 3];
  // numbers.push(4);
  // console.log(numbers);
  // let head: number = numbers[0 + 1];
  // console.log(head);
  //   let ourTuple:  [number, boolean, string] = [4,false,"kf"]
  // ourTuple.push("new")
  // console.log(ourTuple)
  // const car: { type: string; model: string; year: number; milleage?: number } =
  //   {
  //     type: "Toyota",
  //     model: "Corrolla",
  //     year: 2008,
  //   };
  // car.milleage = 111;
  // console.log(car);
  // const nameAgeMap: { [index: string]: number } = {};
  // nameAgeMap.jack = 25;
  // console.log(nameAgeMap);
  // enum cardinalDirection {
  //   East,
  //   North,
  //   West,
  //   South,
  // }
  //   {
  //   // Es Ts >>>> Quiz
  //   const x: { [index: string]: number } = {};
  //   x.y = 25;
  //   console.log(x);
  //   //(A) { }
  //   //(B) {y:25}
  //   //(C) {25}
  //   //(D) {index:25}
  //   //(E) Syntax Error
  //   // like comment and follow ➕ for more
  // }
  // let currentdirection = cardinalDirection.East;
  // console.log(currentdirection);
  // enum StatusCode {
  //   BadRequest = 404,
  //   Success = 200,
  //   Accepted = 202,
  // }
  // console.log(StatusCode.Accepted);
  // enum CardinalDirectionString {
  //   North = "North",
  //   South = "South",
  //   West = "West",
  //   East = "East",
  // }
  // console.log(CardinalDirectionString.North);
  // // currentDirection = "Essst"
  // enum MyEnum {
  //   myFirstConstant,
  //   mySecondConstant,
  // }
  // console.log(MyEnum.myFirstConstant);
  // type CarYear = number;
  // type CarType = string;
  // type CarModel = string;
  // type Car = {
  //   year: CarYear;
  //   type: CarType;
  //   model: CarModel;
  // };
  // type carYear = CarYear;
  // type carType = CarType;
  // type carModel = CarModel;
  // const car: Car = {
  //   year: 2000,
  //   type: "corrolla",
  //   model: "any",
  // };
  // {
  //   //Example
  //   interface Rectangle {
  //     width: number;
  //     height: number;
  //   }
  //   const rectangle: Rectangle = {
  //     width: 200,
  //     height: 100,
  //   };
  //   console.log(rectangle);
  //   //Es Js >>>> quiz
  //   //  Create a Type Alias for a string, called carType:
  //   type ____ = string;
  //   //(A) Type
  //   //(B) Alias
  //   //(C) carType
  //   //(D string
  //   //like comment and follow ➕ for more
  // }
  // console.log(car);
  // interface Rectangle {
  //   width: number;
  //   height: number;
  // }
  // const rectangle: Rectangle = {
  //   width: 200,
  //   height: 100,
  // };
  // console.log(rectangle);
  // interface Rectangle {
  //   width: number;
  //   heigt: number;
  // }
  // interface coloredRectangle extends Rectangle {
  //   color: string;
  // }
  // const ColoredRectangle: coloredRectangle = {
  //   width: 200,
  //   heigt: 100,
  //   color: "blue",
  // };
  // console.log(ColoredRectangle);
  // {
  //   //Es Ts >>>> Quiz
  //   //Specify the paramater "Variable" for the function can be either string or number ↓
  //  → const x = (Variable:_____|____ ) => {
  //     console.log(Variable)
  //   }
  //   //(A) number string
  //   //(B) string string
  //   //(C) string number
  //   //(D) number number
  //   //(E) Syntax Error
  //   // like comment and follow ➕ for more
  // }
  // const PrintStatusCode = (code: string | number) => {
  //   console.log(`My status code is ${code}`);
  // };
  // PrintStatusCode("'404'");
  // function GetTime(): number {
  //   return new Date().getTime();
  // }
  // console.log(GetTime());
  //   const x = (): void => {
  //     console.log("Hello");
  //   };
  // x()
  // function multiply(a: number, b: number, c?: number) {
  //   return a + b + (c || 0);
  // }
  // console.log(multiply(2, 4));
  // function pow(value: number, exponent: number = 10) {
  //   return value ** exponent;
  // }
  // {
  // // OS Js >>> Quiz
  // type Defined = (value: number) => number;
  // const negateFunction: Defined = (value) => value * -1;
  // console.log(negateFunction(3));
  //(A) -2
  //(B)  3
  //(C) -3
  //(D)  2
  //(E) Syntax Error
  // like comment and follow ➕ for more
  // }
  // {
  // // OS Ts >>>> Quiz✅
  // let x: unknown = "Hello_Facebook_Friends";
  // console.log((x as string).length);
  //(A) 5
  //(B) 4
  //(C) 22
  //(D) Hello_Facebook_Friends
  //(E) Syntax Error
  // like comment and follow ➕ for more
  // }
  // console.log(pow(10));
  // const divided = ({
  //   dividned,
  //   divisor,
  // }: {
  //   dividned: number;
  //   divisor: number;
  // }) => {
  //   return dividned / divisor;
  // };
  // console.log(divided({ dividned: 10, divisor: 2 }));
  // const add = (a: number, b: number, ...rest: number[]) => {
  //   return a + b + rest.reduce((p, c) => p + c, 0);
  // };
  // console.log(add(10, 10, 10, 10, 10));
  // let x: unknown = "hello";
  // console.log((x as string).length);
  // let x: unknown = 4;
  // console.log((x as string).length);
  // let x :unknown = "hello"
  // console.log((<string>x).length)
  // let x = "hello";
  // console.log((x as unknown as string).length);
  // class Person {
  //   name: any;
  // }
  // const person = new Person();
  // person.name = "Jane";
  // console.log(person);
  // class Person {
  //   private name: string;
  //   public constructor(name: string) {
  //     this.name = name;
  //   }
  //   public getName(): string {
  //     return this.name;
  //   }
  // }
  // const person = new Person("new");
  // console.log(person.getName());
  // class Person {
  //   public constructor(private name:string) {}
  //   public getName(): string {
  //     return this.name
  //   }
  // }
  // const person = new Person("added")
  // console.log(person.getName())
  // class Person {
  //   private readonly name: string;
  //   public constructor(name: string) {
  //     this.name = name;
  //   }
  //   public getName(): string {
  //     return this.name;
  //   }
  // }
  // const person = new Person("joined");
  // console.log(person);
  // interface Shape {
  //   getArea: () => number;
  // }
  // class Rectangle implements Shape {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly height: number
  //   ) {}
  //   public getArea(): number {
  //     return this.width * this.height;
  //   }
  // }
  // const g = new Rectangle(10, 20);
  // console.log(g.getArea());
  // interface Shape {
  //   getArea: () => number;
  // }
  // class Rectangle implements Shape {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly height: number
  //   ) {}
  //   public getArea(): number {
  //     return this.width * this.height;
  //   }
  // }
  // class Square extends Rectangle {
  //   public constructor(width: number) {
  //     super(width, width);
  //   }
  // }
  // // console.log(Square());
  // let h = new Square(4)
  // console.log(h.getArea())
  // interface Shape {
  //   getArea: () => number;
  // }
  // class Rectangle implements Shape {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly height: number
  //   ) {}
  //   public getArea(): number {
  //     return this.width * this.height;
  //   }
  //   public toString(): string {
  //     return `Rectangle[width=${this.width}, height=${this.height}]`;
  //   }
  // }
  // class Square extends Rectangle {
  //   public constructor(width: number) {
  //     super(width, width);
  //   }
  //   public override toString(): string {
  //     return `Square[width=${this.width}]`;
  //   }
  // }
  // let g = new Square(20);
  // console.log(g.toString());
  // abstract class PolyGon {
  //   public abstract getArea(): number;
  //   public toString(): string {
  //     return `PolyGon[area=${this.getArea()}]`;
  //   }
  // }
  // class Rectangle extends PolyGon {
  //   public constructor(
  //     protected readonly width: number,
  //     protected readonly height: number
  //   ) {
  //     super();
  //   }
  //   public getArea(): number {
  //     return this.width * this.height;
  //   }
  // }
  // {
  //   //OS Js >>>> Quiz
  //   function CombineDataTypes<X, Y>(N1: X, N2: Y): [X, Y] {
  //     return [N1, N2];
  //   }
  //   console.log(CombineDataTypes<string, number>("Twenty", 2));
  //   //(A) Twenty
  //   //(B) Twenty2
  //   //(C) 2
  //   //(D) ['Twenty', 2 ]
  //   //(E Syntax Error
  //   //like comment and follow ➕ for more
  // }
  // let g = new Rectangle(2, 2);
  // console.log(g.toString());
  // console.log(g.getArea());
  // class Person {
  //   private name: string;
  // {
  //   //OS Ts >>>> Quiz
  //   class x {
  //   n:______  /* specify the type */
  // }
  // const y = new x();
  // y.n = "Abraham";
  // //(A) number
  // //(B) null
  // //(C) string
  // //(D) Syntax Error
  // //(E) undefined
  // //like comment and follow ➕ for more
  // }
  //   public constructor(name: string) {
  //     this.name = name;
  //   }
  //   public getName(): string {
  //     return this.name;
  //   }
  // }
  // let x = new Person("day");
  // console.log(x)
  // class NamedValue<T> {
  //   private _value: T | undefined;
  //   constructor(private name: string) {}
  //   public setValue(value: T) {
  //     this._value = value;
  //   }
  //   public getValue(): T | undefined {
  //     return this._value;
  //   }
  //   public toString(): string {
  //     return `${this.name}: ${this._value}`;
  //   }
  // }
  // let value = new NamedValue<number>("myNumber");
  // value.setValue(10);
  // console.log(value.toString());
  // type Wrapped<T> = {value:T}
  // const wrappedValue: Wrapped<number> = {value: 10}
  // console.log(wrappedValue)
  // class NameValue<T = string> {
  //   private _value: T | undefined;
  //   constructor(private name: string) {}
  //   public setValue(value: T) {
  //     this._value = value;
  //   }
  //   public getValue(): T | undefined {
  //     return this._value;
  //   }
  //   public toString(): string {
  //     return `${this.name} ${this._value}`;
  //   }
  // }
  // let value = new NameValue("myNumber");
  // value.setValue("myvalue");
  // console.log(value.toString());
  // function createLoggedPairs<
  //   S extends string | number,
  //   T extends string | number
  // >(v1: S, v2: T): [S, T] {
  //   console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  //   return [v1, v2];
  // }
  // console.log(createLoggedPairs(1, 2));
  // function createPair<
  //   typeX extends string | number,
  //   typeY extends string | number
  // >(x: typeX, y: typeY): [typeX, typeY] {
  //   return [x, y];
  // }
  // console.log(createPair<string, number>("meaning", 2));
  // {
  //   //OS Ts >>> Quiz
  //    interface Numbers {
  //     x: number;
  //     y: number;
  //   }
  //   let z: Partial<Numbers> = {};
  //   z.x = 10;
  //   console.log(z);
  //   //(A) 10
  //   //(B) { x: 10 }
  //   //(C) x
  //   //(D) Syntax error
  //   //like comment and follow ➕ for more
  // }
  // interface Car {
  //   make:string;
  //   model:string;
  //   mileage?:number
  // }
  // let myCar: Required<Car> = {
  //   make: 'Ford',
  //   model:"Focus",
  //   mileage: 12000
  // }
  // console.log(myCar)
  // const nameAgeMap: Record<string, number> = {
  //   Alice: 21,
  //   Bob: 25,
  // };
  // console.log(nameAgeMap);
  // interface Person {
  //   name: string;
  //   age: number;
  //   location?: string;
  // }
  // const bob: Omit<Person, "age" | "location"> = {
  //   name: "bob",
  // };
  // console.log(bob);
  // interface Person {
  //   name: string;
  //   age: number;
  //   location?: string;
  // }
  // const bob: Pick<Person, "name"> = {
  //   name: "Bob",
  // };
  // console.log(bob);
  // type Primitive = string | number | boolean
  // const value: Exclude<Primitive, string> = true
  // console.log(value)
  // type PointGenerator = () => { x: number; y: number };
  // const point: ReturnType<PointGenerator> = {
  //   x: 10,
  //   y: 20,
  // };
  // console.log(point);
  // type PointPrinter = (p: {x:number; y:number}) => void;
  // const point: Parameters<PointPrinter>[0] = {
  //   x:10,
  //   y:20
  // }
  // console.log(point)
  // interface Person {
  //   name: string;
  //   age: number;
  // }
  // const person: Readonly<Person> = {
  //   name: "D",
  //   age: 34,
  // };
  // // person.name = "s"
  // console.log(person);
  // interface Person {
  //   name: string;
  //   age: number;
  // }
  // function printPersonPerty(person: Person, property: keyof Person) {
  //   console.log(`Printin person property ${person[property]}`);
  // }
  // let person = {
  //   name: "Max",
  //   age: 27,
  // };
  // printPersonPerty(person, "name");
  // printPersonPerty(person, "age");
  // type StringMap = { [key: string]: unknown };
  // function createStringPair(
  //   property: keyof StringMap,
  //   value: string
  // ): StringMap {
  //   return { [property]: value };
  // }
  // console.log(createStringPair("hello", "adiox"));
  // let value: string | undefined | null = null;
  // value = "hello";
  // value = undefined;
  // console.log(value);
  // interface House {
  //   sqft: number;
  //   yard?: {
  //     sqft: number;
  //   };
  // }
  // function printYrdSize(house: House) {
  //   const yardSize = house.yard?.sqft;
  //   if (yardSize === undefined) {
  //     console.log("No yard");
  //   } else {
  //     console.log(`Yard is ${yardSize} sqft`);
  //   }
  // }
  // let home: House = {
  //   sqft: 500,
  // };
  // printYrdSize(home);
  // function printMilleage(mileage: number | null | undefined) {
  //   console.log(`Mileage: ${mileage ?? "Not Available"}`);
  // }
  // printMilleage(null);
  // printMilleage(0);
  // function getValue(): string | undefined {
  //   return "hellos";
  // }
  // let value = getValue();
  // console.log("value length:" + value?.length);
  // let arrat: number[] = [1, 2, 3];
  // let value = arrat[0];
  // console.log(value);
  // {
  //   let x: number = 23;
  //   console.log(x);
  // }
  // type Color = "red" | "green" | "blue";
  // type HexColor<T extends Color> = `#${string}`;
  // let myColor: HexColor<"blue"> = "#0000FF";
  // console.log(myColor);
  // type DynamicObject = { [key: string as `dynamic_${string}`]: string };
  // type DynamicObject = { [key: any as `dynamic_${any}`]: any };
  // let obj: DynamicObject = { dynamic_key: "value" };
  // Next > TS 5 Updates
}
