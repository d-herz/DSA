function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Sorted list
const arr = [1, 3, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 3)); // Output: 1
console.log(binarySearch(arr, 6)); // Output: -1