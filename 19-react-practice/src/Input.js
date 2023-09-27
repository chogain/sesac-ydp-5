function Input(props) {
  return (
    <>
      내용 :{' '}
      <input
        type='text'
        onChange={(e) => {
          props.setContent(e.target.value);
        }}
        placeholder='내용을 입력하세요.'
      />
    </>
  );
}

export default Input;
