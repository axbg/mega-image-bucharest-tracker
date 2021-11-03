import React from 'react';
import './index.css';
import SyncLoader from 'react-spinners/SyncLoader';

export default function Panel(props) {
    return (
        <div className="panel">
            <div className="data-container">
                {
                    !props.shops ?
                        <SyncLoader
                            sizeUnit={"px"}
                            size={25}
                            color={'white'}
                            loading={true}
                        />
                        :
                        <p className="data-number">
                            {props.shops}
                        </p>
                }
            </div>
            <div className="title-container">
                <h3>numărul de magazine Mega Image deschise în București.</h3>
            </div>
        </div>
    )
}
