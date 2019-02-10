import React from "react";
import "./MyForm.css";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      date: "",
      status: "Не готово"
    };

    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick(event) {
    event.preventDefault();

    const resultsOfMyFormInput = {
      text: this.state.text,
      status: this.state.status,
      date: this.state.date
    };

    this.props.isCloseMyForm(resultsOfMyFormInput);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitClick}>
        <label htmlFor="date"> Дата: </label>
        <input
          type="text"
          id="date"
          value={this.state.date}
          onChange={event => this.setState({ date: event.target.value })}
          required
          pattern="[0-9]{4}[-][0-9]{1,2}[-][0-9]{1,2}"
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
          id="text"
          value={this.state.text}
          onChange={event => {
            this.setState({ text: event.target.value });
          }}
          required
          minLength="3"
          maxLength="20"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyForm;
