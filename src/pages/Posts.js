import React, { Component } from "react";
import service from "../services/apiService";
import "./Posts.css";
import InfiniteScroll from "react-infinite-scroll-component";

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      result: {
        taken: 0,
        skipped: 0,
        total: 0,
        items: ""
      }
    };

    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    const params = {
      take: 10,
      skip: 15
    };

    service.getPostsPage(params).then(pos => this.setState({ result: pos }));
  }

  render() {
    const list = [];

    for (let i = 0; i < this.state.result.taken; i++) {
      // нужен key props !!!
      list.push(<p>{this.state.result.items[i].content}</p>);
    }

    return (
      <div>
        <InfiniteScroll
          dataLength={list.length}
          // выборка элементов - list?
          next={list}
          hasMore={true}
          //сюда позже <Loading/>
          loader={<h4>Загрузка...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Конец просмотра.</b>
            </p>
          }
        >
          <ul>
            {list.map((item, i) => (
              <li className="custom-text" key={i}>
                {list[i]}
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}

export default Posts;
