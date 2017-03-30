/**
 * Created by marginyu on 17/3/30.
 */
/**
 * Created by marginyu on 17/3/29.
 */

import React,{PropTypes,Component,PureComponent} from 'react';



class TodoItem extends PureComponent {

    static propTypes =  {
        deleteItem: PropTypes.func.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        item: PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    };

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

}

class Todos extends Component{

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

    addTask = (e)=>{
        e.preventDefault();
        this.setState({
            items: [{id: ID++, text: this.state.text}].concat(this.state.items),
            text: '',
        });
    };

    deleteItem = (itemId)=>{
        this.setState({
            items: this.state.items.filter((item) => item.id !== itemId),
        });
    };

    render() {
        const tags = ['important', 'starred'];
        
        return (
            <div>
                <h1>My TODOs</h1>
                <form onSubmit={this.addTask}>
                    <input value={this.state.text} onChange={(v)=>{this.setState({text:v.target.value});}}/>
                    <button>Add Task</button>
                </form>
                {this.state.items.map((item) => {
                    return (
                        <TodoItem key={item.id} item={item} tags={tags}
                                  deleteItem={()=>this.deleteItem(item.id)}/>
                    );
                })}
            </div>
        );
    }
}

let ID = 0;
const items = [];
for (let i = 0; i < 1000; i++) {
    items.push({id: ID++, text: 'Todo Item #' + i});
}

class TodoList extends Component {
    render() {
        return (
            <Todos initialItems={items}/>
        );
    }
}


export default TodoList;