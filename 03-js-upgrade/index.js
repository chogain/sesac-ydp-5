// 구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha);

// 변수의 값 스왑(swap)
let num1 = 1;
let num2 = 3;
console.log(`swap 전 > ${num1}, ${num2}`);

[num1, num2] = [num2, num1];
console.log(`swap 후 > ${num1}, ${num2}`);

// 배열에 요소를 추가하면서 구조 분해 할당
const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3);

// -------------------------------------------

// 2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - 키 값과 변수명이 일치해야 함
const obj = {
  title: '엘리멘탈',
  content: '재미있다.',
  num: 5,
};

// 객체 구조 분해를 사용하지 않은 경우
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

// 객체 구조 분해 사용
// const { num, title, content } = obj;
// console.log(title, content, num);

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1); // key값과 변수명이 다르기 때문에 undefine

// 객체에 key를 추가하면서 객체 분해 할당
const { num, title, content, star = 1000 } = obj;
console.log(num, title, content, star);

// 콜론(;)을 이용하면 새 변수명으로 바꿔 저장할 수 있다.
const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, c2, n2);

// 과제
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();
// -------------------------------------------

// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축 해제하는 역할
// == 객체의 값을 펼침(spread)

// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b]; // [1, 2, 3, 4, 5]
console.log(spread);

// spread in string
const c = [...'HELLO']; //['H', 'E', 'L', 'L', 'O']
const d = 'HELLO'.split(''); //['H', 'E', 'L', 'L', 'O']
console.log(c);
console.log(d); // spread 연산자와 split() 메서드는 동일하게 기능

// spread in object
const chip = {
  base: 'chip',
  company: 'orion',
};

const potatoChip = {
  ...chip,
  // base: 'chip',
  // company: 'orion',
  flavor: 'potato',
};

const sweetPotatoChip = {
  ...chip,
  // base: 'chip',
  // company: 'orion',
  flavor: 'potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

// 과제
const word1 = 'abc';
const word2 = 'xyz';

const newarr = [...word1, ...word2];
console.log(newarr);

// rest 파라미터
// 1. 함수에서 rest를 사용할 때
const values = [10, 20, 30];

function get(a, ...rest) {
  console.log('a >> ', a);
  console.log('rest >> ', rest);
}

get(...values);

// 2. 객체에서 rest
const icecream = {
  company: 'orion',
  flavor: 'strawberry',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); // strawberry
console.log(rest); // { company: 'orion', price: 1000 }

// 3. 배열에서 rest
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = numbers;
console.log(one1); // 1
console.log(two1); // 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]

console.clear();
// -------------------------------------------

// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체 생성
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/
class House {
  // 생성자 함수, 객체의 속성(내부에서 사용할 변수) 부여
  // 생성자 함수: 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 객체 메소드
  getAge() {
    console.log(
      `${this.name}은(는) 건축한지 ${2023 - this.year}년 되었습니다.`
    );
  }
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}

// 클래스를 이용해 객체 생성
const house1 = new House(1990, '롯데캐슬', 1);
console.log('house1 >> ', house1);
console.log(typeof house1);
console.log(house1.year);
house1.getAge();
house1.getWindow();

const house2 = new House(2007, '자이', 10);
console.log(house2);
house2.getAge();
house2.getWindow();

// 실습 Shape 클래스 만들기
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// 클래스 상속
// - extends 키워드를 사용해 상속 가능
//- 상속을 이용하면 기존의 class 속성과 메소드를 받아와 사용하되, 추가적인 속성과 메소드를 더 정의할 수 있음
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // 부모 객체에서 상속 받아옴 == 상속한 부모 클래스의 생성자 호출
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}`;
  }

  // 오버라이딩(overriding)
  // 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 때
  getWindow() {
    return `${this.name} 아파트의 ${this.window}개의 창문은 ${this.windowMaker}에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(2022, '레미안', 3, 20, 'KCC');
console.log(apt1.getAptInfo());

console.clear();
// 실습 클래스 상속 (선택)
// Rectangle(직사각형) 클래스 만들기
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  diagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

// Triangle(삼각형) 클래스 만들기
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

// Circle (원) 클래스 만들기
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return (this.radius / 360) * 3.14 * (this.width / 2) ** 2;
  }
}

const rectangle1 = new Rectangle(4, 8);
console.log(rectangle1);
console.log(rectangle1.getArea());

const circle1 = new Circle(4, 4, 90);
console.log(circle1);
console.log(circle1.getArea());

const triangle1 = new Triangle(2, 3);
console.log(triangle1);
console.log(triangle1.getArea());

///////////////////
// 단축 평가
// &&, ||

// A && B : 두 개의 피연산자 모두 True일 떄만 True를 반환
// A || B : 두 개의 피연산자 중에서 하나만 True여도 True를 반환

console.log(true && true); // true
console.log(false && true); // false

console.log(true || false); // true
console.log(false || true); // true

const xx = 5;
const yy = 7;

// 삼항연산자 예시
const result1 = xx > yy ? 'xx가 큼' : 'yy가 큼';
console.log(result1); // b가 큼

// 단축평가 (&&, 논리곱)
const result2 = xx > yy && 'xx가 큼';
console.log(result2); // false
const result3 = xx < yy && 'yy가 큼';
console.log(result2); // yy가 큼

// 단축평가 (||, 논리합)
const result4 = xx || 100;
console.log(result4); // 5 (디폴트 값이 필요할 때 자주 사용)

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름 없음'); // 홍길동
console.log(nameEx2 || '이름 없음'); // 이름 없음
