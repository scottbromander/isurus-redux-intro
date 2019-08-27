import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>Hi {this.props.store.userReducer.name}!</h1>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(HomePage);