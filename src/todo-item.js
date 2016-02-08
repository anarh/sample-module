"use strict"

import React from 'react';

const TODO_ITEM_STYLE = {
	background: '#fff'
};

const TodoItem = React.createClass({
	propTypes: {
		id: React.PropTypes.number.isRequired,
		text: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (<div style={TODO_ITEM_STYLE}>{this.props.text}</div>);
	}
});

export default TodoItem;
