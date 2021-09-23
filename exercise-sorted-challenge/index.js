"use strict";

const isSorted = (arr) => {
  let ArrangementOrder;
  let answer;

  if (arr.length === 0 || arr.length === 1) {
    console.log(true);
    return;
  }

  if (arr[0] < arr[1]) {
    ArrangementOrder = "ascending";
  } else {
    ArrangementOrder = "descending";
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i];
    const b = arr[i + 1];

    if (ArrangementOrder === "ascending" && a < b) {
      answer = true;
    } else if (ArrangementOrder === "descending" && a > b) {
      answer = true;
    } else {
      answer = false;
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
