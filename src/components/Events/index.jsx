import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      act: 0,
      index: "",
      datas: []
    };
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  fSubmit = e => {
    e.preventDefault();
    console.log("try");

    const datas = this.state.datas;
    const name = this.refs.name.value;
    const address = this.refs.address.value;

    if (this.state.act === 0) {
      //new
      const data = {
        name,
        address
      };
      datas.push(data);
    } else {
      //update
      const index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  fRemove = i => {
    const datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  fEdit = i => {
    const data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  };

  render() {
    const datas = this.state.datas;
    return (
      <>
        <div className="eventTitle">Events</div>
        <div className="eventDiv">
          <img
            className="eventImg"
            alt=""
            src="https://i.imgur.com/TQwrkZU.png"
            height="300px"
          ></img>
        </div>
        <div className="App">
          <h2>{this.state.title}</h2>
          <form ref="myForm" className="myForm">
            <input
              type="text"
              ref="name"
              placeholder="your name"
              className="formField"
            />
            <input
              type="text"
              ref="address"
              placeholder="your address"
              className="formField"
            />
            <button onClick={e => this.fSubmit(e)} className="myButton">
              submit{" "}
            </button>
          </form>
          <pre>
            {datas.map((data, i) => (
              <li key={i} className="myList">
                {i + 1}. {data.name}, {data.address}
                <button
                  onClick={() => this.fRemove(i)}
                  className="myListButton"
                >
                  remove{" "}
                </button>
                <button onClick={() => this.fEdit(i)} className="myListButton">
                  edit{" "}
                </button>
              </li>
            ))}
          </pre>
        </div>
      </>
    );
  }
}

export default Event;
