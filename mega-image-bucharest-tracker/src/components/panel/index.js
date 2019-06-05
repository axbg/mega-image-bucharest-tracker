import React, { Component } from 'react';
import './index.css';
import ClipLoader from 'react-spinners/ClipLoader';

export default class Panel extends Component {

    render() {
        return (
            <div className="panel">
                <h1>this is the main panel</h1>
                {
                    !this.props.shops ?
                        <ClipLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'white'}
                            loading={true}
                        />
                        :
                        <p>there are {this.props.shops} shops</p>
                }
            </div>
        )
    }
}