import React, { Component } from 'react';
import './BidPanel.css';

import { Card, CardBody, Button, InputGroup, Input, InputGroupAddon } from 'reactstrap';
import { Col, Row, Container, Alert } from 'reactstrap';

import TooltipItem from '../TooltipQuestion/TooltipQuestion'

import * as Api from '../../dist/api'
import * as Tools from '../../dist/tools'

class BidPanel extends Component {
  constructor(props) {
    super(props);

    this.onDismissAlert = this.onDismissAlert.bind(this);
    this.updateCountDown = this.updateCountDown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.bid = this.bid.bind(this);

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
    console.log(Api.checkWeb3())
    if (!Api.checkWeb3()){
      this.setState({ web3: false});
      this.setState({ alert: true });
    } else {
      Api.checkNetwork((net)=>{
        if (!net){
          this.setState({ alertText: <div>Oops! You are not in the correct network, change the network to Rinkeby.<br/><br/><img src="https://waifuchain.moe/images/rinkeby.gif" /></div> });
          this.setState({ alert: true })
        } else if (this.state.realBidValue==undefined || this.state.fakeBidValue==undefined){
          this.setState({ alertText: "Please enter a real and a fake bid by filling the respective fields." });
          this.setState({ alert: true });
        } else if (parseInt(this.state.realBidValue)>parseInt(this.state.fakeBidValue)){
          this.setState({ alertText: "Fake bid must be greater or equal than real bid." });
          this.setState({ alert: true });
        } else {
		Api.getFunds().
			then((funds)=>{
				if(Number(funds)==0){
          this.setState({ alertText: <div>Your wallet is empty, click <a href="https://www.rinkeby.io/#faucet">here</a> to go to the Rinkeby faucet, then follow the instructions there to get some money.</div> });
          this.setState({ alert: true });
				} else {
          Api.startBid(this.props.wid, this.state.realBidValue, this.state.fakeBidValue, (logged) => this.setState({ alert:logged, alertText: "You are not logged in Metamask!"}),
          ()=>{
            Tools.disableTutorial('bid');
          })
				}
				
        })
	}
      })
    }
  }

  onDismissAlert(){
    this.setState({ alert: false });
  }

  render() {
    return (
      <div>
        <Card outline color="secondary">
            <CardBody>
                <Container>
                    <Row>
                      <Col xs="12" sm="6" id="bidreal">
                      <div>
                        Real bid &nbsp;
                        <TooltipItem pos='right' id='realq' text={tip_realbid}/>
                      </div>
                      <InputGroup>
                        <Input placeholder="0.015" type="number" onChange={this.onInputChangeReal.bind(this)}/>
                        <InputGroupAddon addonType="append">ETH</InputGroupAddon>
                      </InputGroup>
                      </Col>
                      <Col xs="12" sm="6" id="bidfake">
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
                      <Col id="bidtimer">
                        <div className="float-left">
                          <span>Auction ends in:</span>
                          <h2>{this.state.countdown}</h2>
                        </div>
                      </Col>
                    </Row>
                    <Row className="countdown-row">
                      <Col>
                      <Alert color="danger" isOpen={this.state.alert} toggle={this.onDismissAlert}>
                        {(!this.state.web3)?<div class="alert-link">No wallet has been detected, install MetaMask to continue<br/><br/><a href="https://metamask.io" target="__blank"><img src="download-metamask.png" width="100%"/></a><br/><br/>Already installed? Reload the page to continue</div>:this.state.alertText} 
                      </Alert>
                      </Col>
                    </Row>
                    <Row>
                        <Col>
                          <Button color="primary" className="float-right" onClick={this.bid}>BID NOW</Button>
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
