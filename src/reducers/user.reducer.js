const baseUser = {
    name: 'Scott Bromander',
    numOfBooksRead: 0
}

const userReducer = (state = baseUser, action) => {
    if(action.type === "CHANGE_USERNAME" ){
        return {
            ...state,
            name: action.payload
        }
    }

    if(action.type === "ADD_BOOK" ){
        return {
            ...state,
            numOfBooksRead: state.numOfBooksRead + 1
        }
    }

    if(action.type === "SUB_BOOK" ){
        if(state.numOfBooksRead > 0){
            return {
                ...state,
                numOfBooksRead: state.numOfBooksRead - 1
            }
        }
    }

    return state;
}

export default userReducer;