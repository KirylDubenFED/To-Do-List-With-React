import React, { useState } from 'react';

const ShowText = () => {
    const [isGreeting, setGreetingState] = useState(false);
    const handleClick = () => { setGreetingState(!isGreeting); };

    return (
        <>
            {isGreeting ? "Привет" : "Пока"}
            <button onClick={handleClick}>click</button>;
        </>
    )
};

export default ShowText;
