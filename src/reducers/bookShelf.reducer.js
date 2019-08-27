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

export default bookShelfReducer;