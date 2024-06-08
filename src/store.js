// store.js
import { makeAutoObservable } from 'mobx';

class Store {
    state = {
        parent: '',
        child1: '',
        child2: '',
        child3: '',
        child4: '',
        child5: '',
    }

    constructor() {
        makeAutoObservable(this);
    }

    setState(key, newData) {

        this.state[key] = newData
    }
}

const store = new Store();
export default store;
