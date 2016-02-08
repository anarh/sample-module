import assert from 'assert';
import React from 'react';
import TodoItem from '../../src/todo-item';

describe('TodoItem', function() {
	it('should show an item item', function() {
		var x = React.createElement(TodoItem, { items: [{text: "hello",id: 0}] });
		assert.equal(x.props.items.length, 1);
	});
});
