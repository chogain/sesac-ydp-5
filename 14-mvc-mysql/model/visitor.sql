DROP DATABASE sesac;

-- database 이모지, 특수문자를 사용할 수 있는 인코딩으로 DB 생성
CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE sesac;

-- MySQL에 접속 가능한 계정 생성
CREATE USER 'user'@'%' IDENTIFIED WiTH mysql_native_password BY '1234';

-- user 계정에 모든 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- mysql db의 user 테이블에서 새로 생성된 'user' 계정 확인
SHOW DATABASES;
SELECT * FROM mysql.user;

CREATE TABLE visitor (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    comment MEDIUMTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);

DESC visitor;

INSERT INTO visitor VALUES (1, '홍길동', '내가 왔다.');
INSERT INTO visitor VALUES (2, '이찬혁', '으라차차');

SELECT * FROM visitor;
