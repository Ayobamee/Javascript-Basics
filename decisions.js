const male = "Male";
const female = "Female";
const notSpecified = "notSpecified";

const printGenderMessage = (gender) => {
  if (gender === male) {
    console.log("The gender is Male.");
  } else if (gender === female) {
    console.log("The gender is Female.");
  } else {
    console.log("The gender is not specified.");
  }
};

/*
Explanation:
if (gender === male) { ... }: This block checks if gender is strictly equal to male. If true, it logs 'The gender is Male.' to the console.
else if (gender === female) { ... }: If the first condition is false, this block checks if gender is strictly equal to female. If true, it logs 'The gender is Female.' to the console.
else { ... }: If none of the above conditions are true, this block executes and logs 'Gender not specified.' to the console.
This code snippet works similarly to the switch...case example, providing a message based on the value of the gender parameter passed to the printGenderMessage function. Both if...else and switch...case structures have their own use cases, and you might prefer one over the other based on your specific use case and coding style preference.
*/

// printGenderMessage(male);
// printGenderMessage(female);
// printGenderMessage(notSpecified);

const displayGenderMessage = (gender) => {
  switch (gender) {
    case male:
      console.log("The gender is Male.");
      break;
    case female:
      console.log("The gender is Female.");
      break;
    default:
      console.log("The gender is not specified.");
  }
};

displayGenderMessage(male);
displayGenderMessage(female);
displayGenderMessage("test");

/*
Explanation:
const male = 'Male'; and const female = 'Female';: These two lines declare constants male and female, assigning them the string values 'Male' and 'Female', respectively.
const printGenderMessage = (gender) => { ... };: This declares an arrow function named printGenderMessage which takes a single parameter gender.
switch(gender) { ... }: The switch statement evaluates gender and matches the value with one of its case clauses. When a match is found, the code within that case is executed.
case male: ... and case female: ...: These clauses match when gender equals 'Male' or 'Female', respectively. If a match is found, it logs a corresponding message to the console.
break;: This statement ends the switch block once a match is found and the corresponding code is executed, preventing fallthrough to subsequent case clauses.
default: ...: This clause matches when no other cases match. It logs a generic message indicating that the gender is not specified.
The last two lines are example usages of the printGenderMessage function, calling it with male and female as arguments, and logging the appropriate messages to the console.
*/
