import React, { Component } from 'react';
import { Fade, Container, Table, Button, Col, Row } from 'reactstrap';
import WaifuCard from '../../components/WaifuCard/WaifuCard'

import './HistoryBid.css'

import * as Api from '../../dist/api'

function getBidHistory(){
    var log = JSON.parse(localStorage.getItem("waifuchain"))
    if (log==null)
        return null
    else
        return log['logbids']
}

const WaifusList = ({bidresults}) => (
    <>
    {bidresults.map(waifu => (
        <Col lg="3" md="4" sm="6" key={waifu['id']} >
            <WaifuCard id={waifu['id']} mainButtonText={(waifu['own']) ? "Claim now" : ((waifu['pending']) ? "Pending" : "Lost")}/>
        </Col>
    ))}
    </>
); 

class HistoryBid extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.getWaifus = this.getWaifus.bind(this)
        this.revealAll = this.revealAll.bind(this)
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            bidresults: [],
            waifuslog: getBidHistory()
        };

        Api.highestBidderByIDs((id, addr, account) => {
            console.log((this.state.bidresults))
            this.setState({
                bidresults: this.state.bidresults.concat({id:id, own:(addr==account), pending:true}),
            });
        })
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
    }

    getWaifus() {
        let rows = []
        if (this.state.waifuslog==null || Object.keys(this.state.waifuslog).length == 0)
            rows.push()
        else
            Object.keys(this.state.waifuslog).map(addr =>
                Object.keys(this.state.waifuslog[addr]).map(id => 
                    rows.unshift(<tr key={id}>
                        <th scope="row">{id}</th>
                        <td>Waifu</td>
                        <td>{this.state.waifuslog[addr][id]['real']}</td>
                        <td>{this.state.waifuslog[addr][id]['fake']}</td>
                        <td>{this.state.waifuslog[addr][id]['secret']}</td>
                        <td>{addr}</td>
                    </tr>)
                )
            )
        return rows
    }

    revealAll() {
        Api.revealAll();
    }

    render() {
        return (
            <div className="animated fadeIn">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Container className="content-container">
                    <h1>History bid</h1>
                    {console.log(this.state.waifus)}
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th>Waifu ID</th>
                                <th>Name</th>
                                <th>Real bid</th>
                                <th>Fake bid</th>
                                <th>Secret</th>
                                <th>Account</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getWaifus().map(r => r)}
                        </tbody>
                    </Table>
                    <Button color="success" onClick={this.revealAll}>REVEAL ALL</Button>
                </Container>
                <h1></h1>
                <Container className="content-container">
                    <h1>Results</h1>
                    {console.log(this.state.waifus)}
                    <Row id="waifusOnAuciton" className="main-table">
                        <WaifusList bidresults={this.state.bidresults}/>
                    </Row>
                </Container>
            </Fade>
            </div>
        )
    }
}

export default HistoryBid;

