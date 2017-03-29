/**
 * Created by marginyu on 17/3/29.
 */

import React,{PropTypes,Component} from 'react';

let ID = 0; // incrementing counter for todo item ids

const TodoItem = React.createClass({

    propTypes: {
        deleteItem: PropTypes.func.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        item: PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    },

    render() {
        return (
            <div>
                <button style={{width: 30}} onClick={this.props.deleteItem}>x</button>
                <span>{this.props.item.text}</span>
                {this.props.tags.map((tag) => {
                    return <span key={tag} className="tag"> {tag}</span>;
                })}
            </div>
        );
    }

});

const Todos = React.createClass({

    propTypes: {
        initialItems: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired).isRequired,
    },
    getInitialState() {
        return {
            items: this.props.initialItems,
            text: '',
        };
    },

    addTask(e) {
        e.preventDefault();
        this.setState({
            items: [{id: ID++, text: this.state.text}].concat(this.state.items),
            text: '',
        });
    },

    deleteItem(itemId) {
        this.setState({
            items: this.state.items.filter((item) => item.id !== itemId),
        });
    },

    render: function () {
        return (
            <div>
                <h1>My TODOs</h1>
                <form onSubmit={this.addTask}>
                    <input value={this.state.text} onChange={(v)=>{this.setState({text:v.target.value});}}/>
                    <button>Add Task</button>
                </form>
                {this.state.items.map((item) => {
                    return (
                        <TodoItem key={item.id} item={item} tags={['important', 'starred']}
                                  deleteItem={this.deleteItem.bind(null, item.id)}/>
                    );
                })}
            </div>
        );
    }
});

// Create a Todos component, initialized with 1000 items.
const items = [];

for (let i = 0; i < 1000; i++) {
    items.push({id: ID++, text: 'Todo Item #' + i});
}

console.log(items);

class TodoList extends Component {
    render() {
        return (
            <Todos initialItems={items}/>
        );
    }
}


export default TodoList;