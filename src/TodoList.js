import React from "react";
import TodoItem from "./TodoItem";
import MyForm from "./MyForm";
import "./TodoItem.css";

class TodoList extends React.Component {
  constructor() {
    super();

    var today = new Date(),
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

    this.onShowForm = this.onShowForm.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onShowForm() {
    this.setState({ isInForm: true });
  }

  onSubmitClick(obj) {
    const mas = this.state.todos;
    mas.push(obj);

    this.setState({ isInForm: false, todos: mas });
  }

  render() {
    const todos = this.state.todos;

    if (this.state.isInForm) {
      return <MyForm onSubmit={this.onSubmitClick} />;
    }

    return (
      <div className="myStyle">
        <div>
          <button
            onClick={this.onShowForm}
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
