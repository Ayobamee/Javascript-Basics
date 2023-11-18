// Defining a class
class Language {
  constructor(name, purpose, yearCreated) {
    this.name = name;
    this.purpose = purpose;
    this.yearCreated = yearCreated;
  }
}

// Exporting the instance

export const language = new Language(
  "JavaScript",
  "Programming Language",
  1995
);
