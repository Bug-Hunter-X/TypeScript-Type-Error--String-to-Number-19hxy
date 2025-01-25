function printNumber(num: number): void {
  console.log(num);
}

printNumber(10); // Works fine
printNumber("10"); // Type 'string' is not assignable to type 'number'.