import React from 'react';
import {render} from 'react-dom';
import TargetList from './TargetList.jsx';
import Form from './Form.jsx';

class App extends React.Component {

  state = {
    targets: []
  };

  addTargets = (targetInfo) => {

    this.setState(prevState => ({
      targets: prevState.targets.concat(targetInfo)
    }));
  };

  render () {
    return (
      <div>
        <Form onSubmit={this.addTargets}/>
        <TargetList targets={this.state.targets}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));