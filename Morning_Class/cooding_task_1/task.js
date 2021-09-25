"use strict";

/*
*************************CODING TASK*********************************
1. Create variables to represent scores of exams for Matt and Simon and set values   80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log 
  the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result 
  in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console 
  as an additional information the student name and his points
7. Test all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and 
  Matt failed; d. both students failed).
*/

// SOLUTION:
(function () {
  // Task_1
  let scoreMatt = 80;
  let scoreSimon = 45;

  // Task_7
  // BOTH PASSED
  scoreMatt = 100;
  scoreSimon = 100;
  // BOTH FAILED
  scoreMatt = 0;
  scoreSimon = 0;

  // Task_2
  const lowerLimit = 51;

  // Task_3
  // Task_4
  // Task_5
  if (scoreMatt >= lowerLimit && scoreSimon >= lowerLimit) {
    console.log("Both students passed an exam");
  } else if (scoreMatt >= lowerLimit || scoreSimon >= lowerLimit) {
    console.log("One of the students has passed an exam");
  } else {
    console.log("Both students have failed");
  }

  // Task_6
  if (scoreMatt >= lowerLimit) {
    console.log(`Matt has passed an exam (${scoreMatt})`);
  }
  if (scoreSimon >= lowerLimit) {
    console.log(`Matt has passed an exam (${scoreSimon})`);
  }
})();
