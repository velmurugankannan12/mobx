// ParentComponent.js
import React, { useEffect, useState, useRef } from 'react';
import { useObserver } from 'mobx-react-lite';
import ChildComponent from './child1';
import { useStore } from './StoreContext';

const ParentComponent = () => {
  const store = useStore();
  const [parent, setParent] = useState('')
  const parentRef = useRef('')


  return useObserver(() => (
    <div className='flex flex-col w-64 gap-10 py-10 pl-10'>
      {/* <p>Data from child: {store.data}</p> */}
      <div className='flex gap-3'>
        <input type="text" name="child1" value={store.state.parent} ref={parentRef} className='border' />
        <p>
          parent
        </p>
      </div>
      <ChildComponent />
    </div>
  ));
};

export default ParentComponent;
