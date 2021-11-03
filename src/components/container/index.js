import React, { useState, useEffect } from 'react';
import './index.css';
import Panel from '../panel/index';
import Footer from '../footer/index';
import { PROXY_URL } from '../../constants';
import { MEGA_IMAGE_URL, MEGA_IMAGE_REQUEST_BODY } from '../../constants';
import axios from 'axios';

async function fetchShops() {
    const shops = await axios.get(PROXY_URL + '?' + MEGA_IMAGE_URL + '&' + MEGA_IMAGE_REQUEST_BODY);

    const result = shops.data.data.storeSearchMapPins.filter((element) => {
        return Math.floor(element.geoPoint.latitude) === 44 && Math.floor(element.geoPoint.longitude) === 26
    }).length;

    return result;
};

export default function Container() {
    const [shops, setShops] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchShops();
            setShops(data);
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="back-container"></div>
            <div className="front-container">
                <Panel shops={shops} />
                <Footer />
            </div>
        </div>
    )
}