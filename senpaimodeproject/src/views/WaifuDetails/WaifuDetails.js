import React, { Component } from 'react';
import { Fade, Col, Row, Container } from 'reactstrap';

import BidPanel from '../../components/BidPanel/BidPanel'
import TabsBidPanel from '../../components/TabsBidPanel/TabsBidPanel'
import './WaifuDetails.css'

import '../../tourHelper.css'
import Tour from 'reactour'

import { stepsWaifuDetail } from '../../tour'

import * as Api from '../../dist/api'
import * as Tools from '../../dist/tools'

class WaifuDetails extends Component {

    constructor(props) {
        super(props);
        
        this.checkTutorial = this.checkTutorial.bind(this)
        this.closeTour = this.closeTour.bind(this)
        this.state = {
            waifuId: this.props.match.params.id,
            isTourOpen: true
        };

    }

    checkTutorial(){
        return Tools.checkTutorial('bid');
    }

    closeTour(){
        this.setState({isTourOpen:false})
    }

    componentWillMount() {
        fetch('https://api.waifuchain.moe/?waifu=' + this.state.waifuId)
            .then(res => {
                return res.clone().json()
            }).then(res => {
                this.setState({
                    waifuName: res.name,
                    waifuImage: res.image,
                    waifuDescription: res.description
                });
            }).catch(function (error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
            });
    }

    render() {
        return (
            <div>
                <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                    <Container id="bidcont" className="_main-container">
                        <Row>
                            <Col className="image-container" xs="12" md="4">
                                <h1>{this.state.waifuName}</h1>
                                <img width="100%" src={this.state.waifuImage} />
                            </Col>
                            <Col className="info-container" xs="12" md="8">
                                <div>
                                    <h1>{this.state.waifuName}</h1>
                                    <p>{this.state.waifuDescription}</p>
                                </div>
                                <div id="bidpanel">
                                    <BidPanel wid={this.state.waifuId} />
                                </div>
                            </Col>
                        </Row>
                        <div className='tabs-container' >
                            <TabsBidPanel waifuName={(this.state.waifuName) ? this.state.waifuName : ''} />
                        </div>
                    </Container>
                </Fade>
                {(!this.checkTutorial()) ? (null) : (<Tour
                    steps={stepsWaifuDetail}
                    isOpen={this.state.isTourOpen}
                    onRequestClose={this.closeTour}
                    closeWithMask={false}
                    showNumber={false}
                    showNavigationNumber={false}
                    showNavigation={false}
                    showButtons={false}
                    className="tourHelper"
                    showCloseButton={false}
                />)}
            </div>
        )
    }
}

export default WaifuDetails;