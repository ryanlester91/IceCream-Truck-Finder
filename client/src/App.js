import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import API from "../src/utils/API";
import {Container, Row, Col} from "../src/Components/Grid";
import {IceCreamList, IceCreamListItem} from "../src/Components/IceCreamList"
import { Input, TextArea, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";

class App extends Component {
  state ={
    iceCreams: [],
    iceCreamSearch: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getProduct(this.state.iceCreamSearch)
    .then(res => this.setState({iceCreams: res.data}))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav/>
        <form>
        <Container>
          <Row>
            <Col size="xs-9  sm-10">
              <Input 
              name="iceCreamSearch"
              value={this.state.iceCreamSearch}
              onChange={this.handleInputChange}
              placeholder= "Search for a specific ice cream"
              />
            </Col>
            <Button 
            onClick={this.handleFormSubmit}
            type="success"
            className="input-lg"
            >
              Search
            </Button>
          </Row>
        </Container>
        </form>
      </div>
    )
  }
}

export default App;
