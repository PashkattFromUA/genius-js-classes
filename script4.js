// const student = {
//   name: "",
//   specialty: "",
//   avgGrade: 0,
//   missedClasses: 0,
//   showInfo: function () {
//     console.log(
//       `Ім'я: ${this.name}, Спеціальність: ${this.specialty}, Середній бал: ${this.avgGrade}, Пропущено занять: ${this.missedClasses}`
//     );
//   },
// };

// const student1 = {
//   name: "Олександр",
//   specialty: "Комп'ютерні науки",
//   avgGrade: 4.5,
//   missedClasses: 3,
// };

// student.showInfo.call(student1);

// const student2 = {
//   name: "Марія",
//   specialty: "Філологія",
//   avgGrade: 4.8,
//   missedClasses: 1,
// };

// student.showInfo.apply(student2);

// const student3 = {
//   name: "Іван",
//   specialty: "Економіка",
//   avgGrade: 4.2,
//   missedClasses: 5,
// };

// const showStudent3Info = student.showInfo.bind(student3);
// showStudent3Info();

// const def = {
//   text: "ts",
//   showDef: function () {
//     document.getElementById("output").textContent =`${this.text}`;
//   },
// };

// const HTML = {
//   text: "HTML (HyperText Markup Language) — це мова розмітки, яка використовується для створення структури веб-сторінок.",
// }

// const CSS = {
//   text: "CSS (Cascading Style Sheets) — це мова стилів, яка використовується для оформлення веб-сторінок, включаючи кольори, шрифти та макет.",
// }

// document
//   .getElementById("htmlButton")
//   .addEventListener("click", def.showDef.bind(HTML));
// document
//   .getElementById("cssButton")
//   .addEventListener("click", def.showDef.bind(CSS));

// function shop(itemName, pricePerKg, quantity) {
//   const totalPrice = pricePerKg * quantity; 
//   return `Товар: ${itemName}, Вартість: ${totalPrice.toFixed(2)} грн`;
// }

// console.log(shop("banana", 30, 4.5));   
// console.log(shop("cherry", 58, 1.3));   
// console.log(shop("orange", 89, 3.4));   