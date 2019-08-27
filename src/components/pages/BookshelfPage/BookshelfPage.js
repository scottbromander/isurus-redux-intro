import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';
import Bookshelf from '../../Bookshelf/Bookshelf';

class BookshelfPage extends Component {

    render() {
        return (
            <div>
                <h2>Bookshelf</h2>
                <p>Hi {this.props.store.userReducer.name}! You have read {this.props.store.userReducer.numOfBooksRead} book(s)</p>
                <Bookshelf />
            </div>
        )
    }
}

export default connect(mapStoreToProps)(BookshelfPage);