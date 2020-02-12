import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columns } from 'react-bulma-components';

function App() {
  return (
    <div className="App">
      <Button color="primary" renderAs="a">
        My Bulma button
      </Button>
      <header className="App-header"></header>
      <Columns>
        <Columns.Column size="one-fifth">20%</Columns.Column>
        <Columns.Column>80%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-quarter">25%</Columns.Column>
        <Columns.Column>75%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-third">33.333333333%</Columns.Column>
        <Columns.Column>66.666666667%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="half">50%</Columns.Column>
        <Columns.Column>Also 50%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="two-thirds">66.666666667%</Columns.Column>
        <Columns.Column>33.333333333%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="three-quarters">75%</Columns.Column>
        <Columns.Column>25%</Columns.Column>
      </Columns>
    </div>
  );
}

export default App;
