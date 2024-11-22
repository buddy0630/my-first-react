import React, { useState } from 'react';

function InputHandler() {
    const [text, setText] = useState('');

    return (
        <div>
            <h2>Type Something:</h2>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <p>You typed: {text}</p>
        </div>
    );
}

export default InputHandler;
