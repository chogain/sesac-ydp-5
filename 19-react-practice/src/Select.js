function Select(props) {
  const setData = props.setData;

  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          // 1.
          // props.setFruit(e.target.value);

          // 2.
          const fruit = e.target.value;
          setData((data) => {
            return { ...data, fruit };
          });
        }}
      >
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
        <option value='peach'>복숭아</option>
        <option value='orange'>오렌지</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          // 1.
          // props.setBackgroundColor(e.target.value);

          // 2.
          const backgroundColor = e.target.value;
          setData((data) => {
            return { ...data, backgroundColor };
          });
        }}
      >
        <option value='black'>검정</option>
        <option value='white'>하양</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
        <option value='yellow'>노랑</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='purple'>보라</option>
        <option value='pink'>분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          // 1.
          // props.setColor(e.target.value);

          // 2.
          const color = e.target.value;
          setData((data) => {
            return { ...data, color };
          });
        }}
      >
        <option value='white'>하양</option>
        <option value='black'>검정</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
        <option value='yellow'>노랑</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='purple'>보라</option>
        <option value='pink'>분홍</option>
      </select>
    </>
  );
}

export default Select;
