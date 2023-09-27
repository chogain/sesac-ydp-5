function Result(props) {
  const imgSrc = props.fruit + '.png';

  return (
    <div style={{ display: 'block' }}>
      <img src={imgSrc} width={100} height={100} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: `${props.backgroundColor}`,
          color: `${props.color}`,
        }}
      >
        {props.content}
      </div>
    </div>
  );
}

export default Result;
