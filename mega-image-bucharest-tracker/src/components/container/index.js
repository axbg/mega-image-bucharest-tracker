import React, { Component } from 'react';
import './index.css';
import Panel from '../panel/index';
import Footer from '../footer/index';
import { PROXY_URL } from '../../constants';
import { MEGA_IMAGE_QUERY_URL } from '../../constants';
import axios from 'axios';

export default class Container extends Component {

    constructor() {
        super();
        this.state = {
            shops: 0
        }
    }

    async componentDidMount() {
        this.setState({
            shops: await this.fetchShops()
        });
    }

    async fetchShops() {
        const shops = await axios.get(PROXY_URL + MEGA_IMAGE_QUERY_URL);
        return shops.data.response.length;
    }

    render() {
        return (
            <div className="container">
                <div className="back-container"></div>
                <div className="front-container">
                    <Panel shops={this.state.shops} />
                    <Footer />
                </div>
            </div>
        )
    }
}