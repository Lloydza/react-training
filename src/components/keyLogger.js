import React from "react";

const ignoreKeys = ["Enter", "Escape", "Backspace"];

class KeyLogger extends React.Component {
  state = {lastKeystroke: '', typedText: ''};

  componentDidMount() {
      this.inputDiv && this.inputDiv.focus();
  }

  keyDown = (e) => {
    var newTypedText = this.state.typedText;
    if (ignoreKeys.indexOf(e.key) === -1) {
        newTypedText += e.key;
    }

    this.setState({lastKeystroke: e.key, typedText: newTypedText});
  }

  render() {
    const {lastKeystroke, typedText} = this.state;
    return <div 
            ref={ref => (this.inputDiv = ref)}
            onKeyDown={this.keyDown}
            tabIndex={0}
            >
                {this.props.children({lastKeystroke, typedText})}
            </div>;
  }
}

export default KeyLogger;
