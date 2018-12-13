import React, { Component } from 'react';
import { Fade, Container, Table, Row, Col } from 'reactstrap';
import WaifuCard from '../../components/WaifuCard/WaifuCard'

import './MyWaifus.css'

import * as Api from '../../dist/api'

const WaifusList = ({waifusid}) => (
    <>
    {waifusid.forEach(idW => (
        <Col lg="3" md="4" sm="6" key={idW} >
            <WaifuCard id={idW} mainButtonText="BID" type="drop"/>
        </Col>
    ))}
    </>
);

class MyWaifus extends Component {

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
    }
    
    componentDidMount(){
        Api.getWaifusByAddr((waifuIndex)=>{
            this.setState({idswaifus:this.state.idswaifus.push(waifuIndex)})
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
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Container className="content-container">
                    {myWaifus(this.state.idswaifus)}
                </Container>
            </Fade>
            </div>
        )
    }
}

export default MyWaifus;

function myWaifus(waifusid){
    if (waifusid.length>0){
        return <div><h1>My waifus</h1><WaifusList waifusid={waifusid}/></div>
    } else {
        return <Col><img className="center-0waifus" src="https://api.waifuchain.moe/waifu404.jpg"></img></Col>
    }
}