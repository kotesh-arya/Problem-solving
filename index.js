console.clear();

function isPalindrome(x) {
  console.log("X-outer", x);

  let duplicate = x;
  let reverseNum = 0;
  while (x > 0) {
    // console.log("X", x);
    let lastDigit = x % 10;
    // console.log("last digit", lastDigit);
    reverseNum = reverseNum * 10 + lastDigit;
    // console.log("reverseNum", reverseNum);
    x = Math.floor(x / 10);
    // console.log("X-after dividing", x);
  }
  //   console.log("reverseNum", reverseNum);
  if (reverseNum === duplicate) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPalindrome(121));

// -------------------------------------------

function isArmstrongNum(x) {
  console.log("Duplicate", x);

  let duplicate = x;
  let digitCubeSum = 0;
  while (x > 0) {
    // console.log("X", x);
    let lastDigit = x % 10;
    // console.log("last digit", lastDigit);
    digitCubeSum = digitCubeSum + lastDigit ** 4;
    // console.log("reverseNum", reverseNum);
    x = Math.floor(x / 10);
    // console.log("X-after dividing", x);
  }
  console.log("digitCubeSum", digitCubeSum);
  if (digitCubeSum === duplicate) {
    return true;
  } else {
    return false;
  }
}
// console.log(isArmstrongNum(1634));

function printDivisors(x) {
  let divisors = [];
  for (let i = 1; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      divisors.push(i);
      if (x / i !== i) {
        divisors.push(x / i);
      }
    }
  }
  console.log(
    "divisors of ",
    x,
    divisors.sort((a, b) => a - b)
  );
}
// printDivisors(36);

function isPrime(x) {
  let counter = 0;
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      counter += 1;
      // console.log("hi")
    }
  }
  console.log(counter);
  if (counter === 2) {
    console.log("PRIME");
  } else {
    console.log("NON-PRIME");
  }
}
// isPrime(21);

// Pattern 1 ✅️
function squarePattern(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      star += "*";
    }
    console.log(star);
    star = "";
  }
}

// squarePattern(5);

// Pattern 2 ✅️
function stairPattern(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      star += "*";
    }
    console.log(star);
    star = "";
  }
}
// stairPattern(5);

// Pattern 3 ✅️
function numberStairPattern(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += j;
    }
    console.log(star);
    star = "";
  }
}
// numberStairPattern(6);

// Pattern 4 ✅️
function numberStairPatternTwo(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += i;
    }
    console.log(star);
    star = "";
  }
}
// numberStairPatternTwo(6);

// pattern 5 ✅️
function descendingPattern(n) {
  let star = "";
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // console.log("*")
      star += "*";
    }
    console.log(star);
    star = "";
  }
}
// descendingPattern(6);

// Pattern 6 ✅️
function numberStairPatternDescending(n) {
  let star = "";
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      star += j;
    }
    console.log(star);
    star = "";
  }
}
// numberStairPatternDescending(6);

// Pattern 7 ✅️
function pyramidStarPattern(n) {
  let star = "";
  let space = " ";

  for (let i = 0; i < n; i++) {
    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      star += space;
    }

    // stars
    for (let j = 0; j < 2 * i + 1; j++) {
      star += "*";
    }

    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      star += space;
    }
    console.log(star);
    star = "";
  }
}
// pyramidStarPattern(5);

// Pattern 8 ✅️
function reversePyramidStarPattern(n) {
  let star = "";
  let space = " ";
  // pyramidStarPattern(5);
  for (let i = n; i >= 0; i--) {
    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      star += space;
    }

    // stars
    for (let j = 0; j < 2 * i + 1; j++) {
      star += "*";
    }

    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      star += space;
    }
    console.log(star);
    star = "";
  }
}

// reversePyramidStarPattern(4);

// Pattern 9 ✅️
function icebergPatter(n) {
  pyramidStarPattern(n);
  reversePyramidStarPattern(n);
}

// icebergPatter(4);

//  Pattern 10 ✅️
function arrowHeadPattern(n) {
  let star = "";
  for (let i = 1; i <= 2 * n - 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      star += "*";
      if (i >= n) {
        star = "";
        for (let j = 0; j < 2 * n - i; j++) {
          star += "*";
        }
      }
    }

    console.log(star);
    star = "";
  }
}
// arrowHeadPattern(5);

// Pattern - 11 ✅️
function binaryTrianlge(n) {
  let space = "";
  let star;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      star = 1;
    } else {
      star = 0;
    }
    for (let j = 0; j <= i; j++) {
      space += star;
      star = 1 - star;
    }
    console.log(space);
    space = "";
  }
}
// binaryTrianlge(5);    ANALYZE AND RE-CHECK THIS ONCE AGAIN TILL YOU GET A CLEAR UNDERSTANDING

function binaryTriangle(n) {
  // Ajoy kumar das optimized version
  for (i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + ((j + i + 1) % 2);
    }
    console.log(str);
  }
}
// binaryTriangle(5);

// Pattern 12 ✅️
function viodNumberPattern(n) {
  let line = "";
  let space = " ";

  for (let i = 0; i < n; i++) {
    // numbers
    for (let j = 0; j < i + 1; j++) {
      line += j + 1;
    }

    // spaces
    for (let j = 0; j < 2 * n - (2 * i + 2); j++) {
      line += space;
    }

    // numbers
    for (let j = i + 1; j > 0; j--) {
      line += i + 1;
    }
    console.log(line);
    line = "";
  }
}

// viodNumberPattern(7);

// Pattern 13 ✅️
function incrementalStepsPattern(n) {
  let num = 1; // TAKING A NUMBER
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      line += num; //APPENDNG  IT TO THE LINE
      num++; // THEN INCREMENT IT  :)
    }
    console.log(line);
    line = ""; // jumping to a new line
  }
}
// incrementalStepsPattern(5);

// Pattern 14 ✅️

// Alphabets stair pattern
function alphabetStairPattern(n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      let charConversion = String.fromCharCode(65 + j);
      line += String.fromCharCode(65 + j);
    }
    console.log(line);
    line = "";
  }
}

// alphabetStairPattern(5);

// Pattern 15 ✅️

// Alphabets stair pattern Reverse
function alphabetStairPatternReverse(n) {
  let line = "";
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let charConversion = String.fromCharCode(65 + j);
      line += String.fromCharCode(65 + j);
    }
    console.log(line);
    line = "";
  }
}
// alphabetStairPatternReverse(5);

// Pattern 16 ✅️

// increasing Repeated Chars Pattern
function increasingRepeatedChars(n) {
  let line = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      let charConversion = String.fromCharCode(65 + i);
      line += String.fromCharCode(65 + i);
    }
    console.log(line);
    line = "";
  }
}
// increasingRepeatedChars(5);

// Pattern 17 ✅️
function charsPyramid(n) {
  let line = "";
  let space = "_";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      line += space;
    }

    let charValue = 64;
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j > i) {
        // line += "*";
        // console.log("-----------------------", charValue);

        charValue -= 1;
        // console.log("charvaluekoko", charValue);

        line += String.fromCharCode(charValue);
      } else {
        // console.log("charvalue", charValue);
        charValue += 1;
        line += String.fromCharCode(charValue);
      }
    }

    for (let j = 0; j < n - i; j++) {
      line += space;
    }
    console.log(line);
    line = "";
  }
}
// charsPyramid(4);

// Pattern 18 ✅️

function printWeirdChars(n) {
  let charValue = 69;
  let line = "";
  for (let i = 0; i <= n; i++) {
    for (let j = i; j >= 0; j--) {
      line += ` ${String.fromCharCode(charValue - j)} `;
    }
    console.log(line);
    line = "";
  }
}
// printWeirdChars(4);

// Patttern 19 ✅️
function printSquareHolePattern(n) {
  let line = "";
  let space = " ";

  for (let i = n; i >= 0; i--) {
    // line += "*";
    // stars
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    //spaces
    for (let j = 0; j < (n - i) * 2; j++) {
      // console.log((n - i) * 2);
      line += " ";
    }
    // // stars
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    console.log(line);
    line = "";
  }
  for (let i = 0; i <= n; i++) {
    // line += "*";
    // stars
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    //spaces
    for (let j = 0; j < (n - i) * 2; j++) {
      // console.log((n - i) * 2);
      line += " ";
    }
    // // stars
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    console.log(line);
    line = "";
  }
}

// printSquareHolePattern(4);

// Pattern 20 ✅️
function butterflyPattern(n) {
  let line = "";
  let space = " ";
  for (let i = 0; i <= n; i++) {
    //     stars
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    // spaces
    for (let j = 0; j < 2 * n - 2 * i; j++) {
      line += space;
    }
    //     stars
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    console.log(line);
    line = "";
  }
  for (let i = n; i > 0; i--) {
    //     stars
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    // // spaces
    for (let j = 0; j < 2 * n - 2 * (i - 1); j++) {
      line += space;
    }
    // //     stars
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
    line = "";
  }
}
// butterflyPattern(4);

// Pattern 21 ✅️
function voidSquarePattern(n) {
  let line = "";
  let space = " ";
  let counter = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      for (let j = 0; j < n; j++) {
        line += "*";
      }
      console.log(line);
      line = "";
    } else {
      // star
      for (let j = 0; j < i - counter; j++) {
        line += "*";
      }
      // Space
      for (let k = 0; k <= i - counter; k++) {
        line += space;
      }

      // star
      for (let j = 0; j < i - counter; j++) {
        line += "*";
      }
      console.log(line);
      line = "";
      counter++;
    }
  }
}

// voidSquarePattern(4);



