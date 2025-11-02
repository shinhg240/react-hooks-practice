import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
    //action.type > CHAGE, RESET
    switch (action.type) {
        case 'CHANGE':
            const { name, value } = action;
            return {
                ...state,
                [name]: value,
            }
        case 'RESET':
            const { initialForm } = action;
            return {
                ...initialForm,
            }
        default:
            throw new Error('Unhandled useInputs');
    }
}

function useInputs(initialForm) {
    // const [form, setForm] = useState(initialForm);
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        console.log(value);
        dispatch({
            type: 'CHANGE',
            name: name,
            value: value,
        })
    }, [])

    const onReset = useCallback((e) => {
        dispatch({
            type: 'RESET',
            initialForm: initialForm,
        })
    }, [initialForm])

    return [form, onChange, onReset];
}

export default useInputs;