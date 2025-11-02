import React, { useEffect, useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;

    useEffect(() => {
        // console.log('user 값이 설정됨');
        // console.log(user);
        return (() => {
            // console.log('user 값이 바뀌기 전');
            // console.log(user);
        })
    })

    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer',
                }}
                onClick={() => dispatch({ type: 'TOGGLE_USER', id: id })}
            >
                {username}
            </b>
            &nbsp;
            <span>{email}</span>
            <button onClick={() => dispatch({ type: 'REMOVE_USER', id: id })}>삭제</button>
        </div>
    )
}, )

function UserList({ users }) {
    return (
        <div>
            {
                users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                    />
                )
            }
        </div>
    )
}

export default React.memo(UserList);

    // useEffect(() => {
    //     // 실행할 코드
    //     return () => {
    //         // cleanup 코드 (정리할 일)
    //     }
    // }, [의존성]);

    // useEffect(() => { 
    //     console.log('컴포넌트가 화면에 나타남');
    //     console.log('빈 배열 [] → 처음 마운트될 때 한 번 실행');

    //     return () => {
    //         console.log('컴포넌트가 사라질 때 cleanup');
    //         console.log('return 함수 → 컴포넌트가 언마운트될 때 한 번 실행');
    //     }
    // }, []); // 빈 배열
    //배열이 비어있으면 처음 한 번만 실행, 사라질 때 cleanup 한 번
    //보통 타이머 정리, 이벤트 제거 등에 사용

    // useEffect(() => {
    //     console.log('user 값이 바뀌거나 컴포넌트 마운트');
    //     console.log('[user]가 의존성 배열 → user가 바뀔 때만 실행');

    //     return () => {
    //         console.log('user 값이 바뀌기 전 cleanup');
    //         console.log('return 함수 → user가 바뀌기 전 이전 상태 정리');
    //     }
    // }, [user]);
    //props/state 변화마다 원하는 작업 실행 가능
    //의존성 배열에 넣은 값이 바뀌면 cleanup → effect 재실행
    