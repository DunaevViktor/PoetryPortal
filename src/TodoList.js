import React from "react";
import TodoItem from "./TodoItem";
import MyForm from "./MyForm";
import "./TodoList.css";
import { TODO_STATUSES } from './TodoItem';

let numberOfTodo = 2;

class TodoList extends React.Component {
  constructor() {
    super();

    let today = new Date(2019,1,10),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      todos: [
        {
          date: date,
          status: "Не готово",
          text: "Покормить кота",
          id: 0
        },
        {
          date: date,
          status: "Готово",
          text: "Катнуть в доту",
          id: 1
        }
      ],
      isInForm: false
    };

    this.onAddNewTodo = this.onAddNewTodo.bind(this);
    this.onSubmitClickInMyForm = this.onSubmitClickInMyForm.bind(this);
    this.onChangeStatusInTodoItem = this.onChangeStatusInTodoItem.bind(this);
  }

  onChangeStatusInTodoItem(idOfTask){
    let list = this.state.todos;

    console.log(list[idOfTask]);
    if (list[idOfTask].status === TODO_STATUSES.PENDING) {
      list[idOfTask].status = TODO_STATUSES.DONE;
    } else {
      list[idOfTask].status = TODO_STATUSES.PENDING;
    }
    console.log(list[idOfTask]);
    this.setState({ todos: list});
  }

  onAddNewTodo() {
    this.setState({ isInForm: true });
  }

  onSubmitClickInMyForm(resultsOfMyFormInput) {
    const listToDO = this.state.todos;
    listToDO.push(resultsOfMyFormInput);

    this.setState({ isInForm: false, todos: listToDO });
  }

  render() {
    const todos = this.state.todos;
    let numOfTasks = numberOfTodo;

    if (this.state.isInForm) {
      numberOfTodo++;
      return <MyForm isCloseMyForm={this.onSubmitClickInMyForm} count={numOfTasks}/>;
    }

    return (
      <div className="TodoList-My-Card-Style">
        <div>
          <button
            onClick={this.onAddNewTodo}
            type="button"
            className="btn btn-primary"
          >
            Добавить задание
          </button>
        </div>
        <ul>
          {todos.map((item, i) => (
            <li key={i}>
              <TodoItem item={item} changeStatus={this.onChangeStatusInTodoItem} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
