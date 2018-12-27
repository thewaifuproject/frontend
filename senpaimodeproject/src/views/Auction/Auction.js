import React, { Component } from 'react';
import WaifuCard from '../../components/WaifuCard/WaifuCard'
import { Fade, Col, Row, Container } from 'reactstrap';
import Tour from 'reactour'

import {steps} from '../../tour'

import './Auction.css'
import '../../tourHelper.css'

import * as Api from '../../dist/api'

const WaifusList = ({waifusid}) => (
    <>
    {waifusid.map(idW => (
        <Col id="colcard" lg="3" md="4" sm="6" key={idW} >
            <WaifuCard id={idW} mainButtonText="BID" typeT="drop" buttonColor='purple'/>
        </Col>
    ))}
    {console.log(waifusid)}
    </>
);

class Auction extends Component {

    constructor(props) {
        super(props);

        this.closeTour = this.closeTour.bind(this)
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            idswaifus: Api.getWaifus(),
            isTourOpen: true
        };
    }

    closeTour(){
        this.setState({isTourOpen:false})
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
                    <h1 id="titulo">Waifus in auction</h1>
                    <Row id="waifusOnAuciton" className="main-table">
                        <WaifusList waifusid={this.state.idswaifus}/>
                    </Row>
                </Container>
            </Fade>
            <Tour
                steps={steps}
                isOpen={this.state.isTourOpen}
                onRequestClose={this.closeTour}
                closeWithMask={false}
                showNumber={false}
                showNavigationNumber={false}
                showNavigation={false}
                showButtons={false}
                className="tourHelper"
                showCloseButton={false}
            />
            </div>
        )
    }
}

export default Auction;

