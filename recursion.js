/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index === nums.length) {
    return 1;
  }

  return nums[index] * product(nums, index + 1);
}



/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, maxLength = 0) {
  if (index === words.length) {
    return maxLength; 
  }

  const currentLength = words[index].length;
  if (currentLength > maxLength) {
    maxLength = currentLength; 
  }

  return longest(words, index + 1, maxLength);
}


/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index >= str.length) {
    return ''; 
  }

  // Include every other character in the result.
  return str[index] + everyOther(str, index + 2);
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  str = str.toLowerCase(); // Convert to lowercase for case-insensitivity.

  function checkPalindrome(left, right) {
    if (left >= right) {
      return true; 
    }

    if (str[left] !== str[right]) {
      return false; // Not a palindrome 
    }

    return checkPalindrome(left + 1, right - 1);
  }

  return checkPalindrome(0, str.length - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) {
    return -1; 
  }

  if (arr[index] === val) {
    return index; 
  }

  return findIndex(arr, val, index + 1); 
}
/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") {
    return str; 
  }

  const lastChar = str.charAt(str.length - 1); 
  const restOfString = str.slice(0, -1); 
  return lastChar + revString(restOfString); 
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]); 
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key])); 
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; // Base case: the value is not present in the array.
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    return mid; // Found the value, return its index.
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1); // Search in the left half of the array.
  } else {
    return binarySearch(arr, val, mid + 1, end); // Search in the right half of the array.
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
