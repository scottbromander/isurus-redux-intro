import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookInput extends Component {
    state = {
        bookTitle: ''
    }

    updateBook = (event) => {
        this.setState({
            bookTitle : event.target.value
        })
    }

    addToBookshelf = (event) => {
        this.props.dispatch({type:'ADD_BOOK_ACTION', payload:this.state.bookTitle});
    }

    render() {
        return (
            <div>
                <input onChange={this.updateBook} type="text" placeholder="Enter a book name!" />
                <button onClick={this.addToBookshelf}>Add Book</button>
            </div>
        )
    }
}

export default connect()(BookInput);