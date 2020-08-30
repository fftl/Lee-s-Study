import React, { useRef, useState, useMemo, useCallback  }  from 'react';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user=> user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
  const { username, email } = inputs;

  const onChange = useCallback (e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs]);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ])

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers(users => users.concat(user)); //
    setInputs({
      useraname: '',
      email: '',
    });
    console.log(nextId.current);
    nextId.current += 1;
  }, [username, email, users]);

  const onRemove = useCallback(id =>{
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id =>{
    setUsers(users => users.map(
      user => user.id === id
        ? {...user, active: !user.active}
        :user 
    ));
  }, []);

  const count = useMemo(()=> countActiveUsers(users), [users]); // 첫번째 파라미터, 함수형태 이 함수를 실행 두번째 파라미터, 객체? 해당 객체가 변경될때 실행

  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default App;
