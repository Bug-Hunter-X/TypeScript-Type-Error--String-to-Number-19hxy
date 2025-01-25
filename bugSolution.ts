function printNumber(num: number): void {
  console.log(num);
}

function printNumberSafe(num: number | string): void {
  if (typeof num === 'number') {
    console.log(num);
  } else if (typeof num === 'string' && !isNaN(Number(num))) {
    console.log(Number(num));
  } else {
    console.error("Invalid input: Not a number or convertible string");
  }
}

printNumber(10); // Works fine
printNumberSafe("10"); // Works fine. Output: 10
printNumberSafe("abc"); // Works fine. Error message: Invalid input: Not a number or convertible string