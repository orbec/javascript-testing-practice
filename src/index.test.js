import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

describe("capitalize testing", () => {
  test("capitalize should work with one word", () => {
    const word = "alejandro";
    expect(capitalize(word)).toMatch(/^[A-Z][^A-Z]*$/);
  });

  test("capitalize should validate word", () => {
    const word = null;
    expect(() => capitalize(word)).toThrow("param is null or undefined");
  });

  test("capitalize should not work with more than one word", () => {
    const word = "we have more than one word here";
    expect(() => capitalize(word)).toThrow("param is more than one word");
  });
});

describe("reverseString testing", () => {
  test("reverseString should work with one word", () => {
    const word = "Fidulius";
    expect(reverseString(word)).toMatch(word.split("").reverse().join(""));
  });

  test("reverseString should validate word", () => {
    const word = null;
    expect(() => reverseString(word)).toThrow("param is null or undefined");
  });

  test("reverseString should not work with more than one word", () => {
    const word = "we have more than one word here";
    expect(() => reverseString(word)).toThrow("param is more than one word");
  });
});

describe("calculator testing", () => {
  let number1 = 1;
  let number2 = 2;
  test("calculator.add should add 2 numbers", () => {
    number1 = 1;
    number2 = 2;
    expect(calculator.add(number1, number2)).toBe(number1 + number2);
  });
  test("calculator.add should throw error if one of the params is not a number", () => {
    number1 = 1;
    number2 = [];
    expect(() => calculator.add(number1, number2)).toThrow(
      "at least one of the params is not a number"
    );
  });
  test("calculator.substract should substract 2 numbers", () => {
    number1 = 1;
    number2 = 2;
    expect(calculator.substract(number1, number2)).toBe(number1 - number2);
  });
  test("calculator.substract should throw error if one of the numbers is not a number", () => {
    const number1 = 1;
    const number2 = undefined;
    expect(() => calculator.substract(number1, number2)).toThrow(
      "at least one of the params is not a number"
    );
  });

  test("calculator.multiply should multiply 2 numbers", () => {
    const number1 = 0;
    const number2 = 2;
    expect(calculator.multiply(number1, number2)).toBe(number1 * number2);
  });
  test("calculator.multiply should throw error if one of the numbers is not a number", () => {
    const number1 = 1;
    const number2 = [];
    expect(() => calculator.multiply(number1, number2)).toThrow(
      "at least one of the params is not a number"
    );
  });

  test("calculator.divide should divide 2 numbers", () => {
    number1 = 0;
    number2 = 2;
    expect(calculator.divide(number1, number2)).toBe(number1 / number2);
  });
  test("calculator.divide should throw error if one of the numbers is not a number", () => {
    number1 = 1;
    number2 = [];
    expect(() => calculator.divide(number1, number2)).toThrow(
      "at least one of the params is not a number"
    );
  });
  test("calculator.divide should throw error if the second number is 0", () => {
    number1 = 1;
    number2 = 0;
    expect(() => calculator.divide(number1, number2)).toThrow(
      "We cannot divide between 0"
    );
  });
});

describe("caesarCipher testing", () => {
  let word = "";
  let moves = 3;
  test("caesarCipher should move the chars in lower case the number of the given", () => {
    word = "abc";
    expect(caesarCipher(word, moves)).toBe("def");
  });

  test("caesarCipher should move the chars in upper case the number of the given", () => {
    word = "ABC";
    expect(caesarCipher(word, moves)).toBe("DEF");
  });

  test("caesarCipher should move the chars to the beginning if the chars are at the end.", () => {
    word = "HeLLo";
    expect(caesarCipher(word, moves)).toBe("KhOOr");
  });

  test("caesarCipher should ignore special chars and numbers", () => {
    word = "Hello, World!";
    expect(caesarCipher(word, moves)).toBe("Khoor, Zruog!");
  });

  test("caesarCipher should throw error if at least one of the params is undefined or null", () => {
    word = undefined;
    moves = null;
    expect(() => caesarCipher(word, moves)).toThrow(
      "At least one of the params is null or undefined"
    );
  });

  test("caesarCipher should throw error if the moves param is not a number", () => {
    word = "undefined";
    moves = "null";
    expect(() => caesarCipher(word, moves)).toThrow(
      "The moves param is not a number"
    );
  });
});

describe("analyzeArray testing", () => {
  let arr = [1, 8, 3, 4, 2, 6];
  test("analyzeArray should return an object with average, min, max, and length", () => {
    expect(analyzeArray(arr)).toBe(
      JSON.stringify({ average: 4, min: 1, max: 8, length: 6 })
    );
  });

  test("analyzeArray should ignore elements of the array that are not a number", () => {
    arr = [1, null, 8, undefined, 3, "a", 4, 2, 6];
    expect(analyzeArray(arr)).toBe(
      JSON.stringify({ average: 4, min: 1, max: 8, length: 9 })
    );
  });
});
