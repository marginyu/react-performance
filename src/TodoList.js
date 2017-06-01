/**
 * Created by marginyu on 17/3/29.
 */

import React, {PropTypes, Component} from 'react';

class TodoItem extends Component {

    static propTypes = {
        deleteItem: PropTypes.func.isRequired,
        item: PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    };

    deleteItem = ()=>{
        let id = this.props.item.id;
        this.props.deleteItem(id);
    };

    shouldComponentUpdate(nextState,nextProps) {
        if(this.props.item == nextProps.item && this.props.deleteItem == nextProps.deleteItem){
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <button style={{width: 30}} onClick={this.deleteItem}>X</button>
                &nbsp;
                <span>{this.props.item.text}</span>
            </div>
        );
    }

}

class Todos extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            items: this.props.initialItems,
            text: '',
        };
    }

    static propTypes = {
        initialItems: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired).isRequired,
    };

    addTask = (e)=> {
        e.preventDefault();
        this.setState({
            items: [{id: ID++, text: this.state.text}].concat(this.state.items),
            text: '',
        });
    };

    deleteItem = (itemId)=> {
        this.setState({
            items: this.state.items.filter((item) => item.id !== itemId),
        });
    };

    render() {
        return (
            <div>
                <h1>待办事项</h1>
                <form onSubmit={this.addTask}>
                    <input value={this.state.text} onChange={(v)=>{this.setState({text:v.target.value});}}/>
                    <button>添加</button>
                </form>
                {this.state.items.map((item) => {
                    return (
                        <TodoItem key={item.id}
                                  item={item}
                                  deleteItem={this.deleteItem}/>
                    );
                })}
            </div>
        );
    }
}

let ID = 0;
const items = [];
for (let i = 0; i < 1000; i++) {
    items.push({id: ID++, text: '事项' + i});
}

class TodoList extends Component {
    render() {
        return (
            <Todos initialItems={items}/>
        );
    }
}

export default TodoList;