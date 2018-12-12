import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { ButtonGroup, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './WaifuCard.css';

class WaifuCard extends Component {

  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      waifuShortBio:'',
      waifuName:''
    };
    
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentWillMount() {
    fetch('https://api.waifuchain.moe/?waifu='+this.props.id)
    .then(res => {
      return res.clone().json()
    }).then(res => {
      this.setState({ waifuName: res.name,
                      waifuImage: res.image,
                      waifuDescription: res.description,
                      waifuShortBio: fn(res.description,50)});
    }).catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }

  handleButtonClick = () => {
    const waifuLink = `#/waifus/${this.props.id}`
    window.location=waifuLink
  };

  render() {
    
    let cardbody = (
        <CardBody>
        <CardTitle>{this.state.waifuName}</CardTitle>
        <CardText>{fn(this.state.waifuShortBio,50)}</CardText>
          <ButtonGroup className="d-flex bd-highlight">
            <a className='nostile width100' href={"https://waifu.wiki/index.php/"+this.state.waifuName.replace(' ', '_')} target='__blank'><Button color="purple" className="p-2 flex-grow-1 bd-highlight width100">{this.props.mainButtonText}</Button></a>
          </ButtonGroup>
        </CardBody>
    )
    if (this.props.type=='drop'){
      cardbody = (
        <CardBody>
            <CardTitle>{this.state.waifuName}</CardTitle>
            {/*<CardSubtitle>Serie</CardSubtitle>*/}
            <CardText>{fn(this.state.waifuShortBio,50)}</CardText>
            <ButtonGroup className="d-flex bd-highlight">
            <Button color="purple" className="p-2 flex-grow-1 bd-highlight" onClick={this.handleButtonClick}>
              {this.props.mainButtonText}
            </Button>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="purple" caret></DropdownToggle>
        <DropdownMenu>
          <a className='nostile' href={"https://waifu.wiki/index.php/"+this.state.waifuName.replace(' ', '_')} target='__blank'><DropdownItem className="pointa">See on the wiki</DropdownItem></a>
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

function fn(text, count){
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

export default WaifuCard;