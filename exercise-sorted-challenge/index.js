"use strict";

const isSorted = (arr) => {
  let ArrangementOrder;
  let answer = true;

  if (arr.length === 0 || arr.length === 1) {
    console.log(answer);
    return;
  }

  if (arr[0] < arr[1]) ArrangementOrder = "ascending";
  if (arr[0] > arr[1]) ArrangementOrder = "descending";

  for (let i = 0; i < arr.length - 1; i++) {
    if (ArrangementOrder === "ascending" && arr[i] < arr[i + 1]) "";
    else if (ArrangementOrder === "descending" && arr[i] > arr[i + 1]) "";
    else {
      answer = false;
      break;
    }
  }

  console.log(answer);
};

isSorted([]);
isSorted([42]);
isSorted([39, 42]);
isSorted([42, 39]);
isSorted([1, 2, 3, 4, 5]);
isSorted([5, 4, 3, 2, 1]);
isSorted([1, 5, 2]);
