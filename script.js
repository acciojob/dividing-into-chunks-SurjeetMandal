const divide = (arr, n) => {
  let result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // If adding the current element doesn't exceed the limit
    if (currentSum + arr[i] <= n) {
      currentSubarray.push(arr[i]);
      currentSum += arr[i];
    } else {
      // If adding the current element exceeds the limit,
      // start a new subarray
      result.push(currentSubarray);
      currentSubarray = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Add the last subarray
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));


