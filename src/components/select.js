import React from 'react';

class Select extends React.Component {
    state = {
      selectedValue: this.props.value || this.props.defaultValue,
      opened: this.props.opened || false
    };

    isControlled = () => {
        return this.props.value && typeof(this.props.opened) !== 'undefined' && this.props.onChange && this.props.onOpen;
    }

    selectOption = value => {
        if (this.isControlled()) {
            if (this.props.opened) {
                this.props.onChange(value);
            }
            else {
                this.props.onOpen();
            }
        }
        else {
            if (this.state.opened) {
                this.setState({ selectedValue: value, opened: false });
            }
            else {
                this.setState({ opened: true });
            }
        }
    };

    render() {
        const {children: options} = this.props;
        const opened = this.isControlled() ? this.props.opened : this.state.opened;
        const selectedValue = this.isControlled() ? this.props.value : this.state.selectedValue;

        
        let selectedChild;
        React.Children.forEach(options, option => {
            if (option.props.value === selectedValue) {
              selectedChild = option.props;
            }
          });

        if (opened) { 
            return React.Children.map(options, option => {
                return React.cloneElement(option, {
                    active: option.props.value === selectedValue,
                    onSelect: () => this.selectOption(option.props.value)
                });
            });
        }

        return <div
                style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    padding: 25,
                    border: '1px solid black',
                    width: 100
                }}
                onClick={this.selectOption}>
                    {selectedChild ? selectedChild.children : 'Pick one'}
                </div>;
    }
  }

export default Select;