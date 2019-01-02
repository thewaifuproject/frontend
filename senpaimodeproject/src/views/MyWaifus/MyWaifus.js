import React, { Component } from 'react';
import { Alert, Fade, Container, Table, Row, Col } from 'reactstrap';
import WaifuCard from '../../components/WaifuCard/WaifuCard'

import './MyWaifus.css'

import * as Api from '../../dist/api'

const WaifusList = ({waifusid}) => (
    <>
    {waifusid.map(idW => (
        <Col lg="3" md="4" sm="6" key={idW} >
            <WaifuCard id={idW} mainButtonText="Send" typeT="wallet" buttonColor='purple'/>
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
            idswaifus: [],
            defopen:true,
            open:true,
		error:false,
		errorMsg:""
        };
    }
    
    componentDidMount(){
    if (!Api.checkWeb3()){
      this.setState({ errorMsg: <div class="text-center alert-link">No wallet has been detected, install MetaMask to continue<br/><br/><a href="https://metamask.io" target="__blank"><img src="download-metamask.png"/></a></div>});
      this.setState({ error: true });
    } else {
      Api.checkNetwork((net)=>{
        if (!net){
          this.setState({ errorMsg: <div class="text-center alert-link">Oops! You are not in the correct network, change the network to Rinkeby.<br/><br/><img src="https://waifuchain.moe/images/rinkeby.gif" /></div> });
          this.setState({ error: true })
        } else {
 
        Api.getWaifusByAddr((err, waifuIndex)=>{
		if(err){
          this.setState({ errorMsg: <div class="text-center alert-link">You're not logged in MetaMask</div>})
          this.setState({ error: true })
		}
		else{

            this.setState({
                idswaifus:this.state.idswaifus.concat(parseInt(waifuIndex))
            })
            console.log(waifuIndex)
		}
        })
    }
      })
    }
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
                    
                        {this.state.error?<Alert color="danger">{this.state.errorMsg}</Alert>:myWaifus(this.state.idswaifus)}
                    
                </Container>
            </Fade>
            </div>
        )
    }
}

export default MyWaifus;

function myWaifus(waifusid){
    if (waifusid.length>0){
        return <><h1 className="mainTitle">My waifus</h1><Row className="main-table"><WaifusList waifusid={waifusid}/></Row></>
    } else {
        return <Col><img className="center-0waifus" src="https://api.waifuchain.moe/waifu404.jpg"></img></Col>
    }
}
