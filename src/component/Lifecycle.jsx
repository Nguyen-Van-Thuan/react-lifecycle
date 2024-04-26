import React from "react";

const users = [
  {
    id: 1,
    name: "user 1",
  },
  {
    id: 2,
    name: "user 2",
  },
  {
    id: 3,
    name: "user 3",
  },
];

class Lifecycle extends React.PureComponent {
  // Hàm tạo -> Khai báo biến
  constructor(props) {
    super(props); // Giup con kết nối cha với props

    console.log(">>>> Run contructor: 000");

    // Khai bao state
    this.state = {
      users: [],
    };

    // Biến trạng thái
    this.isComponentMounted = false;
  }

  // Component sinh ra -> chay componentDidMount
  async componentDidMount() {
    this.isComponentMounted = true;

    console.log(">>> run didmout");

    setTimeout(() => {
      this.setState({
        users: users,
      });
    }, 3000);
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    console.log(">>> run render");

    const { users } = this.state;
    return (
      <div>
        <h1>Component Licycle</h1>
        <div>
          {this.isComponentMounted
            ? users.map(({ id, name }) => <p key={id}>{name}</p>)
            : "Đang cập nhật"}
        </div>
      </div>
    );
  }
}

export default Lifecycle;

//render không chạy 1 lần -> chạy nhiều lần
