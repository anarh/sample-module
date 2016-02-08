"use strict"

import React from 'react';
import { render } from 'react-dom';
import TodoList from './todo-list';

/**
 * Renders the todo list
 * @param {object} el   an html dom element
 * @param {array} items and array of todo items that consist of text and ids
 */
const RenderTodoList = function(el, items) {
	render(<TodoList items={items} />, el);
};

export default RenderTodoList;