import React, { Component } from "react";
import List from "../List";
import SearchForm from "../SearchForm";
import axios from "axios";

class Drink extends Component {

  state = {
    data: [],
    searchCounter: 0
  }

  onFormSubmit = (query) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${query}&term=bar&offset=${this.state.searchCounter}&limit=7`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
      .then((res) => {
        this.setState({
          data: res.data.businesses,
          searchCounter: this.state.searchCounter + 7
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
        <div className="drinkTitle">Drink</div>
        <div className="drinkDiv">
          <img
            className="drinkImg"
            alt=""
            src="https://i.imgur.com/ThCwVKJ.png"
            height="300px"
          ></img>
        </div>
        <List data={this.state.data} />
      </>
    );

  }
}

export default Drink;
