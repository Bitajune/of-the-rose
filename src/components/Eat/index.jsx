import React, { Component } from "react";
import List from "../List";
import SearchForm from "../SearchForm";
import axios from "axios";

class Eat extends Component {

  state = {
    data: [],
    searchCounter: 0
  }

  onFormSubmit = (query) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${query}&term=food&offset=${this.state.searchCounter}&limit=5`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
      .then((res) => {
        this.setState({
          data: res.data.businesses,
          searchCounter: this.state.searchCounter + 5
        })
      })
      .catch((err) => {
        this.setState({ errorState: `Sorry, we couldn't find the information related to the location you requested, do you want to try some other icecream store?`, loading: false })
      })
  }


  render() {
    return (
      <>
        <SearchForm onFormSubmit={this.onFormSubmit} />
        <div className="eatTitle">Eat</div>
        <div className="eatDiv">
          <img
            className="eatImg"
            alt=""
            src="https://i.imgur.com/zWrIXTM.png"
            height="300px"
          ></img>
        </div>
        <List data={this.state.data} />
      </>
    );
  }
}

export default Eat;
