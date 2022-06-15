function stringValueOnly(str) {
  return str.replace(/[\W_]/gi, "");
}

function stringLowerCased(str) {
  return str.toLowerCase();
}

const stringReversed = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

function palindrome(str) {
  const cleanedUpStr = stringValueOnly(str);

  const lowercaseStr = stringLowerCased(cleanedUpStr);

  const reversedStr = stringReversed(lowercaseStr);

  return lowercaseStr == reversedStr;
}

palindrome("eye");
