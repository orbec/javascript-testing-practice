const capitalize = (word) => {
  if (word) {
    if (word.split(" ").length === 1) {
      const capitalized =
        word.at(0).toUpperCase() + word.substring(1, word.length);
      return capitalized;
    }
    throw Error("param is more than one word");
  }
  throw Error("param is null or undefined");
};

const reverseString = (string) => {
  if (string) {
    if (string.split(" ").length === 1) {
      return string.split("").reverse().join("");
    }
    throw Error("param is more than one word");
  }
  throw Error("param is null or undefined");
};

const calculator = {
  add: (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    throw Error("at least one of the params is not a number");
  },
  substract: (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }
    throw Error("at least one of the params is not a number");
  },
  divide: (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      if (b !== 0) {
        return a / b;
      }
      throw Error("We cannot divide between 0");
    }
    throw Error("at least one of the params is not a number");
  },
  multiply: (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    }
    throw Error("at least one of the params is not a number");
  },
};

const caesarCipher = (word, moves) => {
  if (typeof word === "string" && typeof moves === "number") {
    const arr = [];
    word.split("").forEach((item) => {
      let val = item.charCodeAt(0);
      if ((val >= 65 && val <= 90) || (val >= 97 && val <= 122)) {
        val = val + moves;
        if ((val > 90 && val < 97) || val > 122) {
          val = val - 26;
        }
      }
      arr.push(String.fromCharCode(val));
    });
    return arr.join("");
  }
  if (typeof word === "string" && typeof moves !== "number") {
    throw Error("The moves param is not a number");
  }
  throw Error("At least one of the params is null or undefined");
};

const analyzeArray = (array) => {
  const length = array.length;
  array = array.filter((item) => typeof item === "number");
  array.sort();
  const min = array[0];
  const max = array[array.length - 1];
  const average = array.reduce((item, total) => item + total) / array.length;
  const obj = { average: average, min: min, max: max, length: length };
  return JSON.stringify(obj).toString();
};

export { capitalize, reverseString, caesarCipher, analyzeArray, calculator };
