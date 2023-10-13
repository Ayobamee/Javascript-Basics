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
