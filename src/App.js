import React, { Component } from 'react';
import Button from './component/Button';
import StyledButton from './component/StyledButton';

class App extends Component {

  render() {

    return (
      <div>
        <Button>버튼</Button>
        <StyledButton>버튼2</StyledButton>
      </div>
    );
  }
}

export default App;
