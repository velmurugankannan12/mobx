import React, { useRef } from 'react';
import { useStore } from './StoreContext';
import Child5 from './child5';

const Child4 = () => {
    const inputRef = useRef();
    const store = useStore();

    const change = (e) => {
        store.setState('child4', e.target.value);
    };

    return (
        <div className='flex flex-col gap-10 '>
            <div className='flex gap-3'>
                <input type="text" ref={inputRef} className='border' onChange={(e) => change(e)} />
                <p>
                    child 4
                </p>
            </div>
            <Child5 />
        </div>
    );
};

export default Child4;