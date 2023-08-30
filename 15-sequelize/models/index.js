// 기본 생성 코드 수정 ver
'use strict';

// sequelize 모듈 호출해서 Sequelize 변수에 저장
const Sequelize = require('sequelize');

// config.json 파일을 불러와서 development 환경의 db 설정
// config : db 접근 가능한 설정 값 저장
const config = require(__dirname + '/../config/config.json')['development'];

// 빈 db 객체 생성
const db = {};

// Sequelize 객체 생성해서 sequelize 변수에 저장
const sequelize = new Sequelize(
  config.database, // sesac
  config.username, // user
  config.password, // 1234
  config // {}
);

// db = { sequelize, Sequelize }
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// !! models/ 폴더에 정의되는 model(테이블)은 db 객체에 저장
// db = { sequelize, Sequelize, Visitor: 모델(테이블) }
db.Visitor = require('./Visitor')(sequelize, Sequelize);

// db 객체 내보내기 (모듈화 하여 내보냈기 때문에 다른 파일에서 db객체 사용 가능)
module.exports = db;

/* 기본 생성 코드
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; */
