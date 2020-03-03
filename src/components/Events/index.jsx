import React, { Component } from "react";
import { Form } from "./style";

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
    const city = this.refs.city.value;
    const description = this.refs.description.value;

    if (this.state.act === 0) {
      //new
      const data = {
        name,
        city,
        description
      };
      datas.push(data);
    } else {
      //update
      const index = this.state.index;
      datas[index].name = name;
      datas[index].city = city;
      datas[index].description = description;
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
    this.refs.city.value = data.city;
    this.refs.description.value = data.description;

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
        <div className="formDiv">
          <h2>{this.state.title}</h2>
          <Form ref="myForm" className="myForm">
            <input type="text" ref="name" placeholder="Name" />
            <input type="text" ref="city" placeholder="City" />
            <input
              type="text"
              ref="description"
              placeholder="Description"
              style={{ height: "50px" }}
            />
            <button onClick={e => this.fSubmit(e)}>Enter</button>
          </Form>
          <pre>
            {datas.map((data, i) => (
              <ul key={i} className="eventList">
                ✿ {data.name}
                <br></br>✿ {data.city}
                <br></br>✿ {data.description}
                <button onClick={() => this.fRemove(i)} className="eventBtn">
                  Delete{" "}
                </button>
                <button onClick={() => this.fEdit(i)} className="eventBtn">
                  Edit{" "}
                </button>
              </ul>
            ))}
          </pre>
        </div>
      </>
    );
  }
}

export default Event;
