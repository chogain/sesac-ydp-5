CREATE TABLE customer ( 
  custid    CHAR(10) PRIMARY KEY,
  custname  VARCHAR(10) NOT NULL, 
  addr      CHAR(10) NOT NULL, 
  phone     CHAR(11), 
  birth     DATE 
);
DESC customer;

-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블: 기본키를 갖는 테이블 (customer)
-- 참조 테이블: 외래키가 있는 테이블 (orders)
-- 형식: foreign key (열_이름) references 기준_테이블(열_이름)
-- on update cascade: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제
CREATE TABLE orders (
	orderid INT PRIMARY KEY AUTO_INCREMENT,
    custid CHAR(10) NOT NULL, -- FK
    prodname CHAR(6) NOT NULL,
    price INT NOT NULL,
    amount SMALLINT NOT NULL,
    FOREIGN KEY (custid) REFERENCES customer(custid) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 테이블 삭제 순서!
-- customer table, orders table이 customer.custid 를 기준으로 "관계" 맺음
-- customer table 존재하는 회원만 orders 테이블에 데이터를 추가할 수 있음
-- 만약에 orders 테이블이 있는데, customer 테이블을 삭제 (drop) 하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에 알 수 없음. 
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블 (참조 테이블) 먼저 삭제
-- (1) orders 테이블 삭제 -> (2) customer 테이블 삭제

-- INSERT 추가
INSERT INTO customer (custid, custname, addr, phone, birth) 
	VALUES ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-03-05');

INSERT INTO customer (addr, phone, birth, custid, custname) 
	VALUES ('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');

-- 속성을 지정하지 않는다면, 컬럼이 정의된 순서대로 입력
INSERT INTO customer VALUES ('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- 여러 튜플 동시 추가
INSERT INTO customer VALUES 
	('asdf', '강세희', '대한민국 부산', '01033331235', '2004-11-11'),
	('sdfg', '윤지성', '일본 도쿄', '01033331236', '1995-02-15'),
    ('dfgh', '이재은', '미국 뉴욕', '01033331237', '2004-06-07');
    
INSERT INTO customer VALUES ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
INSERT INTO customer VALUES ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');
INSERT INTO orders VALUES (NULL, 'kiwi', '프링글스', '3000', 5);
INSERT INTO orders VALUES (NULL, 'apple', '프링글스', '3000', 1);
INSERT INTO orders VALUES (NULL, 'kiwi', '홈런볼', '2000', 3);
    

-- UPDATE 수정
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
UPDATE customer SET addr = '대한민국 서울' WHERE custid = 'happy';

-- DELETE 삭제
-- custid가 happy인 사람의 정보를 테이블에서 삭제
delete FROM customer WHERE custid = 'happy';

-- 고객 테이블에 'apple' 고객을 삭제했을 때, 주문 테이블에서 'apple' 고객의 주문 정보가 함께 삭제되는지? (on delete cascade)
delete FROM customer WHERE custid = 'apple';

-- SELECT 조회
select * FROM customer;
select * FROM orders;


INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- 모든 고객의 아이디를 검색
SELECT custid FROM customer;

-- 모든 고객의 아이디, 생년월일 검색
SELECT custid, birth FROM customer;

-- 모든 고객의 생년원일, 아이디 검색 (순서 있음)
SELECT birth, custid FROM customer;

-- 모든 고객의 아이디, 이름, 주소, 전화번호, 생년월일 검색
SELECT custid, custname, addr, phone, birth FROM customer;

-- * 와일드카드 사용
SELECT * FROM customer;

-- 고객 테이블에 있는 모든 주소 검색
SELECT addr FROM customer;

-- 고객 테이블에 있는 모든 주소를 검색하되 중복 제거
-- DISTINCT: 중복 제거
SELECT distinct addr FROM customer;

-- < WHERE 조건 >
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합조건: AND, OR, NOT

-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
SELECT birth FROM customer WHERE custname='강해린';

-- 고객 이름이 강해린이 아닌 고객들의 생일 검색
SELECT birth FROM customer WHERE custname!='강해린';

-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
SELECT * FROM customer WHERE custname > '박민지';

-- 범위
-- 1995년이상 2000년 이하 출생 고객 검색
SELECT * FROM customer WHERE birth BETWEEN '1995-01-01' AND '2000-12-31';
SELECT * FROM customer WHERE birth >= '1995-01-01' AND birth <= '2000-12-31';

-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
SELECT * FROM customer WHERE addr IN ('대한민국 서울', '영국 런던');
SELECT * FROM customer WHERE addr = '대한민국 서울' or addr = '영국 런던';
-- 주소가 서울 혹은 런던이 아닌 고객 검색
SELECT * FROM customer WHERE addr NOT IN ('대한민국 서울', '영국 런던');


-- 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
SELECT * FROM customer WHERE addr LIKE '미국 로스앤젤레스';

-- 주소에 '미국'이 포함되어 있는 고객 검색 (미국에 사는 사람)
-- %: 0개 이상 문자열
SELECT * FROM customer WHERE addr LIKE '미국%';

-- 고객 이름 두번째 글자가 '지'인 고객 검색
-- _: 임의의 하나의 문자
SELECT * FROM customer WHERE custname LIKE '_지%';
-- 참고
SELECT * FROM customer WHERE custname LIKE '_지'; -- 검색 결과 0

-- 고객 이름 세번째 글자가 '수'인 고객
SELECT * FROM customer WHERE custname LIKE '__수%';
-- 참고
SELECT * FROM customer WHERE custname LIKE '%수'; -- 이름이 몇자든 마지막글자가 수이면 다 선택



-- 복합조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
SELECT * FROM customer WHERE addr LIKE '대한민국%' AND birth >= '2000-01-01';

-- 주소지가 미국이거나 영국인 고객 검색
SELECT * FROM customer WHERE addr LIKE '미국%' OR addr LIKE '영국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
SELECT * FROM customer WHERE phone NOT LIKE '%_4';


-- < 실습 >
-- 아래 조건을 만족하는 SQL 문을 작성해주세요.
/*
authors, books, orders 이름을 갖는 3개의 테이블을 생성합니다. 
authors 테이블에는 author_id(기본 키), first_name, last_name 및 email의 4개 열이 있습니다. 
책 테이블에는 book_id(기본 키), title, author_id(작가 테이블에서 author_id 열을 참조하는 외부 키), publication_date의 네 개의 열이 있습니다. 
주문 테이블에는 order_id(기본 키), book_id(책 테이블의 book_id 열을 참조하는 외부 키), customer_name 및 order_date의 네 개의 열이 있습니다.

books 테이블의 author_id 컬럼은 authors 테이블의 author_id와 관계를 맺는다. 
(즉, 작가 테이블에 존재하는 작가만이 책 테이블에 데이터가 추가될 수 있다.)

orders 테이블의 book_id 컬럼은 books 테이블의 book_id와 관계를 맺는다. 
(즉, 책 테이블에 존재하는 책만이 주문 테이블에 데이터가 추가될 수 있다.)

*3가지 테이블의 자세한 정보는 추가 이미지를 참고할 것
*/
CREATE TABLE authors (
  author_id iNT NOT NULL PRIMARY KEY DEFAULT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
)

CREATE TABLE books (
  book_id INT NOT NULL PRIMARY KEY DEFAULT,
  title VARCHAR(100) ,
  author_id INT,
  publication_date DATE,
  FOREIGN KEY (author_id) REFERENCES authors(author_id) ON UPDATE CASCADE ON DELETE CASCADE

)

CREATE TABLE orders (
	order_id INT PRIMARY KEY,
  book_id INT,
  customer_name VARCHAR(50),
  order_date DATE,
  FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- < 실습 >
-- 직전 실습에서 생성한 authors, books, orders 테이블에 데이터를 추가하는 INSERT 문을 실행하고 각 번호에 맞는 SQL문을 작성해주세요.

-- Add data to the authors table
INSERT INTO authors (author_id, first_name, last_name, email)
VALUES (1, 'J.K.', 'Rowling', 'jkrowling@gmail.com'),
       (2, 'George R.R.', 'Martin', 'grmartin@yahoo.com'),
       (3, 'Stephen', 'King', 'sking@hotmail.com');

-- Add data to the books table
INSERT INTO books (book_id, title, author_id, publication_date)
VALUES (1, 'Harry Potter and the Philosopher''s Stone', 1, '1997-06-26'),
       (2, 'A Game of Thrones', 2, '1996-08-06'),
       (3, 'The Shining', 3, '1977-01-28');

-- Add data to the orders table
INSERT INTO orders (order_id, book_id, customer_name, order_date)
VALUES (1, 1, 'John Smith', '2022-02-15'),
       (2, 2, 'Jane Doe', '2022-02-16'),
       (3, 3, 'Bob Johnson', '2022-02-17');
       
SELECT * FROM authors;
SELECT * FROM books;
SELECT * FROM orders;


-- 1. author_id가 1인 작성자의 이메일을 jkrowling@yahoo.com으로 업데이트하는 SQL 문을 작성합니다.
UPDATE authors SET email = 'jkrowling@yahoo.com' WHERE author_id = 1;

-- 2. books 테이블에서 book_id 2인 책을 삭제하는 SQL 문을 작성합니다.
DELETE FROM books WHERE book_id = 2;

-- 3. 다음 세부 정보가 포함된 새 책을 삽입하는 SQL 문을 작성합니다.
-- 책 ID: 4
-- 제목: The Stand
-- 저자 ID: 3
-- 발행일자 : 1978-01-01
INSERT INTO books VALUES(4, 'The Stand', 3, '1978-01-01');

-- 4. book_id 1인 책의 출판 날짜를 1997-06-30으로 업데이트하는 SQL 문을 작성하십시오.
UPDATE books SET publication_date = '1997-06-30' WHERE book_id = 1;

-- 5. 2022-02-17 이전에 접수된 모든 주문을 삭제하는 SQL 문을 작성합니다.
DELETE FROM orders WHERE order_date < '2022-02-17';

-- 6. 다음 세부 정보와 함께 새 주문을 삽입하는 SQL 문을 작성합니다.
-- 주문 ID: 4
-- 책 ID: 1
-- 고객 이름: Sarah Johnson
-- 주문일자 : 2022-02-18
INSERT INTO orders VALUES(4, 1, 'Sarah Johnson', '2022-02-18');

-- 7. order_id가 1인 주문의 고객 이름을 Jack Smith로 업데이트하는 SQL 문을 작성합니다.
UPDATE orders SET customer_name = 'Jack Smith' WHERE order_id = 1;

-- 8. 다음 세부 정보와 함께 새 작성자를 삽입하는 SQL 문을 작성합니다.
-- 저자 ID: 4
-- 이름: agatha
-- 성: christie
-- 이메일: agatha.christie@example.com
INSERT INTO authors VALUES(4, 'agatha', 'christie', 'agatha.christie@example.com');

-- 9. author_id 2인 작성자의 성을 Martinez로 업데이트하는 SQL 문을 작성합니다.
UPDATE authors SET last_name = 'Martinez' WHERE author_id = 2;

-- 10. author_id 3인 저자가 쓴 모든 책을 삭제하는 SQL 문을 작성합니다.
DELETE FROM books WHERE author_id = 3;

-- <ORDER BY >
-- order by 없음 : pk 기준 오름차순 정렬
SELECT * FROM customer;

SELECT * FROM customer ORDER BY custname;

SELECT * FROM customer ORDER BY custname DESC;

-- where 결과 order by 함께 사용 (단, 이 때 ordeer by가 where 보다 뒤에 위치해야 함)
-- 2000년생 이후 출생자 중에서 소를 기준으로 내림차순 검색
SELECT * FROM customer WHERE birth >= '2000-01-01' ORDER BY addr DESC;
-- SELECT * FROM customer ORDER BY addr DESC WHERE birth >= '2000-01-01'; -- error: 구문 순서 오류

-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 그리고 아이디를 기준으로 내림차순 검색
SELECT * FROM customer WHERE birth >= '2000-01-01' ORDER BY addr DESC, custid DESC;
-- 2000년생 이후 출생자 중에서 주소를 기준으로 오름차순 그리고 아이디를 기준으로 내림차순 검색
SELECT * FROM customer WHERE birth >= '2000-01-01' ORDER BY addr, custid DESC;

-- < LIMIT >
-- 행의 개수를 제한
SELECT * customer WHERE birth >= '2000-01-01' LIMIT 2;
SELECT * FROM customer LIMIT 3;

-- < 집계 함수 >
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 함께 쓰이는 케이스가 많음
SELECT * FROM orders;

-- 주문 테이블에서 총 판매 개수 검색
SELECT SUM(amount) FROM orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경
SELECT SUM(amount) AS 'total_amount' FROM orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
-- avg_amount, min_price, max_price
SELECT SUM(amount) AS 'total_amount',
	AVG(amount) AS 'avg_amount',
	MIN(price) AS 'min_price',
	MAX(price) AS 'max_price'
FROM orders;
    
-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)
SELECT COUNT(*) FROM orders;

-- 주문 테이블에서 주문한 고객 수 (중복 없이)
SELECT COUNT(DISTINCT custid) FROM orders;


-- < GROUP BY >
-- "~별로"

-- 고객별로 주문한 주문 건수 구하기
SELECT custid, COUNT(*) FROM orders GROUP BY custid;

-- 고객별로 주문한 상품 총 수량구하기
SELECT custid, SUM(amount) FROM orders GROUP BY custid;

-- 고객별로 주문한 총 주문액 구하기
SELECT custid, SUM(price * amount) FROM orders GROUP BY custid;

-- 상품별 판매 개수 구하기
SELECT prodname, SUM(amount) FROM orders GROUP BY prodname;

-- < HAVING >
-- group by 절 이후 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기
SELECT custid, SUM(amount), SUM(price * amount) FROM orders
	GROUP BY custid
    HAVING SUM(price * amount) >= 10000;

/*
SELECT custid, SUM(amount), SUM(price * amount) FROM orders
	WHERE SUM(price * amount) >= 10000
	GROUP BY custid; -- error cide 1111. group 함수 잘못 사용
*/

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 총 수량 구하기
-- (단, custid가 'bunny'인 고객은 제외하고 출력)
-- where, group by, having 모두 사용한 예시
SELECT custid, SUM(amount), SUM(price * amount) FROM orders
	WHERE custid != 'bunny'
	GROUP BY custid
    HAVING SUM(price * amount) >= 10000;
    
-- group by 주의사항
-- select 절에서 group by 에서 사용한 속성과 집게 함수만 사용 가능
-- 고객별로 주문한 건수 구하기
SELECT custid, COUNT(*) FROM orders GROUP BY custid;

/*
WHERE vs HAVING

HAVING
- 그룹에 대해서 필터링 (그래서 group by 함께 사용)
- group by 보다 뒤에 위치
- 집계함수와 함께 사용 가능

HAVING
- 각각의 햄을 필터링
- group by 보다 앞에 위치
- 집계함수를 쓸 수는 있으나, having 처럼 자유롭게 쓸 수는 없음
*/

-- < 실습 > 
-- departments와 employees 테이블을 생성하고 데이터를 입력해주세요.
-- 아래 문항에 맞는 SELECT 문을 작성해주세요. 
CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  location VARCHAR(50)
);
DESC departments;

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);
DESC employees;

INSERT INTO departments (id, name, location)
VALUES
  (1, 'Sales', 'New York'),
  (2, 'Marketing', 'San Francisco'),
  (3, 'Engineering', 'Seattle');

INSERT INTO employees (id, name, age, department_id)
VALUES
  (1, 'John Doe', 25, 1),
  (2, 'Jane Smith', 30, 1),
  (3, 'Bob Johnson', 40, 2),
  (4, 'Alice Lee', 35, 3),
  (5, 'Tom Wilson', 28, 3);
  
SELECT * from departments;
SELECT * from employees;

-- < 풀이 > 
-- 1. 모든 직원을 직원 테이블에 나열합니다.
SELECT * FROM employees;

-- 2. 나이순으로 직원 테이블에 있는 모든 직원을 나이순(내림차순)으로 나열합니다.
SELECT * FROM employees ORDER BY age DESC;

-- 3. 직원 테이블에 30세 이상인 직원의 이름과 나이를 나열합니다.
SELECT name, age FROM employees WHERE age >= 30;

-- 4. 영업부에서 근무하는 직원의 이름과 부서 ID를 직원 표에 나열합니다.
SELECT name, department_id FROM employees WHERE department_id = 1;

-- 5. 엔지니어링 부서에 근무하고 30세 미만인 직원의 이름과 나이를 직원 테이블에 나열합니다.
SELECT name, age FROM employees WHERE department_id = 3 and age < 30;

-- 6. 직원 테이블에서 직원 수를 계산합니다.
SELECT COUNT(*) FROM employees;

-- 7. 직원 테이블에서 각 부서의 직원 수를 계산합니다.
SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;

-- 8. 직원 평균 나이를 계산합니다.
SELECT AVG(age) FROM employees;

-- 9. 부서별 평균 나이를 계산합니다.
SELECT department_id, AVG(age) FROM employees GROUP BY department_id;

-- 10. 부서 테이블에서 지역 컬럼의 두번째 글자가 e인 부서를 계산합니다.
SELECT * FROM departments WHERE lacation LIKE '_e%';

-- 11. 부서 테이블에서 지역 컬럼에 공백이 들어가는 부서를 계산합니다.
SELECT * FROM departments WHERE lacation LIKE '% %';

-- 12. 직원 테이블에서 이름 컬럼에서 마지막 글자가 n인 사원을 계산합니다.
SELECT * FROM employees WHERE name LIKE '%_n';