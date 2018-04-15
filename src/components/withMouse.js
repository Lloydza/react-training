import React from 'react';

class WithMouse extends React.Component {
  state = {x: 0, y: 0};
 
  mouseMove = (e) => {
    this.setState({ x: e.screenX, y: e.screenY});
  }
 
   render() {
     const {x, y} = this.state;
     return <div onMouseMove={this.mouseMove}> {this.props.render({x, y})} </div>;
   }
 }

export default WithMouse;