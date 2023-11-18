// Defining a class
class Language {
  constructor(name, purpose, yearCreated) {
    this.name = name;
    this.purpose = purpose;
    this.yearCreated = yearCreated;
  }
}

// Creating an instance of the class
// const myLanguage = new Language('JavaScript', 'Programming Language', 1995);

// Exporting the instance
// export default myLanguage;

export const language = new Language(
  "JavaScript",
  "Programming Language",
  1995
);
