class Abonent {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  set(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  get() {
    return `Ім'я: ${this.name}, Телефон: ${this.phoneNumber}`;
  }
}

const user1 = new Abonent("Іван", "123-456-789");
const user2 = new Abonent("Олена", "987-654-321");
const user3 = new Abonent("Андрій", "555-555-555");

console.log(user1.get());
console.log(user2.get());
console.log(user3.get());