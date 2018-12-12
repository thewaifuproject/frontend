import React, { Component } from 'react';
import { Fade, Col, Row, Container } from 'reactstrap';

import BidPanel from '../../components/BidPanel/BidPanel'
import TabsBidPanel from '../../components/TabsBidPanel/TabsBidPanel'
import './WaifuDetails.css'

import * as Api from '../../dist/api'

class WaifuDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            waifuId: this.props.match.params.id
        };

    }

    componentWillMount() {
        fetch('https://api.waifuchain.moe/?waifu='+this.state.waifuId)
        .then(res => {
            return res.clone().json()
        }).then(res => {
            this.setState({ waifuName: res.name,
                            waifuImage: res.image,
                            waifuDescription: res.description});
        }).catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
    }

    render() {
        return (
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Container className="_main-container">
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
                            <BidPanel wid={this.state.waifuId}/>
                        </Col>
                    </Row>
                    <div className='tabs-container' >
                        <TabsBidPanel />
                    </div>
                </Container>
            </Fade>
        )
    }
}

export default WaifuDetails;