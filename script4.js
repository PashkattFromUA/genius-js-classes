const student = {
  name: "",
  specialty: "",
  avgGrade: 0,
  missedClasses: 0,
  showInfo: function () {
    console.log(
      `Ім'я: ${this.name}, Спеціальність: ${this.specialty}, Середній бал: ${this.avgGrade}, Пропущено занять: ${this.missedClasses}`
    );
  },
};

const student1 = {
  name: "Олександр",
  specialty: "Комп'ютерні науки",
  avgGrade: 4.5,
  missedClasses: 3,
};

student.showInfo.call(student1);

const student2 = {
  name: "Марія",
  specialty: "Філологія",
  avgGrade: 4.8,
  missedClasses: 1,
};

student.showInfo.apply(student2);

const student3 = {
  name: "Іван",
  specialty: "Економіка",
  avgGrade: 4.2,
  missedClasses: 5,
};

const showStudent3Info = student.showInfo.bind(student3);
showStudent3Info();
