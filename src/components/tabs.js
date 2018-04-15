import React from 'react';

class Tabs extends React.Component {
    state = {
      selectedValue: this.props.defaultValue
    };
    selectTab = value => {
      this.setState({selectedValue: value});
    };
    render() {
      const {children: tabs} = this.props; //all tabs
      return React.Children.map(tabs, tab =>
        React.cloneElement(tab, {
          active: tab.props.value === this.state.selectedValue,
          onSelect: () => this.selectTab(tab.props.value)
        })
      );
    }
  }

export default Tabs;