-- database: 데이터의 집합
-- DBMS: 데이터베이스를 운영/관리하는 프로그램 (ex. MySQL)
-- 테이블: 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위
-- SQL: RDBS에서 사용되는 언어 (데이터베이스 구축, 관리, 활용하기 위한 언어)

-- SQL은 대소문자를 구별하지 않지만 관례는 모두 대문자로 작성함
-- 실행 단축키: cmd + enter

-- DDL (Data Definition Language)
-- 데이터베이스, 테이블을 정의하는 언어

-- [Database 관련 명령어]
-- 1. Database 생성
CREATE DATABASE sesac DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

-- 2. Database 목록 조회
SHOW DATABASES;

-- 3. Database 사용 선언 (실행 시 사용해야 함)
USE sesac;

-- 4. Database 삭제
DROP DATABASE sesac;

-- [Table 관련 명령어]
-- 1. 테이블 생성
-- 제약조건 ('옵션')
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가 (데이블에 데이터를 추가할 때마다 자동으로 숫자 증가)
-- PRIMARY KEY: 기본키 (중복값 허용 X, NULL 허용 X)
-- DEFAULT: 기본값 (특정 속성의 기본 값 설정)
-- UNIQUE: 중복 허용 X, NULL 허용 -> 하나의 테이블당 여러개 가능
CREATE TABLE product (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	model_number VARCHAR(15) NOT NULL,
	series VARCHAR(30) NOT NULL
);

-- 2. 테이블 목록 확인
-- 현재 사용중인 데이터베이스의 모든 테이블 조회
SHOW TABLES;

-- 3. 테이블 구조 확인
-- 테이블의 컬럼 정보 (자료형, NULL 여부, KEY, DEFAULT 등)
DESC product;

-- 4. 테이블 삭제
-- DROP: 테이블 존재 자체를 없앰
DROP TABLE product;
-- TRUNCATE: 테이블 초기화 (테이블 구조만 남기고 모든 행 삭제)
TRUNCATE TABLE product;

-- 5. 데이블 정의 수정
-- 이미 생성된 테이블에 데이터가 추가되었을 때
-- 컬럼 정보를 수정해야하는 경우 사용 (DROP 후 재생성 하는 경우가 더 많아 자주 사용 X)

-- 5-1. 컬럼 추가
ALTER TABLE product ADD new_column DATE;

-- 5-2. 컬럼 수정
ALTER TABLE product MODIFY new_column int;
ALTER TABLE product CHANGE new_column new_column2 int; -- 컬럼명 변경

-- 5-3. 컬럼 삭제
ALTER TABLE product DROP new_column2;
