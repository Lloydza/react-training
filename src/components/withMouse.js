import React from 'react';

function withMouse(Component){
  return class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        x: 0, y: 0
      };

      this.mouseMove = this.mouseMove.bind(this);
    }

    mouseMove(e) {
      this.setState({ x: e.screenX, y: e.screenY});
    }
    
    render(){
      return <div onMouseMove={this.mouseMove}>
         <Component {...this.props} x={this.state.x} y={this.state.y}/>
      </div>
    }
  }
}

export default withMouse;