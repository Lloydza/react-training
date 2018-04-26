import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Foo extends React.Component {
  render() {
    return (
    	<div>
    		<div>
    			<Link to='/bar'>Got To Bar</Link>
			</div>
    		<div>FOO</div>
		</div>
	);
  }
}