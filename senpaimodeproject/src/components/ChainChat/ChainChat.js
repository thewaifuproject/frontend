import React, { Component } from 'react';
import '../../chainchat/Chat/css/normalize.css';
import '../../chainchat/Chat/css/style.css';
import '../../chainchat/Chat/css/style_chat.css';

class ChainChat extends Component {
  
  constructor(props) {
    super(props);

    this.iframe = this.iframe.bind(this)

  }

  iframe(){
    return {__html: this.props.iframe}
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ this.iframe() } />
      </div>
    )
  }
}

export default ChainChat
                                                  