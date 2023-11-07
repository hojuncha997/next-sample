// components/Input/index.tsx

import {useState} from 'react'

type InputProps = JSX.IntrinsicElements['input'] & {
    label: string
}

export const Input = (props: InputProps) => {
    const {label, ...rest} = props
    const [text, setText] = useState('')
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const resetInputField = () => {
        setText('')
    }
    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            {/* label요소를 사용하지 않는 경우 input 요소에 aria-label을 지정해서 요소를 얻을 수도 있다. */}
            <input {...rest} type='text' value={text} onChange={onInputChange} aria-label={label}/>
            <button onClick={resetInputField}>Reset</button>
        </div>
    )
}

