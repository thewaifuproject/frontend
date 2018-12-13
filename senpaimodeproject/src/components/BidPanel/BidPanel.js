import React, { Component } from 'react';
import './BidPanel.css';

import { Card, CardBody, Button, InputGroup, Input, InputGroupAddon } from 'reactstrap';
import { Col, Row, Container, Alert } from 'reactstrap';

import TooltipItem from '../TooltipQuestion/TooltipQuestion'
import Modal from '../../components/Modal/Modal'

import * as Api from '../../dist/api'

class BidPanel extends Component {
  constructor(props) {
    super(props);

    this.onDismissAlert = this.onDismissAlert.bind(this);
    this.updateCountDown = this.updateCountDown.bind(this);
    this.toggle = this.toggle.bind(this);

    let countdown = Api.getCountDown(this.props.wid)

    this.state = {
      tooltipOpen: false,
      countDownDate: countdown[0],
      countdown:'-',
      alert: false,
      alertText: '',
      active:countdown[1],
      show: false,
      web3: true
    };

  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    var intervalId = setInterval(this.updateCountDown, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  }

  updateCountDown(){
    // Get todays date and time
    var now = new Date().getTime();
                
    // Find the distance between now and the count down date
    var distance = this.state.countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    var cdown = hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0 || ! this.state.active) {
        clearInterval(this.state.intervalId);
        cdown = "BID TIME HAS ENDED";
    }
    this.setState({ countdown:cdown });
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  onInputChangeReal (e) {
    this.setState({ realBidValue: e.target.value });
  }

  onInputChangeFake (e) {
    this.setState({ fakeBidValue: e.target.value });
  }
  
  bid(){
    Api.checkNetwork((n)=>this.setState({netOK:n}))
    if (Api.checkWeb3()){
      this.setState({ web3: false});
      this.setState({ alert: true });
    }/* else if (!this.state.netok){
      this.setState({ alertText: "Oops! You are not in the correct network, change the network to Rinkeby. (In the metamask extension, top selector)" });
      this.setState({ alert: true });
    }*/
    else if (parseInt(this.state.realBidValue)<=parseInt(this.state.fakeBidValue)){
      Api.startBid(this.props.wid, this.state.realBidValue, this.state.fakeBidValue, (logged) => this.setState({ alert:logged, alertText: "You are not logged in in Metamask!"}))
    } else {
      this.setState({ alertText: "Fake bid must be greater or equal than real bid." });
      this.setState({ alert: true });
    }
  }

  onDismissAlert(){
    this.setState({ alert: false });
  }

  render() {
    return (
      <div>
        <Card outline color="secondary">
        {/*<Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
      </button>*/}
            <CardBody>
                <Container>
                <Modal/>
                    <Row>
                      <Col xs="12" sm="6">
                      <div>
                        Real bid &nbsp;
                        <TooltipItem pos='right' id='realq' text={tip_realbid}/>
                      </div>
                      <InputGroup>
                        <Input placeholder="0.015" type="number" onChange={this.onInputChangeReal.bind(this)}/>
                        <InputGroupAddon addonType="append">ETH</InputGroupAddon>
                      </InputGroup>
                      </Col>
                      <Col xs="12" sm="6">
                      <div>
                        Fake bid &nbsp;
                        <TooltipItem pos='right' id='fakeq' text={tip_fakebid}/>
                      </div>
                        <InputGroup>
                            <Input placeholder="0.021" type="number" onChange={this.onInputChangeFake.bind(this)}/>
                            <InputGroupAddon addonType="append">ETH</InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row className="countdown-row">
                      <Col>
                        <div className="float-left">
                          <span>Auction ends in:</span>
                          <h2>{this.state.countdown}</h2>
                        </div>
                      </Col>
                    </Row>
                    <Row className="countdown-row">
                      <Col>
                      <Alert color="danger" isOpen={this.state.alert} toggle={this.onDismissAlert}>
                        {(!this.state.web3)?<div>No wallet has been detected, do you want to know how to download one? <a href="https://waifuchain.moe/tutorial.html" target="__blank" className="alert-link">Click here to visit the tutorial!</a></div>:this.state.alertText} 
                      </Alert>
                      </Col>
                    </Row>
                    <Row>
                        <Col>
                          <Button color="primary" className="float-right" onClick={this.bid.bind(this)}>BID NOW</Button>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
      </div>
    );
  }
}

export default BidPanel


const tip_realbid = "Enter here how much do you want to bid on the waifu in ETH"
const tip_fakebid = "Enter here an arbitrary value greater than or equal to your real bid"