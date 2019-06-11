import React, { Component } from 'react';
import './index.css';
import SyncLoader from 'react-spinners/SyncLoader';

export default class Panel extends Component {

    render() {
        return (
            <div className="panel">

                <div className="data-container">
                    {
                        !this.props.shops ?
                            <SyncLoader
                                sizeUnit={"px"}
                                size={25}
                                color={'white'}
                                loading={true}
                            />
                            :
                            <p className="data-number">
                                {this.props.shops}
                            </p>
                    }
                </div>
                <div className="title-container">
                    <h3>numărul de magazine Mega Image deschise în București.</h3>
                </div>
            </div>
        )
    }
}