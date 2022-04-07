function map(arr, callback) {
  // calls function on each item in array, returns arr at correct index
  // take an empty arr, map over each item starting at [0] and beyond
  const start = [];
  for (let i = 0; i < arr.length; i++) {
    // transform each item of the arr with given function, push to orig arr
    const item = arr[i];
    const transformed = callback(item);
    start.push(transformed);
  }

  return start;
}
console.log(map([1, 6, 5], (n) => n * 2));

// | Input                       | Output        |
// | --------------------------- | ------------- |
// | `map([1, 6, 5], n => n**2)` | `[1, 36, 25]` | ???


function every(arr, predicate) {
  // loop thru all items in arr, if modulo of 2 = 0 return true
  let allItemsValidity = true;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // if modulo of 2 /= 0 return false (break once finding first false)
    if (!predicate(item)) {
      allItemsValidity = false;
      break;
    }
  }

  return allItemsValidity;
}

console.log(every([1, 2, 3], n => n % 2 === 0));
console.log(every([2, 4, 6], n => n % 2 === 0));

// | Input                                | Output  |
// | ------------------------------------ | ------- |
// | `every([2, 4, 6], n => n % 2 === 0)` | `true`  |
// | `every([1, 2, 3], n => n % 2 === 0)` | `false` |


function rootDigit(n) {
  // returns 1# that is sum of all digits of input number
  // when sum = 2+ digits, add those til only 1 digit output
}

// | Input       | Output | Notes                               |
// | ----------- | ------ | ----------------------------------- |
// | `123`       | `6`    | // 1 + 2 + 3 = 6                    |
// | `4322`      | `2`    | // 4 + 3 + 2 + 2 = 11  // 1 + 1 = 2 |
// | `999888777` | `9`    |