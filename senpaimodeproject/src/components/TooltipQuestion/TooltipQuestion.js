import React from 'react';
import { Button, Tooltip } from 'reactstrap';

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <span>
        <span className="fa fa-question-circle" id={'Tooltip-' + this.props.id}></span>
        <Tooltip placement={this.props.pos} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          {this.props.text}
        </Tooltip>
      </span>
    );
  }
}

export default TooltipItem



{/*<span className="fa fa-question-circle"></span>*/}