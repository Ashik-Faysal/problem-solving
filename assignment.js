//Problem 1: Let’s play a mind game.

function mindGame(number) {
  /*mindGame function is checking for a number of some mathematical tram...and then showing a sum result.*/
  if (typeof number !== "number") {
    // for checking validity of numbers.
    return "Please enter a number";
  }
  const result = (number * 3 + 10) / 2 - 5;
  return result;
}

// Problem 2: Finding even or odd.

function evenOdd(string) {/*
The ' evenOdd ' function is used to check whether this function is even or odd.*/
  if (typeof string !== "string") {
       // For validation purposes only.
      return "Provide valid input";
    }
    if (string.length % 2 === 0) {
      //Dividing by two is even if the remainder is zero, and odd if the remainder is 1.
      return "even";
       //"even" if the length of the string is an even number.
    }
    else {
        return "odd";
  }
}

//Problem 3: Is Less or Greater than seven.

function isLGSeven(number) {
  /*Take a number and subtract seven from it
 Check whether the number is less than or equal to or greater than seven.*/

  if (typeof number !== "number") {
    // for checking validity of numbers.
    return "Please enter a valid number";
  }

  if (number - 7 < 7) {
    // if number is less than seven then return the result.
    const result = number - 7;
    return result;
  } else {
    return number * 2; // if number is greater than seven then return number*2.
  }
}

//Problem 4: Finding Bad data.

function findingBadData(array) { // finding bad data and storing it in the badData array.
  if (!Array.isArray(array)) { // for validation purposes.
    return "Please Input an array";
  }

  let badData = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      badData.push(array[i]);//less than zero elements are pushed on badData array.
    }
  }
  return badData.length; //returns the array length.
}

//Problem 5: Convert your gems into diamond...

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  //input parameters gems and output diamond.
if ( //for validation . only numbers can be accepted.
  typeof firstFriendGems !== "number" ||
  typeof secondFriendGems !== "number" ||
  typeof thirdFriendGems !== "number"
) {
  return "All arguments must be numbers.";
}
  const firstFriendsDiamond = firstFriendGems * 21;
  const secondFriendsDiamond = secondFriendGems * 32;
  const thirdFriendsDiamond = thirdFriendGems * 43;
  const totalGems =
    firstFriendsDiamond + secondFriendsDiamond + thirdFriendsDiamond;

  if (totalGems > 1000 * 2) { // if totalGems is than 2000 return totalGems-2000;
    return totalGems - 2000;
  } else {
    return totalGems; // totalGems <2000 . then return totalGames.
  }
}