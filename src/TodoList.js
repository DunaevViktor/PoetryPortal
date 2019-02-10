import React from "react";
import TodoItem from "./TodoItem";
import MyForm from "./MyForm";
import "./TodoList.css";

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
          text: "Покормить кота"
        },
        {
          date: date,
          status: "Готово",
          text: "Катнуть в доту"
        }
      ],
      isInForm: false
    };

    this.onAddNewTodo = this.onAddNewTodo.bind(this);
    this.onSubmitClickInMyForm = this.onSubmitClickInMyForm.bind(this);
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

    if (this.state.isInForm) {
      return <MyForm isCloseMyForm={this.onSubmitClickInMyForm} />;
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
              <TodoItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
