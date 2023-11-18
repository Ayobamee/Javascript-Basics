const cohort15 = {
  programTitle: "Introduction to Software Testing",
  tutor: "Ayo",
  classYear: 2023,
  month: "October",
  getSummary: function () {
    console.log(
      `"${this.programTitle}" was curated by ${this.tutor} and hosted in ${this.classYear}.`
    );
  },
};

cohort15.getSummary();

/*
console.log: This is a function in JavaScript that is widely used to print/output information to the console. In most browsers, you can open the console using the Ctrl+Shift+J or Cmd+Opt+J (on Mac) keyboard shortcuts. When you're running JavaScript in a different environment, like Node.js, console.log() will output information to the terminal.
Template Literals (Backticks and ${...}): The string is enclosed with backticks (`...\``) — this is a feature in ES6 (a version of JavaScript) known as template literals. Template literals allow you to create strings that can span multiple lines and embed expressions/variables within them, which will be evaluated and concatenated into the resulting string. Expressions inside strings are enclosed in ${}`.
In this specific console.log:

${this.programTitle}: This will be replaced by the value of the programTitle property of the cohort15 object due to the this keyword, which is 'Introduction to Software Testing'.
${this.tutor}: Similarly, this will be replaced by the author property of the cohort15 object, which is 'Ayo'.
${this.classYear}: This will be replaced by the publishYear property of the cohort15 object, which is 2023.
${this.month}: This will be replaced by the month property of the cohort15 object, which is October.
Putting it all together, the template literal: console.log: This is a function in JavaScript that is widely used to print/output information to the console. In most browsers, you can open the console using the Ctrl+Shift+J or Cmd+Opt+J (on Mac) keyboard shortcuts. When you're running JavaScript in a different environment, like Node.js, console.log() will output information to the terminal.
Template Literals (Backticks and ${...}): The string is enclosed with backticks (`...\``) — this is a feature in ES6 (a version of JavaScript) known as template literals. Template literals allow you to create strings that can span multiple lines and embed expressions/variables within them, which will be evaluated and concatenated into the resulting string. Expressions inside strings are enclosed in ${}`.
In this specific console.log:
The resulting string will be output to the console when the getSummary method of cohort15 is called via cohort15.getSummary();.
In summary, the console.log statement in your code snippet is used to output a dynamically constructed string that summarizes the book using its properties, utilizing the template literal syntax for readability and conciseness.
*/
