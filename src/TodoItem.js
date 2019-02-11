import React from "react";
import "./TodoItem.css";

export const TODO_STATUSES = {
  DONE: "Готово",
  PENDING: "Не готово"
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.item.status
    };

    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  /*onChangeStatus(){
    if (this.state.status === TODO_STATUSES.PENDING) {
      this.setState({status: TODO_STATUSES.DONE});
    } else {
      this.setState({status: TODO_STATUSES.PENDING});
    }
  }*/

  onChangeStatus(){
    let idOfTask = this.props.item.id;
    this.props.changeStatus(idOfTask);
  }

  render() {
    let colorOfTextButton = "";

    if (this.state.status === TODO_STATUSES.PENDING) {
      colorOfTextButton = "TodoItem-Style-False";
    } else {
      colorOfTextButton = "TodoItem-Style-True";
    }

    return (
      <div>
        {this.props.item.text}
        <button className={colorOfTextButton} onClick={this.onChangeStatus}>
          {this.state.status}
        </button>
        <b className="TodoItem-Date-Style">{this.props.item.date}</b>
      </div>
    );
  }
}

export default TodoItem;
