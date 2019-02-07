import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      date: "",
      status: "Готов"
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const obj = {
      text: this.state.text,
      status: this.state.status,
      date: this.state.date
    };

    this.props.onSubmit(obj);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="date"> Дата: </label>
        <input
          type="text"
          name="date"
          value={this.state.date}
          onChange={event => this.setState({ date: event.target.value })}
        />
        <label htmlFor="status"> Статус: </label>
        <select
          value={this.state.status}
          onChange={event => {
            this.setState({ status: event.target.value });
          }}
        >
          <option value="Готово">Готово</option>
          <option value="Не готово">Не готово</option>
        </select>
        <label htmlFor="text"> Текст: </label>
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={event => {
            this.setState({ text: event.target.value });
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyForm;
