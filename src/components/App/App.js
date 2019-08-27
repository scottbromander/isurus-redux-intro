import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    bookTitle: ''
  }

  updateBook = (event) => {
    this.setState({
      bookTitle : event.target.value
    })
  }

  addToBookshelf = (event) => {
    // Will eventually add the book to the bookshelfReducer!
    this.props.dispatch({type:'ADD_BOOK_ACTION', payload:this.state.bookTitle});
  }

  render() {

    const bookArray = this.props.store.bookShelfReducer.map((book, index) => {
      return (
        <li key={index}>{book}</li>
      )
    });

    return (
      <div className="App">
        <h1>Bookstore</h1>
        <input onChange={this.updateBook} type="text" placeholder="Enter a book name!" />
        <button onClick={this.addToBookshelf}>Add Book</button>

        <h2>Bookshelf</h2>
        <ul>
          {bookArray}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store
  }
}

export default connect(mapStoreToProps)(App);
