"use strict"

import React from 'react';
import TodoItem from './todo-item';

const TODO_LIST_STYLE = {
	background: "black"
};

const TodoList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired
	},

	render: function() {
		return (<div style={TODO_LIST_STYLE}>
			{this.props.items.map(function(i) {
				return <TodoItem key={i.id} {...i} />
			})}
		</div>);
	}
});

export default TodoList;
