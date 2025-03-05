/// key-value object
const user = {
  name: 'Minwoo',
  age: 30,
  greet() {
    console.log('Hello, my name is ' + this.name)
  },
}

console.log(user.name) // Minwoo
console.log(user.age) // 30
console.log(user) // { name: 'Minwoo', age: 30 }

user.greet() // Hello, my name is Minwoo
