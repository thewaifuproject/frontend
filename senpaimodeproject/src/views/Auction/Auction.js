import React, { Component } from 'react';
import WaifuCard from '../../components/WaifuCard/WaifuCard'
import { Fade, Col, Row, Container } from 'reactstrap';

import './Auction.css'

import * as Api from '../../dist/api'

const WaifusList = ({waifusid}) => (
    <>
    {waifusid.map(idW => (
        <Col lg="3" md="4" sm="6" key={idW} >
            <WaifuCard id={idW} mainButtonText="BID" typeT="drop" buttonColor='purple'/>
        </Col>
    ))}
    </>
);

class Auction extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            idswaifus: Api.getWaifus()
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
    }

    render() {
        return (
            <div className="animated fadeIn">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Container>
                    <h1>Waifus in auction</h1>
                    <Row id="waifusOnAuciton" className="main-table">
                        <WaifusList waifusid={this.state.idswaifus}/>
                    </Row>
                </Container>
            </Fade>
            </div>
        )
    }
}

export default Auction;

