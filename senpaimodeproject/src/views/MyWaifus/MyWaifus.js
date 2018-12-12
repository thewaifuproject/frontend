import React, { Component } from 'react';
import { Fade, Container, Table, Button } from 'reactstrap';

import './MyWaifus.css'

import * as Api from '../../dist/api'

function getBidHistory(){
    var log = JSON.parse(localStorage.getItem("waifuchain"))
    if (log==null)
        return null
    else
        return log['logbids']
}

class MyWaifus extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.getWaifus = this.getWaifus.bind(this)
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            waifus: getBidHistory()
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
    }

    getWaifus() {
        let rows = []
        if (this.state.waifus==null || Object.keys(this.state.waifus).length == 0)
            rows.push(<h4>You have no bids saved</h4>)
        else
            
        return rows
    }

    render() {
        return (
            <div className="animated fadeIn">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Container className="content-container">
                    <h1>My waifus</h1>
                    {/*getMyWaifus()*/}
                </Container>
            </Fade>
            </div>
        )
    }
}

export default MyWaifus;

