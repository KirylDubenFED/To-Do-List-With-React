import React, { useEffect, useState } from 'react';

const ShowText = ({ onChangeGreeting }) => {
    const [isGreeting, setGreetingState] = useState(false);
    const handleClick = () => { setGreetingState(!isGreeting); };
    useEffect(() => {
        setGreetingState(isGreeting);
        console.log('change');
    }, [isGreeting]);

    return (
        <>
            {isGreeting ? "Привет" : "Пока"}
            <button onClick={handleClick}>click</button>
        </>
    )
};

export default ShowText;
