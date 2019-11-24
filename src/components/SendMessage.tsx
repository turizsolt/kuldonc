import React, {FC, useCallback, useState} from 'react';

interface Props {
}

declare var socket: any;

export const SendMessage: FC<Props> = props => {

    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleNameChange = useCallback((event) => {
        setName(event.target.value);
    }, []);

    const handleTextChange = useCallback((event) => {
        setText(event.target.value);
    }, []);

    const handleSend = useCallback(() => {
        console.log(name, text);
        socket.emit('message', {name, text});
    }, [name, text]);

  return <div>
      <input type="text" onChange={handleNameChange} />
      <textarea onChange={handleTextChange} />
      <button onClick={handleSend}>Send</button>
  </div>;
};
