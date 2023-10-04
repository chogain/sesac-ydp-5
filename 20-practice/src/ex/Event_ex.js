import React, { useState } from 'react';

export default function Event_ex() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [userInfo, setUserInfo] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      name: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ]);

  const addUser = () => {
    if (inputName.trim().length === 0) {
      alert('이름을 입력해주세요!');
      return;
    } else if (inputEmail.trim().length === 0) {
      alert('이메일을 입력해주세요!');
      return;
    } else if (
      !inputEmail.includes('@') ||
      !inputEmail.includes('.') ||
      inputEmail.split('@')[1].length === 0 ||
      inputEmail.split('.')[1].length === 0
    ) {
      alert('이메일 형식을 확인해주세요!');
      return;
    }

    const newUserInfo = userInfo.concat({
      id: userInfo.length + 1,
      name: inputName,
      email: inputEmail,
    });

    setUserInfo(newUserInfo);
    setInputName('');
    setInputEmail('');
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.code === 'Enter') {
      addUser();
    }
  };

  const deleteUser = (targetId) => {
    const newUserInfo = userInfo.filter((user) => user.id !== targetId);

    setUserInfo(newUserInfo);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='이름'
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type='email'
        placeholder='이메일'
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addUser}>등록</button>
      {userInfo.map((user) => {
        return (
          <h3 key={user.id} onDoubleClick={() => deleteUser(user.id)}>
            {user.name}: {user.email}
          </h3>
        );
      })}
    </div>
  );
}
