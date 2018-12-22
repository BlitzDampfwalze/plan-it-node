import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { reducers } from './reducers/rootReducer';

export default createStore(reducers, applyMiddleware(thunk));