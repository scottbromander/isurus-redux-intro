import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// const bookReducer = [];
// actions are objects!
// action.type
// action.payload
const bookShelfReducer = (state = ['The Republic'], action) => {
    if(action.type === 'ADD_BOOK_ACTION'){
        return [
            ...state,
            action.payload
        ]
        // Now, ['The Republic', 'P&P', 'Green Eggs and Ham']
    }

    return [
        ...state
    ]
}


const storeInstance = createStore(
    combineReducers({
        bookShelfReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
