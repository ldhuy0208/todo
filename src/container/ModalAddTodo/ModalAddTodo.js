import React, { Component } from "react";
import "./ModalAddTodo.scss";
import Modal from "../../component/Modal/Modal";
import Axios from "axios";

export class ModalAddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    const { title, content } = this.state;
    try {
      await Axios.post("https://huihui-4f73b.firebaseio.com/.json", {
        title,
        content,
      });

      //thêm ok thì cập nhật lại list
      this.props.updateList();

      //và tắt modal
      this.props.close();
    } catch (e) {
      alert(e.message);
    }
  };
  render() {
    console.log(this.props);
    const { show, close } = this.props; //show: boolean, hiện tắt|| close: hàm callback tắt modal
    return (
      <Modal show={show} close={close}>
        <form className="modal-add-todo" onSubmit={this.submitHandler}>
          <h3>Thêm todo</h3>
          <div>
            <label>Tựa đề</label>
            <input
              id="title"
              value={this.state.title}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label>Nội dung</label>
            <textarea
              id="content"
              value={this.state.content}
              onChange={this.onChangeHandler}
            />
          </div>
          <button>Tạo mới</button>
        </form>
      </Modal>
    );
  }
}

export default ModalAddTodo;
