import React, { useRef } from 'react';
import { useStore } from './StoreContext';
import Child3 from './child3';

const Child2 = () => {
    const inputRef = useRef();
    const store = useStore();

    const change = (e) => {
        store.setState('child2', e.target.value);
    };

    return (
        <div className='flex flex-col gap-10 '>
            <div className='flex gap-3'>
                <input type="text" ref={inputRef} className='border' onChange={(e) => change(e)} />
                <p>
                    child 2
                </p>
            </div>
            <Child3 />
        </div>
    );
};

export default Child2;