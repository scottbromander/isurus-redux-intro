import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// REDUCERS
import bookShelfReducer from './reducers/bookShelf.reducer';
import userReducer from './reducers/user.reducer';

const storeInstance = createStore(
    combineReducers({
        bookShelfReducer,
        userReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
