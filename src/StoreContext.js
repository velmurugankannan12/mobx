// StoreContext.js
import React, { createContext } from 'react';
import store from './store';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => (
    <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
);

export const useStore = () => React.useContext(StoreContext);
