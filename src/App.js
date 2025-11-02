import React, { useReducer, useMemo, createContext } from 'react';
import { produce } from 'immer'
import UserList from './UserList';
import CreateUser from './CreateUser'

// window.produce = produce;

function countActiveusers(users) {
  return users.filter(user => user.active).length;
}

const initalState = {
  users: [
    {
      id: 1,
      username: '신형구',
      email: 'shinhg240@naver.com',
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
      username: '정민지',
      email: 'mj@example.com',
      active: false,
    }
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      // return produce(state, draft => {
      //   draft.users.push(action.user);
      // })
    return {
      users: state.users.concat(action.user)
    }
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      })
    // return {
    //   ...state,
    //   users: state.users.map(user =>
    //     user.id === action.id
    //       ? { ...user, active: !user.active }
    //       : user
    //   ),
    // }
    case 'REMOVE_USER':
      // return produce(state, draft => {
      //   const index = draft.users.findIndex(user => user.id === action.id);
      //   draft.users.splice(index, 1);
      // })
      return {
        users: state.users.filter(user => user.id !== action.id),
      }
    default:
      throw new Error('Unhandled Action')
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { users } = state;

  const count = useMemo(() => countActiveusers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

// | 훅               | 기억하는 대상   | 비유               |
// | --------------- | --------- | ---------------- |
// | **useMemo**     | “값(결과)”   | 계산 결과를 메모장에 저장   |
// | **useCallback** | “함수”      | 함수 자체를 메모장에 저장   |
// | **React.memo**  | “컴포넌트 결과” | 컴포넌트 자체를 메모장에 저장 |

export default App;