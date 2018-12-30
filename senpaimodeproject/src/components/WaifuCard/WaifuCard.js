import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { ButtonGroup, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './WaifuCard.css';

import ModalSend from '../../components/ModalSend/ModalSend'
import ModalSetWaifuProfile from '../../components/ModalSetWaifuProfile/ModalSetWaifuProfile'

import * as Api from '../../dist/api'

class WaifuCard extends Component {

  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.toggle = this.toggle.bind(this);
    this.claim = this.claim.bind(this);
    this.state = {
      dropdownOpen: false,
      waifuShortBio: '',
      waifuName: '',
      buttonColor: 'purple',
      isopenSW: false
    };

  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentWillMount() {
    //mounted = true;
    //console.log("componentWillMount", mounted) may
    fetch('https://api.waifuchain.moe/?waifu=' + this.props.id) //TODO: cancel fetch on componentWillUnmount
      .then(res => {
        return res.clone().json()
      }).then(res => {
        //console.log(mounted)
        //if (mounted) {
        this.setState({
          waifuName: res.name,
          waifuImage: res.image,
          waifuDescription: res.description,
          waifuShortBio: fn(res.description, 50)
        });
        //}
      }).catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });

  }

  componentWillUpdate(nextProps, nextState) {
    //this.setState({buttonColor: nextProps.buttonColor})
  }

  handleButtonClick = () => {
    const waifuLink = `#/waifus/${this.props.id}`
    window.location = waifuLink
  };

  claim() {
    if (this.props.typeT === 'claim') {
      Api.claimWaifu(this.props.id);
    }
  }

  toggleModalSetProfile(){
    this.setState({
      isopenSW: !this.state.isopenSW
    });
  }

  //componentWillUnmount(){
  //  mounted = false;
  //  console.log("componentWillUnmount", mounted)
  //}

  render() {
    let cardbody = (
      <CardBody>
        <CardTitle>{this.state.waifuName}</CardTitle>
        <CardText>{fn(this.state.waifuShortBio, 50)}</CardText>
        <ButtonGroup className="d-flex bd-highlight">
          <a className='nostile width100' href={"https://waifu.wiki/index.php/" + this.state.waifuName.replace(' ', '_')} target='__blank'><Button color={this.props.buttonColor} className="p-2 flex-grow-1 bd-highlight width100" onClick={this.claim}>{this.props.mainButtonText}</Button></a>
        </ButtonGroup>
      </CardBody>
    )
    if (this.props.typeT === 'drop') {
      cardbody = (
        <CardBody>
          <CardTitle>{this.state.waifuName}</CardTitle>
          <CardText>{fn(this.state.waifuShortBio, 50)}</CardText>
          <ButtonGroup className="d-flex bd-highlight">
            <Button id="buttontourjs" color={this.props.buttonColor} className="p-2 flex-grow-1 bd-highlight" onClick={this.handleButtonClick}>
              {this.props.mainButtonText}
            </Button>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle color={this.props.buttonColor} caret></DropdownToggle>
              <DropdownMenu>
                <a className='nostile' href={"https://waifu.wiki/index.php/" + this.state.waifuName.replace(' ', '_')} target='__blank'><DropdownItem className="pointa">See on the wiki</DropdownItem></a>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </CardBody>
      )
    } else if (this.props.typeT === 'claim') {
      cardbody = (
        <CardBody>
          <CardTitle>{this.state.waifuName}</CardTitle>
          <CardText>{fn(this.state.waifuShortBio, 50)}</CardText>
          <ButtonGroup className="d-flex bd-highlight">
            <Button color={this.props.buttonColor} className="p-2 flex-grow-1 bd-highlight width100" onClick={this.claim}>{this.props.mainButtonText}</Button>
          </ButtonGroup>
        </CardBody>
      )
    } else if (this.props.typeT === 'wallet') {
      cardbody = (
        <CardBody>
          <CardTitle>{this.state.waifuName}</CardTitle>
          <CardText>{fn(this.state.waifuShortBio, 50)}</CardText>
          <ButtonGroup className="d-flex bd-highlight">
            <ModalSetWaifuProfile toggleFunction={this.toggleModalSetProfile.bind(this)} isopen={this.state.isopenSW} mainButtonText={this.props.mainButtonText} buttonColor={this.props.buttonColor}
              mainButtonText={this.props.mainButtonText} waifuName={this.state.waifuName} waifuID={this.props.id} />
            <ModalSend mainButtonText={this.props.mainButtonText} buttonColor={this.props.buttonColor}
              mainButtonText={this.props.mainButtonText} waifuName={this.state.waifuName} waifuID={this.props.id} />
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle color={this.props.buttonColor} caret></DropdownToggle>
                <DropdownMenu>
                  <a className='nostile'><DropdownItem className="pointa" onClick={()=>this.toggleModalSetProfile()}>Assign to profile</DropdownItem></a>
                  <a className='nostile' href={"https://waifu.wiki/index.php/" + this.state.waifuName.replace(' ', '_')} target='__blank'><DropdownItem className="pointa">See on the wiki</DropdownItem></a>
                </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </CardBody>
      )
    }

    return (
      <div>
        <Card>
          <CardImg className="fixedH-auction" width="100%" src={this.state.waifuImage} alt={this.state.waifuImage} />
          {cardbody}
        </Card>
      </div>
    );
  }

}

function fn(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

export default WaifuCard;