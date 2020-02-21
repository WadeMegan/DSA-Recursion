// Below partition is Hoare's algorithm.
let partition = function(arr, low, high) {
  let pivotValue = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (i <= high && arr[i] <= pivotValue) {
      i++;
    }

    while (arr[j] > pivotValue) {
      j--;
    }

    if (i < j) {
      // swap arr[i], arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    } 
  }

  arr[low] = arr[j];
  arr[j] = pivotValue;

  // return the pivot index
  return j;
};
