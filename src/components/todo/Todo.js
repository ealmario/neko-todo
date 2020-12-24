import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './Todo.module.scss'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wouldEdit: false,
      task: this.props.task
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEdit() {
    this.setState( state => ({
      wouldEdit: !state.wouldEdit
    }))
  }

  handleArchive() {
    const { archiveTodo, todo} = this.props;
    archiveTodo(todo.id);
  }

  handleDelete() {
    const { deleteTodo, todo} = this.props;
    deleteTodo(todo.id);
  }
  
  handleUpdate(e) {
    const { updateTodo, todo } = this.props; 
    e.preventDefault();

    updateTodo(todo.id, this.state.task);
    this.setState({
      wouldEdit: false
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { todo } = this.props
    const { wouldEdit, task } = this.state

    return (
      <li className={`${styles.wrapper} ${wouldEdit ? styles.edit : ""}`}>
        <div className={styles.taskContainer}>
          <div className={styles.checkbox} onClick={this.handleArchive}>
            <input 
              type="checkbox" 
              className={styles.checkbox}
              onClick={this.handleArchive}
            />
          </div>
          { wouldEdit ? (
            <form onSubmit={this.handleUpdate}>
              <input 
                type="text" 
                id="task"
                name="task" 
                placeholder={todo.task}
                value={task}
                onChange={this.handleChange}
                className={styles.todoItem}
                required
              />
              <button className={styles.saveBtn}>
                <FontAwesomeIcon icon={faCheck}/>
              </button>
            </form>
          ) : (
            <p className={styles.todoItem} onClick={this.toggleEdit}>{todo.task}</p>
          )}
        </div>

        <div className={styles.btnContainer}>
          <button onClick={this.toggleEdit} title="Edit">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={this.handleDelete} title="Delete">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    )
  }
}
