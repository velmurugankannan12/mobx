import React, { useRef } from 'react';
import { useStore } from './StoreContext';

const Child5 = () => {
    const inputRef = useRef();
    const store = useStore();

    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        store.setState('parent', inputValue);
        store.setState('child5', inputValue);

        console.log(store.state)
    };

    // const change = (e) => {
    //     store.setState('child5', e.target.value);
    //     store.setState('parent', e.target.value);
    // };

    return (
        <div className='flex flex-col gap-10 '>
            <div className='flex gap-3'>
                <input type="text" ref={inputRef} className='border' />
                <p>
                    child 5
                </p>
            </div>
            <button onClick={handleSubmit} className='border bg-slate-500 text-white py-3'>Submit</button>
        </div>
    );
};

export default Child5;