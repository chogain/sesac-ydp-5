// 실습 1
// callback 사용
/*
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

call('kim', function (name) {
  console.log(name + '반가워');
  back(function (txt) {
    console.log(txt + '을 실행했구나');
    hell(function (message) {
      console.log('여기는' + message);
    });
  });
});
*/

// Promise 사용
/*
function promise1(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

function resolve1(txt) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('resolve1');
      resolve(txt);
    }, 1000);
  });
}

function resolve2(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, 1000);
  });
}

promise1('kim')
  .then((name) => {
    console.log(name);
    console.log(name + ' 반가워');
    return resolve1('promise');
  })
  .then((txt) => {
    console.log(txt);
    console.log(txt + '을 실행했구나');
    return resolve2('두번째 체이닝 promise');
  })
  .then((msg) => {
    console.log('여기는' + msg);
  });
*/

// 실습 2
// Promise - async/await
/*
function login(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function getVideo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}
function getDetail() {
  return new Promise(function (resolve, reject) {
    resolve('callback hell');
  }, 1000);
}
async function exec() {
  let user = await login('kim');
  console.log(user + '님 환영합니다.');
  let back = await getVideo();
  console.log(back + '을 실행했구나');
  let end = await getDetail();
  console.log('여기는 ' + end);
}
exec();
*/

// 실습3
// promise로 배경색 변경
/*
setTimeout(() => {
  document.querySelector('body').style.backgroundColor = 'red';
  setTimeout(() => {
    document.querySelector('body').style.backgroundColor = 'orange';
    setTimeout(() => {
      document.querySelector('body').style.backgroundColor = 'yellow';
      setTimeout(() => {
        document.querySelector('body').style.backgroundColor = 'green';
        setTimeout(() => {
          document.querySelector('body').style.backgroundColor = 'blue';
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
function changeBackgroundColor(color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector('body').style.backgroundColor = color;
      console.log(color);
      resolve();
    }, 1000);
  });
}

changeBackgroundColor('red')
  .then(() => changeBackgroundColor('orange'))
  .then(() => changeBackgroundColor('yellow'))
  .then(() => changeBackgroundColor('green'))
  .then(() => changeBackgroundColor('blue'));
