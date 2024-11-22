import React, { useState } from 'react';

function ConditionalRender() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Message
            </button>
            {isVisible && <p>This is a conditional message!</p>}
        </div>
    );
}

export default ConditionalRender;
