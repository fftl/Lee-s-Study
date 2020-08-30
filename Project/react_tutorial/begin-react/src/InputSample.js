import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })
    const nameInput = useRef();
    const {name , nickname} = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs, // 기존의 inputs 객체를 복사해 옵니다.
            [name]: value,
        })
    }

    const onReset = () =>{
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus(); //current가 해당 돔을 가리켜줍니다.
    }
    return(
        <div>

            <input 
            name="name" 
            placeholder="이름" 
            onChange={onChange} 
            value={name}
            ref={nameInput} //이렇게 ref 를 넣어놔 주면 나중에 다른 곳에서 돔을 선택할 수 있게됩니다.
            />

            <input 
            name="nickname" 
            placeholder="닉네임" 
            onChange={onChange} 
            value={nickname}
            />

            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample;