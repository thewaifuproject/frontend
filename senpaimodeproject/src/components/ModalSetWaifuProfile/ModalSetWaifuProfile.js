import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { InputGroup, InputGroupAddon, DropdownMenu, Input, DropdownItem, InputGroupButtonDropdown, DropdownToggle } from 'reactstrap';

import * as Api from '../../dist/api'

class ModalSetWaifuProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalP: false,
      profile2set: '',
      splitButtonOpen: false,
      currentNet:'Social network'
    };
    this.toggleP = this.toggleP.bind(this);
    this.handleProfileInputChange = this.handleProfileInputChange.bind(this)
    this.sendSetWaifuProfile = this.sendSetWaifuProfile.bind(this)
    this.changeSNetwork = this.changeSNetwork.bind(this)
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  toggleP() {
    this.setState({
      modalP: !this.state.modalP
    });
  }

  handleProfileInputChange(e) {
    this.setState({ profile2set: e.target.value });
  }

  sendSetWaifuProfile() {
    console.log(this.state.profile2set, this.props.waifuID)
    Api.setWaifuProfile(this.props.waifuID, this.state.currentNet, this.state.profile2set)
    this.toggleP()
  }

  changeSNetwork(e){
    this.setState({
      currentNet:e.target.id
    })
  }

  render() {
    return (
      <>
        <Modal isOpen={this.props.isopen} toggle={this.props.toggleFunction} className={this.props.className}
          centered={true} fade={false}>
          <ModalBody>
            <p>Assign {this.props.waifuName} to a profile</p>
            <InputGroup>
              <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={()=>this.toggleSplit()}>
                <DropdownToggle caret color="purple">
                {this.state.currentNet}
            </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem id="Twitter" onClick={this.changeSNetwork}>Twitter</DropdownItem>
                  <DropdownItem id="Discord" onClick={this.changeSNetwork}>Discord</DropdownItem>
                </DropdownMenu>
              </InputGroupButtonDropdown>
              <Input placeholder="@thewaifuproject" onChange={this.handleProfileInputChange}/>
              <InputGroupAddon addonType="append"><Button color="purple" onClick={this.sendSetWaifuProfile}>Assign</Button></InputGroupAddon>
            </InputGroup>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalSetWaifuProfile;