import React, { Component } from 'react';
import WaifuCard from '../../components/WaifuCard/WaifuCard'
import { Fade, Col, Row, Container } from 'reactstrap';

import './AuctionsHistory.css'

import * as Api from '../../dist/api'

const WaifusList = ({waifusid}) => (
    <>
    {waifusid.map(idW => (
        <Col lg="3" md="4" sm="6" key={idW} >
            <WaifuCard id={idW} mainButtonText="See on the wiki"/>
        </Col>
    ))}
    </>
); 

class AuctionsHistory extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            idswaifus: []
        };
        Api.getWaifus((waifus)=>{
            this.setState({
                idswaifus: [...Array(waifus[0]).keys()],
            });
        })
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
            <div id="waifu-countdown"></div>
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Container>
                    <h1>Auction history</h1>
                    <Row id="waifusOnAuciton" className="main-table">
                        <WaifusList waifusid={this.state.idswaifus}/>
                    </Row>
                </Container>
            </Fade>
            </div>
        )
    }
}

export default AuctionsHistory;

