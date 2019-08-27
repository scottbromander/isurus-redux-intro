import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookInput from '../../BookInput/BookInput';

class BookInputPage extends Component {

    render() {
        return (
            <BookInput />
        )
    }
}

export default connect()(BookInputPage);