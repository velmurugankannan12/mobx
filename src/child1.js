// ChildComponent.js
import React, { useRef } from 'react';
import { useStore } from './StoreContext';
import Child2 from './child2';

const Child1 = () => {
    const inputRef = useRef();
    const store = useStore();

    const change = (e) => {
        store.setState('child1', e.target.value);
    };

    return (
        <div className='flex flex-col gap-10 '>
            <div className='flex gap-3'>
                <input type="text" ref={inputRef} className='border' onChange={(e) => change(e)} />
                <p className='flex'>
                    child 1
                </p>
            </div>

            <Child2 />
        </div>
    );
};

export default Child1;
