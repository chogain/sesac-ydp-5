-- < JOIN >
SELECT * FROM customer;
SELECT * FROM orders;
SELECT * FROM customer, orders;

-- customer, orders 테이블의 행 개수
SELECT COUNT(*) FROM orders; -- 22
SELECT COUNT(*) FROM customer; -- 14
SELECT COUNT(*) FROM customer, orders; -- 308 = 22 * 14
-- => cross join

-- WHERE 절을 이용해 JOIN 조건 추가
-- 테이블이름.속성: 어느 테이블의 속성인지 지칭
SELECT * FROM customer, orders
	WHERE customer.custid = orders.custid;
    
SELECT * FROM customer, orders
	WHERE customer.custid = orders.custid
    ORDER BY customer.custname;

SELECT * FROM customer INNER JOIN orders
	ON customer.custid = orders.custid;

-- 고객 이름가 고객이 주문한 "상품명", "상품 가격" 조회
-- 고객 이름: customer
-- 상품명, 상품 가격: orders
SELECT  custname, prodname, price FROM customer, orders
	WHERE customer.custid = orders.custid;

SELECT  custname, prodname, price FROM customer INNER JOIN orders
	ON customer.custid = orders.custid;

-- 고객 이름(customer)별로 주문한 제품 총 구매액(orders) 고객별로 정렬
SELECT custname, SUM(price * amount) AS 'total_price'
	FROM customer, orders
    WHERE customer.custid = orders.custid
    GROUP BY custname
    ORDER BY custname DESC;

SELECT custname, SUM(price * amount) AS 'total_price'
	FROM customer INNER JOIN orders
    ON customer.custid = orders.custid
    GROUP BY custname
    ORDER BY custname DESC;

