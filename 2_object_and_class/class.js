class User {
  /// constructor는 객체를 생성하고 초기화하기 위한 특수한 메서드
  /// constructor는 클래스 내에 하나만 존재할 수 있으며, 만약 여러개가 존재하면 SyntaxError가 발생
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi() {
    console.log(`Hello, I am ${this.name}`)
  }
}

/// constructor 값 없이 생성 하면 undefined로 출력
const user = new User()
user.sayHi() // Hello, I am undefined

/// constructor 값으로 생성
const user2 = new User('Minwoo', 30)
user2.sayHi() // Hello, I am Minwoo

/// JS에서 클래스는 함수의 한 형태이다.
/// -> 객체를 반환하는 함수다.
console.log(typeof User) // function

/// 모든 함수에는 prototype이라는 특수한 프로퍼티가 있다.
/// 함수에 선언된 메서드는 prototype에 저장된다.
console.log(User.prototype.sayHi) // [Function: sayHi]

/// 때문에 객체에서 메서드를 호출할 때 prototype을 사용할 수 있다.
user2.__proto__.sayHi() // Hello, I am Minwoo
/// __proto__는 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다.
/// getter, setter의 역할을 한다.
