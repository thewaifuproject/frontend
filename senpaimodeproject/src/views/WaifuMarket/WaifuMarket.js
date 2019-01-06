import React, { Component } from 'react';

import './WaifuMarket.css'

class WaifuMarket extends Component {

	componentDidMount() {
		document.querySelector(".main-container.container-fluid").classList.add("market");
	}

    render() {

        return <iframe src='https://rinkeby.opensea.io/category/waifuchainv3?embed=true' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>
    }

	componentWillUnmount() {
		document.querySelector(".main-container.container-fluid").classList.remove("market");
	}

}

export default WaifuMarket;

