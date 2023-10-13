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
