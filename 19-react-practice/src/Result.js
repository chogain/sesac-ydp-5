function Result(props) {
  const { fruit, backgroundColor, color, content } = props.data;

  return (
    <div style={{ display: 'block' }}>
      <img
        src={`${fruit}.png`}
        alt='선택된 과일 이미지'
        width={100}
        height={100}
      />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: `${backgroundColor}`,
          color: `${color}`,
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Result;
