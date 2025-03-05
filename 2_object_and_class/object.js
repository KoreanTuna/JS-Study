/// key-value object
const user = {
  name: 'Minwoo',
  age: 30,
  greet() {
    console.log('Hello, my name is ' + this.name)
  },
}

console.log(user.name) // Minwoo
console.log(user['name']) // Minwoo;
/// 위 2가지 방법은 같은 결과를 출력한다.
/// 하지만, key가 변수로 주어지는 경우 []를 사용해야 한다.
let key = 'name'
console.log(user[key]) // Minwoo

console.log(user.age) // 30
console.log(user) // { name: 'Minwoo', age: 30 }

user.greet() // Hello, my name is Minwoo

/// for 문으로 객체 프로퍼티 순회 가능
const person = {
  name: 'John',
  age: 30,
  sayHello() {
    console.log('Hello!')
  },
}

for (let key in person) {
  console.log(`${key}: ${person[key]}`)
}

/// 원래 객체 없던 프로퍼티도 마치 있던 것처럼 사용 가능
/// 개빡치는 부분이 아닐 수 없다.
person['newData'] = 'new value'
console.log(person.newData) // new value

/// const 객체에 다른 객체 복사
const user3 = {
  name: 'Minwoo',
  age: 30,
}

const user4 = {}
for (let key in user3) {
  user4[key] = user3[key]
}
