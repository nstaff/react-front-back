import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columns, Navbar } from 'react-bulma-components';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const menuItems = [
  {
    name: 'Home',
    url: '/',
    iconClass: ''
  },
  {
    name: 'Google',
    url: 'https://www.google.com',
    iconClass: 'fa fa-spinner fa-spin'
  },
  {
    name: 'Github',
    url: 'https://www.github.com/nstaff',
    iconClass: 'fab fa-github'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar color="light" fixed="top" active={true} transparent={false}>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              {this.state.menuItems.map(item => (
                <Navbar.Item href={item.url}>
                  <i className={item.className}>{item.name}</i>
                </Navbar.Item>
              ))}
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}

export default App;
