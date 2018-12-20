import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import * as Api from '../../dist/api'

class ModalSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      address2send: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleAddressInputChange = this.handleAddressInputChange.bind(this)
    this.sendWaifu = this.sendWaifu.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAddressInputChange(e){
    this.setState({address2send: e.target.value});
  }

  sendWaifu(){
    Api.sendWaifu(this.state.address2send, this.props.waifuID)
    this.toggle()
  }

  render() {
    return (
      <>
        <Button color={this.props.buttonColor} className="p-2 flex-grow-1 bd-highlight" onClick={this.toggle}>
          {this.props.mainButtonText}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}
          centered={true} fade={false}>
          <ModalBody>
            <p>Do you want to send {this.props.waifuName} to someone else?</p>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Address</InputGroupAddon>
              <Input placeholder="0x56c77d84caf29adc6f0bCd02e51a8a33a13Ed749" onChange={this.handleAddressInputChange}/>
              <InputGroupAddon addonType="prepend"><Button color="purple" onClick={this.sendWaifu}>Send</Button></InputGroupAddon>
            </InputGroup>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalSend;