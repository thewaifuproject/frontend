import React, { Component } from 'react';
import './TabsBidPanel.css';

import { Fade, Col, Row, Container } from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, Button, InputGroup, Input, InputGroupAddon, Tooltip } from 'reactstrap';
import classnames from 'classnames';

class TabsBidPanel extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };

    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }

    render() {
        return (
        <div>
            <Nav tabs>
            <NavItem>
                <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}>
                Information
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}>
                How auctions work
                </NavLink>
            </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
                <Row>
                <Col sm="12">
                    <h4>Biography</h4>
                    <Button outline color="primary">Know more on the wiki</Button>
                </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                {howAuctionsWork}
            </TabPane>
            </TabContent>
        </div>
        );
    }
}

export default TabsBidPanel

const howAuctionsWork = "The bid you made and the bids other users made are completely private. To assure that privacy, each user will make two bids, one “real” and another one “fake”. Only when the bidding process ends, you will know if you got the waifu. After that, the user has to manually take action to claim the waifu."