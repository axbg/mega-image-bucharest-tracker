import React from 'react';
import './index.css';

export default function Panel(props) {
    return (
        <div className="panel">
            <div className="data-container">
                {
                    !props.shops ?
                        <p>loading...</p>
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
