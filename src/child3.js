import React, { useRef } from 'react';
import { useStore } from './StoreContext';
import Child4 from './child4';

const Child3 = () => {
    const inputRef = useRef();
    const store = useStore();

    const change = (e) => {
        store.setState('child3', e.target.value);
    };

    return (
        <div className='flex flex-col gap-10 '>
            <div className='flex gap-3'>
                <input type="text" ref={inputRef} className='border' onChange={(e) => change(e)} />
                <p>
                    child 3
                </p>
            </div>
            <Child4 />
        </div>
    );
};

export default Child3;