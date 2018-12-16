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
            <WaifuCard id={waifu['id']} mainButtonText={(waifu['mine'])? "Mine!" : (waifu['pending']) ? "Pending" : (waifu['own']) ? "Claim now" : "See on the wiki"} typeT={(waifu['mine']) ? "mineH" : (waifu['pending']) ? "pending" : ((waifu['own']) ? "claim" : "lost")} buttonColor={(waifu['mine']) ? "success" : (waifu['pending']) ? "purple" : ((waifu['own']) ? "success" : "warning")}/>       
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
        this.setWaifuName = this.setWaifuName.bind(this)
        this.setown = this.setown.bind(this)
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            bidresults: [],
            waifuslog: getBidHistory(),
            waifuNames: {},
            endCallHighestBidder: false
        };

        let day=Math.floor((new Date()-Number(Api.getCreationTime())*1000)/(1000*24*60*60))-1;
        let month=Math.floor(day/30);
        if(month>3)
            return []
        let numWaifus=2**(3-month);
        let first=450-((1-2**(4-month))/(1-2))*30+numWaifus*(day%30);
        let waifusAvailable=[...Array(numWaifus).keys()].map((x)=>x+first)

        Api.highestBidderByIDs((id, addr, account) => {
            this.setState({
                bidresults: this.state.bidresults.concat({id:id, own:(addr===account), pending:(id>=waifusAvailable[0]), mine:false}),
            });
        }, (fin) => {
            this.setState({
                endCallHighestBidder: fin
            });
            if (fin) {
                this.setown()
            }
        })
    }

    setown(){
        Api.getWaifusByAddr((waifuIndex)=>{
            this.state.bidresults.forEach((waifu, i) => {
                if (waifu['id'] == waifuIndex){
                    let stateresults = this.state.bidresults
                    stateresults[i]['mine'] = true
                    this.setState({
                        bidresults: stateresults,
                    });
                }
            })
        })
    }

    componentWillMount() {
        Object.keys(this.state.waifuslog).map(addr =>
            Object.keys(this.state.waifuslog[addr]).map(id => 
                fetch('https://api.waifuchain.moe/?waifu='+id)
                    .then(res => {
                        return res.clone().json()
                    }).then(res => {
                        this.setWaifuName(id, res.name)
                    }).catch(function(error) {
                        console.log('Hubo un problema con la petición Fetch:' + error.message);
                    })
            )
        )
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
    }

    getWaifus() {
        let rows = []
        if (this.state.waifuslog===null || Object.keys(this.state.waifuslog).length == 0)
            rows.push()
        else
            Object.keys(this.state.waifuslog).map(addr =>
                Object.keys(this.state.waifuslog[addr]).map(id => 
                    for(let i=0; i<this.state.waifuslog[addr][id]['real'].length; i++){
                        rows.unshift(<tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{this.state.waifuNames[id]}</td>
                            <td>{this.state.waifuslog[addr][id]['real'][i]}</td>
                            <td>{this.state.waifuslog[addr][id]['fake'][i]}</td>
                            <td>{this.state.waifuslog[addr][id]['secret'][i]}</td>
                            <td>{addr}</td>
                        </tr>)
                    }
                )
            )
        return rows
    }

    revealAll() {
        Api.revealAll();
    }

    setWaifuName(id, name){
        let temp = this.state.waifuNames
        temp[id] = name
        this.setState( {waifuNames:temp} )
    }

    render() {
        return (
            <div className="animated fadeIn">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Container className="content-container">
                    <h1>History bid</h1>
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
                    <h1 className="main-table">Results</h1>
                    <Row className="main-table">
                        <WaifusList bidresults={this.state.bidresults} />
                    </Row>
                </Container>
            </Fade>
            </div>
        )
    }
}

export default HistoryBid;

