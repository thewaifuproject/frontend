import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
//import { Link } from 'react-router-dom';
import './NavMenu.css';

class NavMenu extends Component {
  render() {
    return (
      <div className="NavMenu">
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3 items">
            <NavLink className="items" href="https://waifuchain.moe" target="__blank">WaifuChain</NavLink>
          </NavItem>
          <NavItem className="px-3">
            {/*<Link  className="items" to="/users">Users</Link>*/}
            <NavLink  className="items" href="https://waifuchain.moe/faq.html" target="__blank">FAQ</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink  className="items" href="https://waifuchain.moe/tutorial.html">Tutorial</NavLink>
          </NavItem>
          {/*<NavItem className="px-3">
            <NavLink  className="items" href="https://rinkeby.opensea.io/assets/waifuchain" target="__blank">Market</NavLink>
          </NavItem>*/}
          <NavItem className="px-3">
            <NavLink  className="items" href="https://discordapp.com/invite/ykrT4bw" target="__blank">Discord</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavMenu;