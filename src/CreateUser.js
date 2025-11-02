import React, { useContext, useRef } from "react";
import { UserDispatch } from "./App";
import useInputs from "./useInputs"

function CreateUser() {
    const dispatch = useContext(UserDispatch);

    const nextId = useRef(4);

    const [form, onChange, onReset] = useInputs({
        username: '',
        email: '',
    });

    const { username, email } = form;
    
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={() => {
                dispatch({
                    type: 'CREATE_USER',
                    user: {
                        id: nextId.current,
                        username: username,
                        email: email,
                    }
                })
                nextId.current += 1;
                onReset();
            }}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);