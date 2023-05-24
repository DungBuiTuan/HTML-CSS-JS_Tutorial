/*let user = {
  Fname: "",
  Lname: "",
  set first(value) {
    this.first = value;
  },
  set last(value) {
    this.last = value;
  },
  fullname: function () {
    return this.Fname + "" + this.Lname;
  },
};
user.first = "bui";
user.last = "dung";
console.log(user.fullname());*/
class user {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  set first(value) {
    this.first = value;
  }
  set last(value) {
    this.last = value;
  }
  get fullname() {
    return this.first + "" + this.last;
  }
}
let user1 = new user("bui", "dung");
let user2 = new user("tuan", "li");

console.log(user1.fullname);
console.log(user2.fullname);
