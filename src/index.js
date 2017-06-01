import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList';
import TodoList02 from './TodoList02';
import TodoList03 from './TodoList03';
import './index.css';

/*ReactDOM.render(
    <div>
        <div style={{float:'left',marginRight:200}}>
            <TodoList/>
        </div>
        <div style={{float:'left',marginRight:200}}>
            <TodoList02 />
        </div>
        <div style={{float:'left'}}>
            <TodoList03 />
        </div>
    </div>,
  document.getElementById('root')
);*/


ReactDOM.render(
    <TodoList03/>,
    document.getElementById('root')
);