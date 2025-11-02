import React, { useReducer, useState } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    // 3. reducer
    const [number, dispatch] = useReducer(reducer, 0);

    // 1.
    // const [number, setNumber] = useState(0);

    // 2.
    // const numberState = useState;
    // const number = numberState[0];
    // const setNumber = numberState[1];

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT',
        })
        // setNumber(number + 1);
        // setNumber(preNumber => preNumber + 1); //함수형 업데이트
    }

    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT',
        })
        // setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;