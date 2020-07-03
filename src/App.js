import React, { Component } from "react";
import "./App.scss";
import BigTitle from "./component/BigTitle/BigTitle";
import TodoItem from "./component/TodoItem/TodoItem";
import ModalAddTodo from "./container/ModalAddTodo/ModalAddTodo";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isModalAddShow: false,
    };
  }

  updateList = () => {
    Axios.get("https://huihui-4f73b.firebaseio.com/.json")
      .then((res) => {
        const keys = Object.keys(res.data);
        const list = keys.map((key) => ({
          id: key,
          title: res.data[key].title,
          content: res.data[key].content,
          createdAt: new Date(),
        }));
        this.setState({ list });
      })
      .catch((err) => alert(err.message));
  };

  componentDidMount() {
    this.updateList();
  }

  toggleModalAdd = () => {
    this.setState((state) => ({
      isModalAddShow: !state.isModalAddShow,
    }));
  };

  render() {
    return (
      <div className="app">
        <header>
          <BigTitle />
        </header>
        <main>
          <div className="category-group">
            <button>Tất cả</button>
            <button>Chưa hoàn thành</button>
            <button>Đã hoàn thành</button>
          </div>
          <div className="list-todo">
            {this.state.list.map((todo) => (
              <div key={todo.id} className="list-todo-item">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
          <button className="add-todo-item" onClick={this.toggleModalAdd}>
            <i class="fas fa-plus"></i>
          </button>

          {/**cái đoạn ni dùng redux hay hơn. ko có redux nên phải truyền 1 hàm updatelist để khi modal add thêm 1 todo mới thì hắn mới cập nhật đc */}
          <ModalAddTodo
            updateList={this.updateList}
            show={this.state.isModalAddShow}
            close={this.toggleModalAdd}
          />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
