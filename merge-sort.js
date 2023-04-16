function mergeSort(arr) {
  const n = arr.length;

  // Base case: an array of length 1 is already sorted
  if (n <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves back together
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // Either left or right may have elements left
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}