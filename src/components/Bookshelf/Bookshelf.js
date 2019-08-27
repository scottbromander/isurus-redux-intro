import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

class Bookshelf extends Component {

    render() {
        const bookArray = this.props.store.bookShelfReducer.map((book, index) => {
            return (
              <li key={index}>{book}</li>
            )
        });

        return (
            <ul>
                {bookArray}
            </ul>
        )
    }
}

export default connect(mapStoreToProps)(Bookshelf);