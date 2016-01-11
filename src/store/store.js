import {createStore} from 'redux';
import rootReducer from '../reducers/index';

const appStore = createStore(rootReducer);

export default appStore;
