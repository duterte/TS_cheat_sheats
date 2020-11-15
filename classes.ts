class User {
  private name: string;
  protected email: string;
  public age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`my name is ${this.name}`);
  }
  public register() {
    console.log(`${this.name} is now registered`);
  }
  public payInvoice() {
    console.log(`${this.name} received the invoice`);
  }
}

let German = new User('German Ochea', 'jdoe@gmail.com', 26);
console.log(German.age);

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  paidInvoice() {
    super.payInvoice();
  }
}

let mike: User = new Member(1, 'German Ochea', 'jdoe@gmail.com', 26);
mike.payInvoice;
