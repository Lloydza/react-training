import React from "react";

import Option from './components/option';
import Select from './components/select';

class App extends React.Component {
  state = {value: 'green', opened: false };

  onChange = (newValue) => {
    this.setState({value: newValue, opened: false });
  }

  onOpen = () => {
    this.setState({opened: true});
  }

  render () {
    const {opened, value} = this.state;

    return <div style={{ margin: 50}}>
      <div style={{ fontSize: 30}}>Pick One:</div>
      <Select value={value} opened={opened} onChange={this.onChange} onOpen={this.onOpen} defaultValue="blue">
        <Option value="blue"> Blue </Option>
        <Option value="red"> Red </Option>
        <Option value="green"> Green </Option>
      </Select>
    </div>
  }
};

export default App
