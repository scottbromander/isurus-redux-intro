import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class UserPage extends Component {

    state = {
        enteredName: ''
    }

    onInputChange = (event) => {
        this.setState({
            enteredName: event.target.value
        })
    }

    submitNewName = (event) => {
        this.props.dispatch({type: 'CHANGE_USERNAME', payload: this.state.enteredName});
    }

    onMinusClick = (event) => {
        this.props.dispatch({type: 'SUB_BOOK'})
    }

    onPlusClick = (event) => {
        this.props.dispatch({type: 'ADD_BOOK'});
    }

    render() {
        return(
            <div>
                <h2>Hi! Want to change your user name?</h2>
                <input onChange={this.onInputChange} type="text" placeholder="Enter your name" />
                <button onClick={this.submitNewName}>Submit Name Change</button>

                <div>
                    <h3>How many books have you read?</h3>
                    <button onClick={this.onMinusClick}>-</button>
                    <p>{this.props.store.userReducer.numOfBooksRead}</p>
                    <button onClick={this.onPlusClick}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(UserPage);