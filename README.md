# 1. 자바스크립트의 개요
## 1.1 프로그래밍 언어로서의 자바스크립트
### 1.1.1 특징
1. 인터프리터 언어
* JIT(Just In Time Compiler) 내장
2. 동적 프로토타입 기반 객체 지향 언어
* 클래스 기반 언어인 C++, Java와 달리 자바스크립트는 프로토타입 기반 언어
* 객체를 생성한 이후에도 프로퍼티와 메서드를 동적으로 추가하거나 삭제할 수 있다.
3. 동적 타입 언어
* C++와 Java는 실행되기 전에 변수 타입이 결정되는 정적 타입언어지만, 자바스크립트는 실행 도중 데이터 타입이 결정되는 동적 타입 언어
4. 함수가 일급 객체다.
* 자바스크립트의 함수는 일급 객체이기 때문에 함수에 함수를 인수로 넘길 수 있다.
* 이를 통해 고차 함수를 구현할 수 있는 함수형 프로그래밍이 가능해진다.
>#### 일급객체의 조건
>* 모든 일급 객체는 함수의 실질적인 매개변수가 될 수 있다.  
>* 모든 일급 객체는 함수의 반환값이 될 수 있다.  
>* 모든 일급 객체는 할당의 대상이 될 수 있다.  
>* 모든 일급 객체는 비교 연산(==, equal)을 적용할 수 있다.
### 1.1.2 기술적 요소
1. ECMAScript(코어 언어)
* 어떠한 문서로 규정되어 있다.
  * ECMA(Ecma International)에서 표준화 작업을 하고 있고, ECMA-262라는 문서로 공개되고 있다.
2. 클라이언트 측의 고유한 기술 요소
웹 브라우저에서 동작하는 자바스크립트를 말한다.
* Window 인터페이스 : 자바스크립트로 브라우저 또는 창을 조작하는 기능을 제공
* DOM : 자바스크립트로 HTML 문서의 요소를 제어하는 기능을 제공
* XMLHttpRequest : 서버와 비동기로 통신하는 기능을 제공
3. 서버 측 자바스크립트의 고유한 기술 요소
웹 서버에서 동작하는 자바스크립트를 말한다. 
* Node.js : 구글이 개발한 자바스크립트 실행 환경
* Rhino : 오픈 소스로 개발되어 현재는 모질라(Mozilla)가 관리하고 있는 자바스크립트 실행 환경
* Aptana Jaxer : 압타나(Aptana) 사가 개발하고 현재는 오픈 소스로 개발되고 있는 자바스크립트 실행 환경
### 1.1.3 ECMAScript 6

## 1.2 자바스크립트의 역사
### 1.2.1 탄생
### 1.2.2 오명을 씻은 자바스크립트
### 1.2.3 자바스크립트의 현재와 미래

# 2. 프로그램의 작성법과 실행법
## 2.1 실습 준비하기
## 2.2 간단한 예제
## 2.3 프로그램 실행법
## 2.4 프로그램 작성법

# 3. 변수와 값
## 3.1 변수
### 3.1.1 변수 선언
```javascript
var sum;

var a, b, c;
console.log(a); // undefined

a = 2;
console.log(a); // 2

var x = 1, y = 2, z = 3;
console.log(z); // 3
```

### 3.1.2 변수 선언 생략
변수를 선언하지 않고 사용하면 자바스크립트 엔진이 자동으로 전역변수로 선언한다.
그러나 버그의 원인이 될 수 있다.
```javascript
console.log(x); // ReferenceError: x is not defined

x = 2;
console.log(x); // 2
```

### 3.1.3 변수 끌어올림과 변수 중복 선언
프로그램 중간에서 변수를 선언하더라도 변수가 프로그램 첫머리에 선언된 것처럼 변수를 끌어올릴 수 있다.  
이를 호이스팅(hoisting)이라고 한다. 단, 선언과 동시에 대입하는 코드는 끌어올리지 않는다.  
호이스팅은 자바스크립트 고유의 특징이기 때문에, 다른 언어 사용자를 배려하기 위해서 함수의 도입부에 변수를 선언해야 한다는 주장이 힘을 받고 있다.

```javascript
console.log(x); // undefined
var x;

console.log(y); // undefined
var y = 5;

console.log(z); // undefined
var z = 10;
console.log(z); // 10
```

### 3.1.4 변수의 명명 규칙
...
### 3.1.5 예약어
...

## 3.2 데이터 타입
### 3.2.1 데이터 타입과 변수의 동적 타이핑
자바스크립트는 실행할 때 변수에 저장된 데이터 타입을 동적으로 바꿀 수 있는 언어인 동적 타입 언어(dynamic typed language)이다.
```javascript
var pi = 3.14;
console.log(pi); // 3.14
pi = "원주율";
console.log(pi); // 원주율
```

### 3.2.2 데이터 타입의 분류
* 원시 타입(primitive type) : 숫자, 문자열, 논리값, 특수한 값(undefined, null), 심벌
  * 값 자체가 변수에 저장된다.
* 객체 타입
  * 객체 내부 정보를 수정할 수 있다.
### 3.2.3 숫자
자바스크립트에서 숫자는 64비트 부동소수점으로 표현한다. 이는 C나 Java에서 사용하는 double 타입에 해당한다.  
프로그램에 직접 작성할 수 있는 상수값을 **리터럴**(literal)이라고 한다. 숫자를 표현하는 리터럴은 정수 리터럴과 부동소수점 리터럴이 있다.  

...  

### 3.2.4 문자열
자바스크립트의 문자열은 길이가 16비트인 유니코드 문자(UTF-16)를 나열한 것이다.  
* 문자열 리터럴은 `'` 또는 `"`를 통해 표현할 수 있다.  
* 이스케이프 시퀀스를 통해 특수 문자를 표현할 수 있다.
  * `\0`, `\b`, `\t`, `\n`, `\'`, `\"`, ...
### 3.2.5 논리값
논리값에는 true와 false가 있다.
### 3.2.6 특수한 값
값이 없음을 표현하기 위한 특수한 값에는 `null`과 `undefined`가 있다.

## 3.3 ECMAScript 6부터 추가된 데이터 타입
### 3.3.1 심벌
* 심벌은 ECMAScript 6부터 추가된 원시 값이다.
* 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값이다.
* enum과 같이 유일한 변수를 생성하기 위해 사용

#### 생성
```javascript
var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1 == sym2); // false

var HEART = Symbol("하트");
console.log(HEART.toString()) // Symbol(하트)
```

#### 심벌과 문자열 연결하기
```javascript
var sym1 = Symbol.for("club");
var sym2 = Symbol.for("club");
console.log(sym1 == sym2); // true
console.log(Symbol.keyFor(sym1)); // club
```

### 3.3.2 템플릿 리터럴
ECMAScript 6부터 추가된 문자열 표현 구문이다. 템플릿 리터럴을 사용하면 표현식의 값을 문자열에 추가하거나 여러 줄의 문자열을 표현할 수 있다.

#### 보간 표현식
```javascript
var a = 2, b = 3;
console.log(`${a} + ${b} = ${a+b}`); // 2 + 3 = 5
```

# 4. 객체와 배열, 함수의 기초
## 4.1 객체의 기초 : 객체 리터럴
### 4.1.1 객체
객체에 포함된 데이터 하나(Key와 Value 쌍)를 가리켜 객체의 **프로퍼티**(property)라고 한다.
### 4.1.2 객체 리터럴로 객체 생성하기
```javascript
var card = {"suit": "하트", 'rank': "A"};
console.log(card.suit); // 하트
console.log(card["rank"]); // A
console.log(card.color); // undefined
```
### 4.1.3 프로퍼티 추가와 삭제
```javascript
var card = {"suit": "하트", 'rank': "A"};
card.value = 14;
console.log(card); // { suit: '하트', rank: 'A', value: 14 }

delete card.rank;
console.log(card); // { suit: '하트', value: 14 }
```
### 4.1.4 in 연산자로 프로퍼티가 있는지 확인하기
```javascript
var card = {"suit": "하트", 'rank': "A"};
console.log("suit" in card); // true
console.log("color" in card); // false

console.log("toString" in card); // true
```
### 4.1.5 객체 리터럴 예제
...
### 4.1.6 메서드
프로퍼티의 값에 함수를 저장할 수 있다.
### 4.1.7 객체는 참조 타입
프로퍼티의 값에 객체 타입의 값을 저장할 수 있다.

## 4.2 함수의 기초
### 4.2.1 함수 선언
```javascript
function square(x) { return x * x; }
```
### 4.2.2 인수
```javascript
function dist(p, q) {
    var dx = q.x - p.x;
    var dy = q.y - p.y;
return Math.sqrt(dx * dx + dy * dy);
}
```
### 4.2.3 함수 선언문의 끌어올림
변수와 마찬가지로 호이스트가 가능하다.
```javascript
console.log(square(5));
function square(x) {return x * x;}
```
### 4.2.4 값으로서의 함수
함수 이름을 변수 이름으로 선언하고 다른 변수에 다시 할당하면 그 변수 이름으로 함수를 실행할 수 있다.
```javascript
square = function(x) {return x * x;}
var sq = square;
console.log(sq(5));
```
### 4.2.5 참조에 의한 호출과 값에 의한 호출
call by value : primitive type  
call by reference : reference type
### 4.2.6 변수의 유효 범위
전역 변수와 함수 내 지역 변수가 충돌하는 경우 지역 변수 사용
```javascript
var a = "global";
function f() {
    var a = "local";
    console.log(a); // local
    return a;
}
f();
console.log(a); // global
```

변수 선언을 생략한 경우 전역 변수로 선언된다.
```javascript
function f() {
    a = "local";
    console.log(a); // local
    return a;
}
f();
console.log(a); // local
```

### 4.2.7 함수 리터럴
함수 리터럴은 이름이 없는 함수이므로 익명 함수 또는 무명 함수라고 부른다.  
함수 선언문에서는 끝에 세미콜론을 붙일 필요가 없지만 함수 리터럴을 사용할 때는 끝에 반드시 세미콜론을 붙여야한다.
```javascript
var square = function(x) { return x * x };
```
함수 리터럴은 호이스트가 불가능하다.
```javascript
console.log(square(3));
var square = function(x) {return x * x;};
```
익명 함수에 이름이 붙여지더라도 함수 밖에서는 호출할 수 없다.
```javascript
var square = function sq(x) {return x * x;};
```

## 4.3 객체의 기초 : 생성자
### 4.3.1 객체 생성
```javascript
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
var card = new Card("하트", "A");
console.log(card);
```
### 4.3.2 메서드를 가진 객체를 생성하는 생성자
```javascript
function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
}
var p = {x:0, y: 0};
var c = new Circle(p, 2.0);
console.log("넓이 = " + c.area()); // 넓이 = 12.566370614359172
```

## 4.4 객체의 기초 : 내장 객체
### 4.4.1 내장 생성자
자바스크립트에서 사용할 수 있는 생성자에는 사용자가 정의하는 생성자 외에도 자바스크립트에 처음부터 포함된 내장 생성자가 있다.  
ex) Object, String, Number, ...
### 4.4.2 Date 생성자
날짜와 시간을 표현하는 객체
### 4.4.3 Function 생성자
>var 변수 이름 = new Function(첫 번째 인수, ..., n번째 인수, 함수 몸통);
```javascript
var square = new Function("x", "return x * x");
```
### 4.4.4 기타 내장 객체
### 4.4.5 전역 객체
### 4.4.6 객체의 분류
자바스크립트 객체는 크게 네이티브 객체, 호스트 객체, 사용자 정의 객체로 나눌 수 있다.

## 4.5 배열의 기초
### 4.5.1 배열 리터럴로 생성하기
```javascript
var evens = [2, 4, 6, 8];
console.log(evens); // [ 2, 4, 6, 8 ]

var a = [2, , 4];
console.log(a); // [ 2, <1 empty item>, 4 ] 
```
### 4.5.2 length 프로퍼티
length 프로퍼티에는 배열 요소의 최대 인덱스 값 + 1이 담겨 있다.
```javascript
var evens = [2, 4, 6, 8];
console.log(evens.length); // 4
```
length 프로퍼티에 다른 값을 대입하면 배열 길이가 변화한다.
```javascript
var a = ['A', 'B', 'C', 'D'];
a.length = 2;
console.log(a); // [ 'A', 'B' ]

a.length = 10;
console.log(a); // [ 'A', 'B', <8 empty items> ]
```
### 4.5.3 Array 생성자로 생성하기
```javascript
var evens = new Array(2, 4, 6, 8);
var empty = new Array();
var a = new Array(2, 4);
var various = new Array(3.14, "pi", true, {x: 1, y: 2}, [2, 4, 6, 8]);
```
### 4.5.4 배열 요소의 추가와 삭제
```javascript
var a = ["A", "B", "C"];
a[3] = "D";
console.log(a); // [ 'A', 'B', 'C', 'D' ]

a.push("E");
console.log(a); // [ 'A', 'B', 'C', 'D', 'E' ]

delete a[1];
console.log(a); // [ 'A', <1 empty item>, 'C', 'D', 'E' ]
```

### 4.5.7 희소 배열
배열에 요소를 추가하거나 제거하면 인덱스가 0부터 시작되지 않는 배열이 만들어진다.  
이러한 배열을 희소 배열이라고 부른다.
```javascript
var a = ["A", "B", "C"];
a[4] = "E";
console.log(a); // [ 'A', 'B', 'C', <1 empty item>, 'E' ]
console.log(a.length) // 5
```

# 5. 표현식과 연산자
## 5.1 연산자
## 5.2 산술 연산
## 5.3 문자열 제어하기
## 5.4 논리 연산자와 관계 연산자
## 5.5 비트 연산
## 5.6 기타 연산
## 5.7 명시적 타입 변환


# 6. 웹 브라우저에서의 입출력
## 6.1 대화상자 표시하기
## 6.2 console
## 6.3 이벤트 처리기 등록하기와 타이머 알아보기
## 6.4 HTML 요소를 동적으로 읽고 쓰기
## 6.5 Canvas를 활용한 컴퓨터 그래픽스

# 7. 제어 구문
## 7.1 제어 구문
## 7.2 조건문
## 7.3 반복문
## 7.4 점프문
## 7.5 응용 예제

# 8. 함수
## 8.1 함수 정의하기
## 8.2 함수 호출하기
## 8.3 함수의 인수
## 8.4 재귀 함수
## 8.5 프로그램의 평가와 실행 과정
## 8.6 클로저
## 8.7 이름 공간
## 8.8 객체로서의 함수
## 8.9 고차 함수
## 8.10 콜백 함수
## 8.11 ECMAScript 6부터 추가된 함수의 기능

9장 객체
9.1 객체 생성하기
9.2 프로토타입 상속
9.3 접근자 프로퍼티
9.4 프로퍼티의 속성
9.5 프로퍼티가 있는지 확인하기
9.6 프로퍼티의 열거
9.7 객체 잠그기
9.8 Mixin
9.9 JSON
9.10 ECMAScript 6부터 추가된 객체의 기능

10장 배열의 다양한 기능
10.1 배열의 메서드
10.2 다차원 배열
10.3 유사 배열 객체
10.4 ECMAScript 6의 배열과 새롭게 추가된 기능

11장 버그와 오류에 대처하는 방법
11.1 버그에 대처하기
11.2 예외 처리

12장 정규 표현식
12.1 정규 표현식의 기본
12.2 기본적인 정규 표현식 패턴 작성하기
12.3 패턴 매칭을 하는 문자열 메서드
12.4 RegExp 객체
12.5 ECMAScript 6부터 추가된 정규 표현식의 새로운 기능

13장 웹 브라우저의 객체
13.1 클라이언트 측 자바스크립트
13.2 Location 객체
13.3 History 객체
13.4 Navigator 객체
13.5 Screen 객체
13.6 Document 객체
13.7 창 제어하기

14장 문서 제어
14.1 DOM 트리
14.2 노드 객체 가져오기
14.3 속성 값의 읽기와 쓰기
14.4 HTML 요소의 내용을 읽고 쓰기
14.5 노드 생성/삽입/삭제하기
14.6 HTML 요소의 위치
14.7 HTML 폼
14.8 CSS 제어하기

15장 이벤트 처리
15.1 이벤트 처리기를 등록하는 방법
15.2 이벤트 리스너를 등록하고 삭제하는 방법
15.3 이벤트 객체
15.4 이벤트의 전파
15.5 이벤트 리스너 안의 this
15.6 이벤트 리스너에 추가적인 정보를 넘기는 방법
15.7 커스텀 이벤트
15.8 비동기 처리를 간결하게 작성하는 Promise
15.9 그림판 프로그램 만들기

16장 HTTP 제어(Ajax)
16.1 HTTP 통신
16.2 Ajax
16.3 XMLHttpRequest
16.4 응답 받기
16.5 크로스 오리진 통신

17장 MVC 모델에 기반을 둔 프로그램 설계
17.1 MVC 모델
17.2 생명 게임 시뮬레이터

18장 생성자와 클래스 구문
18.1 생성자
18.2 생성자 상속
18.3 ECMAScript 6의 클래스 구문

19장 API 활용
19.1 드래그 앤 드롭 API
19.2 Blob
19.3 Web Workers



