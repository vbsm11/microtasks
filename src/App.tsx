import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput/FullInput";
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input/Input";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('');

    const addMessage = (title:string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
        setTitle('')
    }

    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={()=>addMessage(title)}/>
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}

        </div>
    )
}

export default App;
