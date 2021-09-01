import React from 'react';
import * as api from '../../api/'


const Test = () => {

    async function clickHandler() {
        
        let data = await api.test();

        console.log(data);


    }

    return (
        <div>
            <button onClick={() => clickHandler()}>Klik </button>
            <div>{localStorage.getItem("test") || 'test ne postoji'}</div>
        </div>
    );
};

export default Test;
