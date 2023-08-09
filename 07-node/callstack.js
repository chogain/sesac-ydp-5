function first() {
  second();
  console.log(1);
  return;
}

function second() {
  console.log(2);
  return; // return; 작성하면 아무것도 반환하지 않는 다는 것을 명시적으로 표시하는 것
}

first();
