function Input(props) {
  const setData = props.setData;

  return (
    <>
      내용 :{' '}
      <input
        type='text'
        onChange={(e) => {
          // 1.
          // props.setContent(e.target.value);

          // 2.
          const content = e.target.value;
          setData((data) => {
            return { ...data, content };
          });
        }}
        placeholder='내용을 입력하세요.'
      />
    </>
  );
}

export default Input;
