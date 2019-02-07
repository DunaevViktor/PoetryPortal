import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.item.status
    };

    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  onChangeStatus() {
    if (this.state.status === "Не готово") {
      this.setState({ status: "Готово" });
    } else {
      this.setState({ status: "Не готово" });
    }
  }

  render() {
    let colorBut = "";

    if (this.state.status === "Не готово") {
      colorBut = "butStyleFalse";
    } else {
      colorBut = "butStyleTrue";
    }

    return (
      <div>
        {this.props.item.text}
        <button className={colorBut} onClick={this.onChangeStatus}>
          {this.state.status}
        </button>
        <b className="dateStyle">{this.props.item.date}</b>
      </div>
    );
  }
}

export default TodoItem;
